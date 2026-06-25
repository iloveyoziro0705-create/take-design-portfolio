#!/usr/bin/env python3
"""
Luminos Skin LP — DALL·E 3 画像自動生成スクリプト
OpenAI APIキーが必要です。

費用目安 (2025年時点):
  standard 品質: $0.04/枚
  hd 品質      : $0.08/枚
  全5枚生成    : 約 $0.20〜$0.40

APIキー取得: https://platform.openai.com/api-keys

実行方法:
  python3 scripts/generate-ai-images.py
"""

import os
import sys
import json
import time
import urllib.request
import urllib.error

IMAGES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "images")

# IMAGE-PROMPT シリーズ（asset-management-rules.md / images/README.md 準拠）
GENERATIONS = [
    {
        "filename": "fv-hero.jpg",
        "size":     "1024x1792",   # 縦長 (4:5相当)
        "quality":  "hd",
        "desc":     "FVヒーロー — 施術シーン（縦長）",
        "prompt": (
            "A 35-year-old Japanese woman with clear, radiant skin lying on a white facial treatment bed "
            "in a luxury private salon room. Warm natural window light from the left. Beige and cream interior. "
            "Professional female esthetician's hands gently applying facial massage. "
            "The client's expression is serene and relaxed, eyes closed. "
            "Shot from slightly above at a 45-degree angle. Very shallow depth of field. "
            "No text, no logos, no watermarks. "
            "High-end Japanese beauty salon photography. Film-like warm tone."
        ),
    },
    {
        "filename": "menu-01.jpg",
        "size":     "1792x1024",   # 横長 (16:9)
        "quality":  "standard",
        "desc":     "メニュー01 — ベーシックフェイシャル",
        "prompt": (
            "Close-up professional photo of a facial cleansing and exfoliation treatment "
            "on a Japanese woman's face in a private luxury esthetic salon. "
            "Soft warm overhead lighting. Clean white towels, professional skincare tools visible. "
            "Calm and serene atmosphere. No text, no logos. "
            "High-end beauty photography, warm neutral tones."
        ),
    },
    {
        "filename": "menu-02.jpg",
        "size":     "1792x1024",
        "quality":  "standard",
        "desc":     "メニュー02 — エイジングケア",
        "prompt": (
            "Professional photo of a face lifting and contouring massage treatment — "
            "female esthetician's hands performing gentle upward strokes on a Japanese woman's "
            "jawline and cheeks in a luxurious private esthetic room. "
            "Soft warm lighting from above. Beige interior. "
            "Professional and serene atmosphere. No text, no logos."
        ),
    },
    {
        "filename": "menu-03.jpg",
        "size":     "1792x1024",
        "quality":  "standard",
        "desc":     "メニュー03 — 保湿集中フェイシャル",
        "prompt": (
            "Professional photo of a deep hydration face mask treatment — "
            "a Japanese woman wearing a cream-colored moisturizing sheet mask, "
            "lying relaxed on a white treatment bed in a luxury private salon. "
            "Warm soft lighting from above. White sheets, small candles or plants nearby. "
            "Rejuvenating, serene atmosphere. No text, no logos."
        ),
    },
    {
        "filename": "owner.jpg",
        "size":     "1024x1792",   # 縦長 (3:4相当)
        "quality":  "hd",
        "desc":     "オーナー写真（縦長）",
        "prompt": (
            "Professional portrait of a 38-year-old Japanese female esthetician and salon owner. "
            "Wearing a clean white or light beige esthetic uniform. "
            "Gentle, warm, confident smile. Trustworthy and professional expression. "
            "Simple soft beige or cream background. Soft studio lighting from the front. "
            "Shot from waist level. Professional beauty business headshot style. "
            "No text, no logos, no watermarks."
        ),
    },
]


def check_quality_note(generations):
    hd_count = sum(1 for g in generations if g["quality"] == "hd")
    std_count = sum(1 for g in generations if g["quality"] == "standard")
    est_cost = hd_count * 0.08 + std_count * 0.04
    return hd_count, std_count, est_cost


def generate_images(api_key: str, quality_override: str | None = None) -> None:
    url = "https://api.openai.com/v1/images/generations"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type":  "application/json",
    }

    for gen in GENERATIONS:
        out_path = os.path.join(IMAGES_DIR, gen["filename"])
        if os.path.exists(out_path):
            print(f"  [スキップ] {gen['filename']} は既に存在します。")
            continue

        quality = quality_override or gen["quality"]
        print(f"\n[DALL·E 3] {gen['filename']} ({gen['size']}, {quality})")
        print(f"  {gen['desc']}")

        payload = json.dumps({
            "model":           "dall-e-3",
            "prompt":          gen["prompt"],
            "n":               1,
            "size":            gen["size"],
            "quality":         quality,
            "response_format": "url",
        }).encode("utf-8")

        req = urllib.request.Request(url, data=payload, headers=headers)

        try:
            with urllib.request.urlopen(req, timeout=90) as resp:
                data = json.loads(resp.read())
        except urllib.error.HTTPError as e:
            body = e.read().decode("utf-8", errors="replace")
            print(f"  ✗ HTTP {e.code}: {body[:300]}")
            continue
        except Exception as e:
            print(f"  ✗ エラー: {e}")
            continue

        img_url = data["data"][0]["url"]
        revised = data["data"][0].get("revised_prompt", "")
        if revised:
            print(f"  ↳ 修正プロンプト: {revised[:80]}...")

        print(f"  → ダウンロード中...")
        try:
            urllib.request.urlretrieve(img_url, out_path)
            print(f"  ✓ 保存: {out_path}")
        except Exception as e:
            print(f"  ✗ DLエラー: {e}")
            continue

        # DALL·E 3 は連続リクエストで429が出やすい
        time.sleep(4)


def main():
    print("=" * 55)
    print(" Luminos Skin LP — DALL·E 3 画像自動生成")
    print("=" * 55)

    os.makedirs(IMAGES_DIR, exist_ok=True)

    hd_n, std_n, est_cost = check_quality_note(GENERATIONS)
    print(f"\n生成する画像: {len(GENERATIONS)}枚")
    print(f"  HD品質     : {hd_n}枚 × $0.08")
    print(f"  Standard品質: {std_n}枚 × $0.04")
    print(f"  推定コスト : 約 ${est_cost:.2f}")

    print()
    api_key = input("OpenAI APIキー (sk-...): ").strip()
    if not api_key or not api_key.startswith("sk-"):
        print("有効なAPIキーを入力してください（sk-...）。")
        sys.exit(1)

    print("\n品質を選んでください:")
    print("  1) デフォルト（FV/オーナーはHD、メニューはStandard）")
    print("  2) 全枚Standard（安く速く）")
    print("  3) 全枚HD（高品質、推定 $0.40）")
    q_choice = input("選択 (1/2/3): ").strip()
    quality_override = None
    if q_choice == "2":
        quality_override = "standard"
    elif q_choice == "3":
        quality_override = "hd"

    print("\n以下を生成します:")
    for g in GENERATIONS:
        q = quality_override or g["quality"]
        existing = "（スキップ）" if os.path.exists(os.path.join(IMAGES_DIR, g["filename"])) else ""
        print(f"  {g['filename']:18s} {g['size']:12s} {q:8s} — {g['desc']} {existing}")

    confirm = input("\n続行しますか？ (y/N): ").strip().lower()
    if confirm != "y":
        print("キャンセルしました。")
        sys.exit(0)

    generate_images(api_key, quality_override)

    print("\n" + "=" * 55)
    print(" 生成完了!")
    print(f" 保存先: {IMAGES_DIR}")
    print()
    print(" 必ず確認してください:")
    print("   □ 手・指の本数が自然か（5本）")
    print("   □ 顔の造形が崩れていないか")
    print("   □ 背景に不自然な歪みがないか")
    print("   □ 意図しないテキスト・ロゴが入っていないか")
    print("   □ 施術効果を過度に示唆していないか（薬機法）")
    print()
    print(" GitHubへのpush:")
    print("   git add beauty-salon-lp/images/")
    print("   git commit -m 'add: DALL·E 3生成画像追加'")
    print("   git push")
    print("=" * 55)


if __name__ == "__main__":
    main()
