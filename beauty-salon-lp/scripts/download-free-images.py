#!/usr/bin/env python3
"""
Luminos Skin LP — フリー素材自動ダウンロード
Unsplash API または Pexels API を使用して画像を取得します。

APIキーの取得方法:
  Unsplash: https://unsplash.com/developers → New Application
  Pexels  : https://www.pexels.com/api/    → Get started

実行方法:
  python3 scripts/download-free-images.py
"""

import os
import sys
import json
import time
import urllib.request
import urllib.parse
import urllib.error

IMAGES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "images")

# 画像定義: filename / Unsplash検索ワード / Pexels検索ワード / orientation
IMAGES = [
    {
        "filename":    "fv-hero.jpg",
        "unsplash_q":  "facial treatment salon woman relaxing",
        "pexels_q":    "facial treatment woman salon",
        "orientation": "portrait",
        "desc":        "FVヒーロー — フェイシャル施術シーン（縦長）",
    },
    {
        "filename":    "menu-01.jpg",
        "unsplash_q":  "facial cleansing skincare beauty treatment",
        "pexels_q":    "facial cleansing skincare",
        "orientation": "landscape",
        "desc":        "メニュー01 — ベーシックフェイシャル",
    },
    {
        "filename":    "menu-02.jpg",
        "unsplash_q":  "face lifting massage anti aging beauty",
        "pexels_q":    "face lifting massage beauty salon",
        "orientation": "landscape",
        "desc":        "メニュー02 — エイジングケア",
    },
    {
        "filename":    "menu-03.jpg",
        "unsplash_q":  "face mask hydration skincare moisturizing",
        "pexels_q":    "face mask skincare treatment",
        "orientation": "landscape",
        "desc":        "メニュー03 — 保湿集中フェイシャル",
    },
    {
        "filename":    "owner.jpg",
        "unsplash_q":  "professional woman portrait beauty salon warm smile",
        "pexels_q":    "professional woman portrait salon",
        "orientation": "portrait",
        "desc":        "オーナー写真（縦長）",
    },
    {
        "filename":    "ogp.jpg",
        "unsplash_q":  "beauty salon skincare luxury interior",
        "pexels_q":    "beauty salon interior luxury",
        "orientation": "landscape",
        "desc":        "OGP画像（SNSシェア用）",
    },
]


# ==============================
#  Unsplash
# ==============================
def download_from_unsplash(api_key: str) -> None:
    base = "https://api.unsplash.com"
    headers = {"Authorization": f"Client-ID {api_key}", "Accept-Version": "v1"}

    for img in IMAGES:
        out_path = os.path.join(IMAGES_DIR, img["filename"])
        if os.path.exists(out_path):
            print(f"  [スキップ] {img['filename']} は既に存在します。")
            continue

        print(f"\n[Unsplash] {img['filename']} — {img['desc']}")
        print(f"  検索: '{img['unsplash_q']}'")

        params = urllib.parse.urlencode({
            "query":       img["unsplash_q"],
            "orientation": img["orientation"],
            "content_filter": "high",
        })
        url = f"{base}/photos/random?{params}"
        req = urllib.request.Request(url, headers=headers)

        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read())
        except urllib.error.HTTPError as e:
            print(f"  ✗ HTTP {e.code}: {e.reason}")
            continue
        except Exception as e:
            print(f"  ✗ エラー: {e}")
            continue

        img_url = data["urls"].get("regular") or data["urls"]["full"]
        print(f"  → {img_url[:90]}...")

        try:
            urllib.request.urlretrieve(img_url, out_path)
            print(f"  ✓ 保存: {out_path}")
        except Exception as e:
            print(f"  ✗ DLエラー: {e}")
            continue

        # Unsplash利用規約: ダウンロード通知を送る
        try:
            dl_loc = data["links"]["download_location"]
            req2 = urllib.request.Request(dl_loc, headers=headers)
            urllib.request.urlopen(req2, timeout=10).close()
        except Exception:
            pass

        time.sleep(1)  # レートリミット対策


# ==============================
#  Pexels
# ==============================
def download_from_pexels(api_key: str) -> None:
    base = "https://api.pexels.com/v1"
    headers = {"Authorization": api_key}

    for img in IMAGES:
        out_path = os.path.join(IMAGES_DIR, img["filename"])
        if os.path.exists(out_path):
            print(f"  [スキップ] {img['filename']} は既に存在します。")
            continue

        print(f"\n[Pexels] {img['filename']} — {img['desc']}")
        print(f"  検索: '{img['pexels_q']}'")

        params = urllib.parse.urlencode({
            "query":       img["pexels_q"],
            "orientation": img["orientation"],
            "per_page":    1,
            "size":        "large",
        })
        url = f"{base}/search?{params}"
        req = urllib.request.Request(url, headers=headers)

        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read())
        except urllib.error.HTTPError as e:
            print(f"  ✗ HTTP {e.code}: {e.reason}")
            continue
        except Exception as e:
            print(f"  ✗ エラー: {e}")
            continue

        photos = data.get("photos", [])
        if not photos:
            print(f"  ✗ 検索結果なし")
            continue

        img_url = photos[0]["src"]["large2x"]
        print(f"  → {img_url[:90]}...")

        try:
            urllib.request.urlretrieve(img_url, out_path)
            print(f"  ✓ 保存: {out_path}")
        except Exception as e:
            print(f"  ✗ DLエラー: {e}")

        time.sleep(1)


# ==============================
#  エントリポイント
# ==============================
def main():
    print("=" * 55)
    print(" Luminos Skin LP — フリー素材自動ダウンロード")
    print("=" * 55)
    os.makedirs(IMAGES_DIR, exist_ok=True)

    print("\n使用するサービスを選んでください:")
    print("  1) Unsplash  ( https://unsplash.com/developers )")
    print("  2) Pexels    ( https://www.pexels.com/api/ )")
    print("  3) 両方試す（Unsplash → 取得できなければ Pexels）")

    choice = input("\n選択 (1/2/3): ").strip()

    if choice in ("1", "3"):
        key = input("Unsplash Access Key: ").strip()
        if not key:
            print("APIキーが入力されていません。")
            sys.exit(1)
        download_from_unsplash(key)

    if choice in ("2", "3"):
        # choice==3 の場合、まだ存在しないファイルだけ Pexels で補完
        key = input("Pexels API Key: ").strip()
        if not key:
            print("APIキーが入力されていません。")
            sys.exit(1)
        download_from_pexels(key)

    if choice not in ("1", "2", "3"):
        print("無効な選択です。")
        sys.exit(1)

    print("\n" + "=" * 55)
    print(" 完了!")
    print(f" 保存先: {IMAGES_DIR}")
    print()
    print(" 次のステップ:")
    print("   git add beauty-salon-lp/images/")
    print("   git commit -m 'add: フリー素材画像追加'")
    print("   git push")
    print("=" * 55)


if __name__ == "__main__":
    main()
