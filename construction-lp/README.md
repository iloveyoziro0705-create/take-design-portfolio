# Construction LP — 建設会社LP デザインシステム

○○建設株式会社（ダミー社名）のLP画像を解析し、Figmaで100%編集可能なデザインシステムとして再構築したプロジェクト。**「画像を再現する」のではなく「Figmaを再現する」**という意識でHTML/CSSを実装している。

## ファイル構成

```
construction-lp/
├── index.html            … セマンティックHTML本体
├── style.css              … Design Tokenを変数化したメインスタイル（BEM）
├── reset.css               … モダンCSSリセット
├── script.js               … スクロールリビール(Fade)・メニュートグルのみの最小限JS
├── design-spec.md          … デザイン解析仕様書（コンセプト〜レスポンシブ思想まで20項目）
├── design-token.json       … Design Token（color/spacing/radius/shadow/font/border/z-index/animation）
├── figma-layout.md         … Figma Auto Layout移植用のFrame構造記述
├── component-guide.md      … 全コンポーネントの用途・Variants・サイズ・ルール一覧
├── README.md               … 本ファイル
└── assets/
    ├── images/             … 写真（現在はプレースホルダー、下記参照）
    ├── icons/              … ラインアイコンSVG一式
    ├── logos/              … ロゴマークSVG
    └── illustrations/      … 使用なし（本LPはイラストを使用しない設計のため空）
```

## 読む順番（デザインを理解する場合）

1. `design-spec.md` — まずデザイン解析全体を把握
2. `design-token.json` — 実際の値（色・余白・影・フォント等）を確認
3. `component-guide.md` — コンポーネント単位の仕様を確認
4. `figma-layout.md` — Figmaに移植する際のAuto Layout構造を確認
5. `index.html` / `style.css` — 実装（HTML構造とCSS変数の対応関係）を確認

## 写真について（要差し替え）

このマシンには画像生成・画像取得の手段がないため、`assets/images/`内の写真は **プレースホルダー**（PIL生成、カメラアイコン+必要な写真内容のラベル付き）になっている。本番公開前に以下の実写真へ差し替えること。ファイル名・比率は変更しないこと（CSSのaspect-ratio指定と一致させているため）。

| ファイル名 | 比率 | 内容 |
|---|---|---|
| `hero-worker.jpg` | 3:4 | ヒーロー：ブロックを据え付ける職人の施工風景 |
| `before-vacant-lot.jpg` | 1:1 | 施工前：更地・造成前 |
| `after-exterior.jpg` | 1:1 | 施工後：外構・アプローチ完成後 |
| `service-gaikou.jpg` | 4:3 | 外構工事：門まわり・フェンス施工事例 |
| `service-zousei.jpg` | 4:3 | 造成工事：宅地造成・重機作業 |
| `service-hosou.jpg` | 4:3 | 舗装工事：駐車場・道路のアスファルト舗装 |
| `service-kaitai.jpg` | 4:3 | 解体撤去工事：解体現場 |
| `service-youheki.jpg` | 4:3 | 擁壁工事：コンクリート擁壁 |
| `service-haisui.jpg` | 4:3 | 排水・管工事：排水管敷設 |

## 社名・エリア名について

`○○建設株式会社` `○○市` 等はダミー表記のまま維持している（元画像通り）。実際の案件名が確定した際は `index.html` 内のテキストのみを差し替え、レイアウト・トークン・クラス構造は変更しないこと。

## フォント

- 見出し：M PLUS Rounded 1c（Google Fonts、`index.html`内で読み込み済み）
- 本文：Noto Sans JP（同上）

## ブラウザ確認

Playwrightで Mobile(390px) / Tablet-Desktop(900–1200px) の両方で表示確認済み。横スクロールなし、ヘッダーCTA・大型CTAボタンのラベル折返し（オーフン文字）が出ないことを確認済み。

## 今回のスコープ外

`FAQ` `お客様の声（Review）` `比較表（Comparison）` `入力フォーム（Form）` は元LP画像に存在しないコンポーネントのため未実装（詳細は `component-guide.md` 末尾を参照）。追加時は本デザインシステムのトークン・命名規則に準拠すること。
