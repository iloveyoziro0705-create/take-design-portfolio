# LP作成スキル — TAKE Design Portfolio

このスキルを呼び出したら、以下のルールとフローに従ってLPを作成・更新する。

---

## 1. フォルダ・ファイル構成ルール

```
take-design-portfolio/
├── index.html              ← 絶対に触らない（ポートフォリオ本体）
├── works.html              ← 絶対に触らない
└── [案件名]-lp/
    ├── index.html          ← 新規LP
    └── images/             ← 画像が必要な場合のみ作成
        └── *.png / *.jpg
```

- ルートの `index.html` と `works.html` は **絶対に上書きしない**
- フォルダ名は `[案件名]-lp/` の形式（例: `dental-lp/`, `gym-lp/`）
- 1ファイルで完結するHTMLを基本とする（外部CSSファイル不要）

---

## 2. LP作成フロー

### ステップ1: 案件ヒアリング（ユーザーへの確認）
以下を確認してから着手する（指示に含まれていれば省略OK）:
- **業種・サービス名**: 何のLPか
- **ターゲット**: 誰に向けたLPか
- **トーン**: 高級感 / 親しみやすい / 信頼感 / ポップ など
- **カラーイメージ**: 指定があれば従う
- **セクション要件**: 必要なセクションの指定（なければ業種に合わせて判断）
- **画像**: 自前画像あり / なし（なしならSVGプレースホルダー）

### ステップ2: HTMLを作成
`[案件名]-lp/index.html` を新規作成する。

### ステップ3: 画像ありの場合
1. `[案件名]-lp/images/` フォルダを作成してpush
2. 必要な画像一覧（ファイル名・推奨サイズ・内容）をユーザーに伝える
3. ユーザーがアップロード後、SVGプレースホルダーを `<img>` タグに差し替えてpush

### ステップ4: commit & push
```bash
git add [案件名]-lp/
git commit -m "add [案件名]-lp: [一言説明]"
git push -u origin [作業ブランチ名]
```

### ステップ5: master へ反映
```bash
git checkout master
git merge [作業ブランチ名]
git push origin master
git checkout [作業ブランチ名]
```

---

## 3. HTMLテンプレート構造

### head（必須）
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[サービス名]</title>
  <meta name="description" content="[120字以内の説明]" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    /* CSS変数 → リセット → コンポーネント → セクション → レスポンシブ の順 */
  </style>
</head>
```

### CSS設計パターン
```css
:root {
  /* カラーパレット（業種に合わせて変更） */
  --primary: #2563eb;
  --primary-dark: #1e3a8a;
  --accent: #10b981;
  --bg: #f8fafc;
  --text: #111827;
  --sub: #64748b;
  --line: #e2e8f0;
  --card: #fff;
  --shadow: 0 20px 60px rgba(15,23,42,.1);
  --shadow-sm: 0 4px 16px rgba(15,23,42,.07);
  --r: 20px;
  --r-lg: 32px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body { font-family: 'Noto Sans JP', sans-serif; color: var(--text); line-height: 1.85; }
.container { width: min(1120px, 92%); margin: auto; }
.section { padding: 120px 0; }
```

### カラーパレット例（業種別）
| 業種 | メインカラー | トーン |
|------|------------|--------|
| 美容・エステ | `#d7b49e` ゴールド系 | 高級・温かみ |
| 医療・歯科 | `#0ea5e9` 青系 | 清潔・信頼 |
| フィットネス | `#f97316` オレンジ系 | 活力・エネルギー |
| 飲食・レストラン | `#92400e` ブラウン系 | 温かみ・本格 |
| 採用・求人 | `#2563eb` 青+`#10b981` 緑 | 安心・成長 |
| 金融・ファイナンス | `#1e293b` 紺系 | 信頼・プロ |
| AI・テック | `#7c3aed` 紫系 | 革新・先進 |

### 標準セクション構成（業種に合わせて取捨選択）
```
1. Header（固定ナビ）
2. Hero（ファーストビュー：キャッチコピー + CTA）
3. 課題提起（ターゲットの悩み）
4. サービス紹介・特徴（3〜4項目）
5. 実績・数字（信頼構築）
6. 料金・プラン
7. よくある質問（FAQ）
8. お客様の声・事例
9. CTA（最終行動喚起）
10. Footer
```

---

## 4. デザインクオリティ基準

以下を必ず守る:

### レスポンシブ
- モバイルファースト。`@media (max-width: 768px)` で確認
- グリッドは `grid-template-columns: 1fr 1fr` → モバイルで `1fr`
- フォントサイズは `clamp()` を活用: `clamp(28px, 4vw, 48px)`

### タイポグラフィ
- 見出し: `font-weight: 900`, `line-height: 1.3〜1.4`
- 本文: `font-weight: 400〜500`, `line-height: 1.8〜1.9`
- 英語アクセント文字は `Jost` や `Inter` を追加してもOK

### UX
- CTAボタンは `border-radius: 999px`（pill型）が標準
- ホバー: `transform: translateY(-3px)` + `box-shadow` 強調
- アニメーション: `transition: .22s` を基本に、派手にしすぎない
- スクロール追従ヘッダー: `position: fixed; backdrop-filter: blur(20px)`

### 禁止事項
- `!important` の多用
- インラインスタイルの乱用
- 画像のalt属性省略
- 文字サイズ 12px 未満（本文）

---

## 5. 画像プレースホルダー（SVG）の書き方

画像が届くまでの仮表示:
```html
<!-- プレースホルダー（画像到着後に<img>タグへ差し替え） -->
<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:20px">
  <rect width="800" height="500" fill="#e2e8f0"/>
  <text x="400" y="260" text-anchor="middle" fill="#94a3b8" font-size="20" font-family="sans-serif">
    hero-image.png（推奨: 800×500px）
  </text>
</svg>

<!-- 画像到着後はこれに差し替え -->
<img src="./images/hero-image.png" alt="[説明]" style="width:100%;border-radius:20px">
```

---

## 6. ブランチ運用ルール

- `master` ブランチ：本番。GitHubPagesで公開されている
- 作業は専用ブランチで行い、完成後に必ず `master` へmerge & push
- LP作成・更新の最後に必ずmasterへ反映する（忘れるとGitHubで見えない）

---

## 7. チェックリスト（push前に確認）

- [ ] ルートの `index.html` / `works.html` を変更していない
- [ ] `[案件名]-lp/index.html` が正しいパスにある
- [ ] HTMLがバリデーションエラーなし（構造が壊れていない）
- [ ] モバイル表示が崩れていない（`max-width: 375px` 相当）
- [ ] 全CTAボタンのリンク先が設定されている（`href="#"`等）
- [ ] `<title>` と `<meta name="description">` が設定されている
- [ ] 画像のalt属性がすべて設定されている
- [ ] masterへのmerge & pushを実施した

---

## 使い方メモ

このスキルは `/create-lp` で呼び出せる。
引数（案件名・業種・色など）をあわせて渡すと、確認なしで即着手できる。

例:
```
/create-lp 歯科クリニック向けLP。ターゲットは30〜50代。信頼感重視の青系カラー。
```
