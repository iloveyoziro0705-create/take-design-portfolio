# Luminos Skin LP — 画像素材スクリプト

## スクリプト一覧

| ファイル | 用途 | 必要なもの |
|---------|------|----------|
| `download-free-images.py` | Unsplash / Pexels から自動DL | APIキー（無料）|
| `generate-ai-images.py` | DALL·E 3 で画像を自動生成 | OpenAI APIキー（有料）|

---

## 1. フリー素材を自動ダウンロードする

### APIキー取得手順

**Unsplash（無料）**
1. https://unsplash.com/developers にアクセス
2. "Your applications" → "New Application"
3. 利用規約に同意
4. アプリ名を入力（例: `luminos-skin-lp`）
5. "Access Key" をコピー

**Pexels（無料）**
1. https://www.pexels.com/api/ にアクセス
2. "Get started" → アカウント作成
3. ダッシュボードで "Your API Key" をコピー

### 実行手順

```bash
# このリポジトリのルートで実行
cd beauty-salon-lp

python3 scripts/download-free-images.py
```

プロンプトに従ってサービスを選択し、APIキーを入力するだけです。

### ダウンロードされるファイル

```
images/
├── fv-hero.jpg    ← FVヒーロー（縦長）
├── menu-01.jpg    ← ベーシックフェイシャル（横長）
├── menu-02.jpg    ← エイジングケア（横長）
├── menu-03.jpg    ← 保湿集中フェイシャル（横長）
├── owner.jpg      ← オーナー写真（縦長）
└── ogp.jpg        ← OGP（SNSシェア用）
```

> **既存ファイルは上書きしません**。再取得したい場合は先に削除してください。

---

## 2. DALL·E 3 で画像を自動生成する

### 費用について

| 品質 | 1枚の費用 |
|------|---------|
| standard | $0.04 / 枚 |
| hd | $0.08 / 枚 |
| 5枚（デフォルト設定） | 約 **$0.28** |

### APIキー取得手順

1. https://platform.openai.com/api-keys にアクセス
2. "Create new secret key" をクリック
3. `sk-...` で始まるキーをコピー
4. 事前に https://platform.openai.com/settings/billing でクレジットを追加

### 実行手順

```bash
cd beauty-salon-lp

python3 scripts/generate-ai-images.py
```

品質（standard / hd）を選択 → APIキーを入力 → 確認後に生成開始。

### 生成後チェックリスト（必須）

生成された画像を必ず目視確認してください：

- [ ] 手・指の本数が自然か（5本であること）
- [ ] 顔の造形が崩れていないか
- [ ] 背景に不自然な歪みがないか
- [ ] 意図しないテキスト・ロゴが写り込んでいないか
- [ ] 施術の「効果を保証」するような表現になっていないか（薬機法）
- [ ] 実在の施設・人物に見えないか（肖像権・景表法）

---

## 3. GitHubに反映する

```bash
# images/ フォルダをステージング
git add beauty-salon-lp/images/

# コミット
git commit -m "add: LP画像素材追加"

# プッシュ
git push
```

---

## よくある質問

**Q. Python が入っていない場合は？**  
macOS / Linux には標準でインストール済みです。Windows の場合は https://python.org からインストールしてください。

**Q. Unsplash の画像をそのまま LP に使っても大丈夫？**  
Unsplash は商用利用・帰属表記不要で使用可能です。ただし本番公開前にライセンス条項（https://unsplash.com/license）を確認してください。

**Q. DALL·E 3 で生成した画像の著作権は？**  
OpenAI の利用規約に基づき、生成した画像はユーザーが使用できます（OpenAI 利用規約参照）。

---

*最終更新: 2026-06-25 | Luminos Skin LP | TAKE Design*
