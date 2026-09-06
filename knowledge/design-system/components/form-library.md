# Form Library
> Design System Phase 9 — Form Component 完全ライブラリ
> 参考: Land-book / Lapa Ninja / One Page Love / Awwwards / Godly
> 収録パターン数: 35件
> 最終更新: 2026-07-04

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 01 ｜ Input / Textarea（単体フィールド）
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-001
**Input Standard（標準テキスト入力）**

| 項目 | 内容 |
|------|------|
| 名称 | Input Standard 標準テキスト入力 |
| カテゴリ | Input |
| 高さ | 52〜56px |
| 角丸 | 8px |
| デザイン特徴 | 白背景 / border: 1.5px solid #D1D5DB / フォーカス: border-color ブランドカラー + shadow glow |
| フォント | 16px（SP拡大防止のため16px以上推奨）|
| ラベル | 上部ラベル（外側）または Floating Label |
| プレースホルダー | グレー（#9CA3AF）|
| エラー状態 | border: #EF4444 / エラーテキスト赤 |
| 推奨Section | Form全般 |
| スコア | **88** |
| ランク | **S** |

---

### FORM-002
**Input Floating Label（フローティングラベル）**

| 項目 | 内容 |
|------|------|
| 名称 | Floating Label Input |
| カテゴリ | Input |
| 高さ | 56〜64px |
| 角丸 | 8px |
| デザイン特徴 | 入力前: プレースホルダー位置にラベル / 入力中: ラベルが上に浮く（transform + scale）|
| 実装 | CSS :focus + :not(:placeholder-shown) selector |
| 推奨Section | Contact Form / Lead Form |
| スコア | **83** |
| ランク | **S** |

---

### FORM-003
**Input With Icon（左アイコン付き）**

| 項目 | 内容 |
|------|------|
| 名称 | Input アイコン付き 左アイコン |
| カテゴリ | Input |
| 高さ | 52px |
| デザイン特徴 | 左にアイコン（16〜20px）/ padding-left: 40〜48px |
| アイコン例 | 📧メール / 📞電話 / 👤名前 / 🔍検索 |
| 推奨Section | Form / 検索ボックス |
| スコア | **82** |
| ランク | **A+** |

---

### FORM-004
**Input Large（Hero inline form用）**

| 項目 | 内容 |
|------|------|
| 名称 | Input Large Hero / CTA埋め込み用 |
| カテゴリ | Input |
| 高さ | 64〜72px |
| 角丸 | 12〜36px |
| デザイン特徴 | 大きめサイズ / ボタン右横または下に配置 / 白背景 shadow |
| 推奨Section | Hero（メール登録）/ CTA-015 |
| スコア | **86** |
| ランク | **S** |

---

### FORM-005
**Textarea 標準**

| 項目 | 内容 |
|------|------|
| 名称 | Textarea 標準 お問い合わせ内容 |
| カテゴリ | Textarea |
| 高さ | 120〜160px（resize: vertical）|
| 角丸 | 8px |
| デザイン特徴 | Input Standardと同じスタイル統一 / resize: vertical のみ許可 |
| 文字数カウント | 最大文字数表示（右下小テキスト）|
| 推奨Section | Contact Form |
| スコア | **85** |
| ランク | **S** |

---

### FORM-006
**Select ドロップダウン**

| 項目 | 内容 |
|------|------|
| 名称 | Select ドロップダウン カスタムスタイル |
| カテゴリ | Select |
| 高さ | 52px |
| 角丸 | 8px |
| デザイン特徴 | カスタム矢印アイコン（右）/ appearance: none でデフォルトを消す |
| 推奨Section | Form / 絞り込み |
| スコア | **82** |
| ランク | **A+** |

---

### FORM-007
**Checkbox カスタムスタイル**

| 項目 | 内容 |
|------|------|
| 名称 | Checkbox カスタムスタイル |
| カテゴリ | Checkbox |
| サイズ | 20〜24px |
| デザイン特徴 | appearance: none / カスタム枠 / チェック時: ブランドカラー背景 + 白チェックマーク |
| アニメーション | チェック時 0.15s transition |
| アクセシビリティ | label htmlFor / focus-visible |
| 推奨Section | Form（同意チェック）|
| スコア | **84** |
| ランク | **S** |

---

### FORM-008
**Radio Button カスタム**

| 項目 | 内容 |
|------|------|
| 名称 | Radio Button カスタムスタイル |
| カテゴリ | Radio |
| サイズ | 20〜24px（円形）|
| デザイン特徴 | appearance: none / 選択時: ブランドカラー外輪 + 内部塗りつぶし |
| 推奨Section | Form（選択肢）/ Pricing（プラン選択）|
| スコア | **82** |
| ランク | **A+** |

---

### FORM-009
**Toggle Switch（オン/オフ）**

| 項目 | 内容 |
|------|------|
| 名称 | Toggle Switch ON/OFF |
| カテゴリ | Toggle |
| サイズ | 48×24px（トラック）|
| デザイン特徴 | OFF: グレー背景 / ON: ブランドカラー背景 / 白円が左右に移動 |
| 実装 | CSS-only可能（checkbox + label）|
| 推奨Section | Pricing（月/年払い）/ 設定 |
| スコア | **85** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 02 ｜ Contact Form（お問い合わせフォーム）
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-010
**Contact Form スタンダード（3〜5フィールド）**

| 項目 | 内容 |
|------|------|
| 名称 | Contact Form 標準 お問い合わせ |
| カテゴリ | Contact Form |
| フィールド | 名前 / メール / 電話（任意）/ お問い合わせ内容 / 送信ボタン |
| デザイン特徴 | 白背景カード / フィールド縦並び / 送信ボタンフルワイド |
| バリデーション | HTML5 required + JS バリデーション |
| 完了処理 | 送信後インラインメッセージ（ページ遷移なし）|
| 推奨Section | CTA / PROFILE-051 |
| スコア | **88** |
| ランク | **S** |

---

### FORM-011
**Contact Form 2カラム（左テキスト・右フォーム）**

| 項目 | 内容 |
|------|------|
| 名称 | Contact Form 左テキスト・右フォーム 2カラム |
| カテゴリ | Contact Form |
| フィールド | 名前 / メール / 電話 / 内容 / 送信 |
| デザイン特徴 | 左: CTAコピー＋安心材料 / 右: フォーム |
| 推奨Section | CTA-045 / CTA Section |
| スコア | **87** |
| ランク | **S** |

---

### FORM-012
**Inline Form（メール1フィールド）**

| 項目 | 内容 |
|------|------|
| 名称 | Inline Form メールアドレス1フィールド |
| カテゴリ | Inline Form |
| 構成 | Input（メール）+ ボタン（横並び）|
| 高さ | 56〜64px（InputとButtonを同じ高さに揃える）|
| デザイン特徴 | 白カード / Input左 / Button右（or 角丸で連結）|
| 推奨Section | Hero / CTA-015 / Newsletter |
| スコア | **90** |
| ランク | **S+** |

---

### FORM-013
**Inline Form 2フィールド（名前＋メール）**

| 項目 | 内容 |
|------|------|
| 名称 | Inline Form 名前＋メール 2フィールド |
| カテゴリ | Inline Form |
| 構成 | 名前Input + メールInput + ボタン（横並び）|
| レスポンシブ | SP: 縦並びスタック |
| 推奨Section | Hero / CTA-016 |
| スコア | **85** |
| ランク | **S** |

---

### FORM-014
**予約フォーム（日時選択付き）**

| 項目 | 内容 |
|------|------|
| 名称 | 予約フォーム 日時・時間選択 |
| カテゴリ | 予約Form |
| フィールド | 名前 / 電話 / メール / 希望日（datepicker）/ 希望時間（select）/ 内容 |
| デザイン特徴 | datepickerはカスタムカレンダーまたはflat-pickerライブラリ |
| 推奨Section | CTA-020 / FLOW最終ステップ |
| スコア | **86** |
| ランク | **S** |

---

### FORM-015
**資料請求フォーム（リード獲得）**

| 項目 | 内容 |
|------|------|
| 名称 | 資料請求フォーム リード獲得 |
| カテゴリ | リード Form |
| フィールド | 名前 / 会社名 / メール / 電話 / 送信 |
| デザイン特徴 | 「資料を無料でダウンロード」見出し / フォーム上部に安心材料バッジ |
| 推奨Section | CTA-008 / Hero（BtoB）|
| スコア | **84** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 03 ｜ Multi-Step Form（多段フォーム）
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-016
**Multi-Step Form 3ステップ（プログレスバー）**

| 項目 | 内容 |
|------|------|
| 名称 | Multi-Step Form 3ステップ プログレスバー |
| カテゴリ | Multi-Step |
| ステップ構成 | Step1: 基本情報 / Step2: 詳細 / Step3: 確認・送信 |
| デザイン特徴 | 上部にプログレスバー（1/3 → 2/3 → 3/3）/ 各ステップはアニメーションでスライド |
| ナビゲーション | 「次へ」「戻る」ボタン |
| 利点 | 各ステップの入力量が少なく心理的ハードルが低い |
| 推奨Section | 採用エントリー / 高単価相談申込 |
| スコア | **89** |
| ランク | **S** |

---

### FORM-017
**Quiz Form（診断・チェック型）**

| 項目 | 内容 |
|------|------|
| 名称 | Quiz 診断フォーム 選択式 |
| カテゴリ | Quiz Form |
| 構成 | 質問→選択肢クリック→次の質問→結果＋CTA |
| デザイン特徴 | 選択肢はカード型（クリックで選択・次へ自動遷移）/ プログレスバー |
| 推奨Section | CTA-041 / Hero（診断特化LP）|
| スコア | **88** |
| ランク | **S** |

---

### FORM-018
**Step Form タブ型**

| 項目 | 内容 |
|------|------|
| 名称 | Step Form タブ型ナビゲーション |
| カテゴリ | Multi-Step |
| デザイン特徴 | 上部にタブ型ステップナビ / アクティブステップを強調 |
| 推奨Section | 採用 / スクール申込 |
| スコア | **82** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 04 ｜ 特殊フォーム
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-019
**Search Form（検索フォーム）**

| 項目 | 内容 |
|------|------|
| 名称 | Search Form 検索ボックス |
| カテゴリ | Search |
| 高さ | 48〜56px |
| 角丸 | 8〜28px |
| 構成 | 🔍アイコン（左）+ Input + 検索ボタン（右）|
| 推奨Section | Navigation / Blog / FAQ |
| スコア | **81** |
| ランク | **A+** |

---

### FORM-020
**Login Form（ログイン）**

| 項目 | 内容 |
|------|------|
| 名称 | Login Form メール＋パスワード |
| カテゴリ | Auth Form |
| フィールド | メール / パスワード（目マーク付き表示切替）/ ログインボタン |
| 追加要素 | 「パスワードを忘れた方」リンク / Google/Appleログイン |
| 推奨Section | ログインPage / SaaS |
| スコア | **82** |
| ランク | **A+** |

---

### FORM-021
**Newsletter Form（メルマガ登録）**

| 項目 | 内容 |
|------|------|
| 名称 | Newsletter 登録フォーム |
| カテゴリ | Newsletter |
| 構成 | メール + 登録ボタン（インライン）|
| 補足テキスト | ボタン下「スパムは送りません。いつでも解除できます。」|
| 推奨Section | Footer / CTA |
| スコア | **84** |
| ランク | **S** |

---

### FORM-022
**LINE登録フォーム（QRコード型）**

| 項目 | 内容 |
|------|------|
| 名称 | LINE登録 QRコード + ボタン |
| カテゴリ | LINE Form |
| 構成 | LINEアカウント名 + QRコード + LINEボタン |
| デザイン特徴 | LINE緑（#06C755）/ 白背景カード |
| 推奨Section | CTA-011 / CTA-013 |
| スコア | **88** |
| ランク | **S** |

---

### FORM-023
**Survey Form（アンケート）**

| 項目 | 内容 |
|------|------|
| 名称 | Survey アンケートフォーム |
| カテゴリ | Survey |
| 構成 | 複数の設問（Radio / Checkbox / Text）+ 送信 |
| デザイン特徴 | 各設問を白カードで区切り / 番号付き |
| 推奨Section | 採用LP / ページ下部 |
| スコア | **78** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 05 ｜ フォームバリデーション・State
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-024
**Validation Error State**

| 項目 | 内容 |
|------|------|
| 名称 | バリデーション エラー状態 |
| カテゴリ | Form State |
| デザイン特徴 | border: 1.5px #EF4444 / エラーテキスト赤 12px / 警告アイコン右 |
| テキスト例 | 「メールアドレスの形式が正しくありません」 |
| 推奨Section | Form全般 |
| スコア | **86** |
| ランク | **S** |

---

### FORM-025
**Validation Success State**

| 項目 | 内容 |
|------|------|
| 名称 | バリデーション 成功状態 |
| カテゴリ | Form State |
| デザイン特徴 | border: 1.5px #10B981 / チェックアイコン右（グリーン）|
| 推奨Section | Form全般 |
| スコア | **82** |
| ランク | **A+** |

---

### FORM-026
**Form 送信完了メッセージ**

| 項目 | 内容 |
|------|------|
| 名称 | Form 送信完了 サンクスメッセージ |
| カテゴリ | Form State |
| デザイン特徴 | グリーンのチェックアニメーション + 「送信が完了しました」テキスト + 次のアクション案内 |
| 実装 | フォームを非表示 + サンクス表示（インライン）|
| 推奨Section | Contact Form |
| スコア | **85** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 06 ｜ 安心材料付きフォーム
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-027
**フォーム + 安心材料 3点付き**

| 項目 | 内容 |
|------|------|
| 名称 | フォーム + 安心材料3点 日本LP定番 |
| カテゴリ | 安心材料付き |
| 構成 | フォーム上部または下部に安心材料3点（✓リスト）|
| 安心材料例 | ✓無料でご相談いただけます / ✓強引な勧誘なし / ✓秘密厳守 |
| 推奨Section | CTA-039 / CTA-013 |
| スコア | **91** |
| ランク | **S+** |

---

### FORM-028
**フォーム + SSL・プライバシー表示**

| 項目 | 内容 |
|------|------|
| 名称 | フォーム + SSL・プライバシー表示 |
| カテゴリ | 安心材料付き |
| 構成 | フォーム + 下部に「🔒 SSL暗号化通信で安全に送信されます」|
| 推奨Section | Form全般 |
| スコア | **86** |
| ランク | **S** |

---

### FORM-029
**フォーム + 返信速度表示**

| 項目 | 内容 |
|------|------|
| 名称 | フォーム + 返信速度・営業時間表示 |
| カテゴリ | 安心材料付き |
| 構成 | フォーム + 「通常1営業日以内にご返信します」 |
| 推奨Section | Contact Form / CTA |
| スコア | **84** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 07 ｜ 特殊入力
## ━━━━━━━━━━━━━━━━━━━━━

---

### FORM-030
**File Upload（ファイルアップロード）**

| 項目 | 内容 |
|------|------|
| 名称 | File Upload ドラッグ&ドロップ |
| カテゴリ | File Input |
| デザイン特徴 | ドット枠 / アップロードアイコン / 「ドラッグ or クリックで選択」|
| 推奨Section | 採用応募 / 制作依頼フォーム |
| スコア | **79** |
| ランク | **A+** |

---

### FORM-031
**Quantity Input（数量入力）**

| 項目 | 内容 |
|------|------|
| 名称 | Quantity Input 増減ボタン付き |
| カテゴリ | Number Input |
| デザイン特徴 | 「−」ボタン + 数値 + 「＋」ボタン |
| 推奨Section | EC商品ページ |
| スコア | **78** |
| ランク | **A+** |

---

### FORM-032
**Price Range Slider（価格帯スライダー）**

| 項目 | 内容 |
|------|------|
| 名称 | Price Range Slider 二重スライダー |
| カテゴリ | Range Input |
| デザイン特徴 | 2つのthumb / 選択範囲をブランドカラーで塗る |
| 推奨Section | 不動産 / EC 絞り込み |
| スコア | **76** |
| ランク | **A** |

---

### FORM-033
**Star Rating Input（星で評価入力）**

| 項目 | 内容 |
|------|------|
| 名称 | Star Rating Input 星評価入力 |
| カテゴリ | Rating Input |
| デザイン特徴 | ★5個 / ホバーで黄色に / クリックで確定 |
| 推奨Section | レビューフォーム |
| スコア | **77** |
| ランク | **A+** |

---

### FORM-034
**OTP / 認証コード入力**

| 項目 | 内容 |
|------|------|
| 名称 | OTP 6桁認証コード入力 |
| カテゴリ | OTP Input |
| デザイン特徴 | 6個の独立したInput（各1文字）/ 入力後自動次へ移動 |
| 推奨Section | SMS認証 / SaaS |
| スコア | **80** |
| ランク | **A+** |

---

### FORM-035
**Color Picker（色選択）**

| 項目 | 内容 |
|------|------|
| 名称 | Color Picker 色選択 |
| カテゴリ | Color Input |
| デザイン特徴 | カラーサークル配列 / 選択時チェックマーク |
| 推奨Section | EC（カラーバリエーション選択）|
| スコア | **74** |
| ランク | **A** |

---

## ランク別サマリー

### S+ ランク（90点以上）
| ID | 名称 | スコア |
|----|------|--------|
| FORM-012 | Inline Form メール1フィールド | 90 |
| FORM-027 | フォーム + 安心材料3点 | 91 |

### S ランク（83〜89点）
| ID | 名称 | スコア |
|----|------|--------|
| FORM-016 | Multi-Step Form 3ステップ | 89 |
| FORM-017 | Quiz 診断フォーム | 88 |
| FORM-022 | LINE登録フォーム | 88 |
| FORM-010 | Contact Form スタンダード | 88 |
| FORM-001 | Input Standard | 88 |
| FORM-011 | Contact Form 2カラム | 87 |
| FORM-014 | 予約フォーム | 86 |
| FORM-024 | Validation Error State | 86 |
| FORM-028 | フォーム + SSL表示 | 86 |
| FORM-013 | Inline Form 2フィールド | 85 |
| FORM-026 | 送信完了メッセージ | 85 |
| FORM-005 | Textarea 標準 | 85 |
| FORM-009 | Toggle Switch | 85 |
| FORM-007 | Checkbox カスタム | 84 |
| FORM-015 | 資料請求フォーム | 84 |
| FORM-021 | Newsletter Form | 84 |
| FORM-029 | フォーム + 返信速度 | 84 |
| FORM-002 | Floating Label Input | 83 |


---

## take-design-portfolio 実務ログからの統合知見（2026-07-12 追加分）

> 以下は実案件12件のLP制作から得られた実装知見（旧 take-design-portfolio/knowledge 側の記録）。上記ライブラリと重複しない実装レベルの具体例・検証結果として保持する。

## 実案件からの知見（2026-07-12 追加）

12件中、実際にフォームが実装されていたのは `career-compass-lp/index.html` と `mirai-ryo-lp/index.html` の2件（他の10件は電話/LINE誘導のみ、または外部フォームへのリンクのみでHTML上に入力フィールドを持たない）。この2件から実装済みパターンを記録する。

### 入力フィールドの共通スタイル

両案件とも、枠線1.5px＋角丸12px＋フォーカス時に「枠線色変化＋薄い色のグロー（box-shadow）」という同一パターンを個別に実装していた（案件間でコードの共有はないが収束的に同じ解に到達している＝再利用性の高い定石）。

```css
/* career-compass-lp/index.html */
.form-input{
  width:100%; padding:13px 16px; border:1.5px solid var(--line); border-radius:12px;
  font-size:15px; color:var(--text); background:var(--bg); transition:.2s ease; outline:none;
}
.form-input:focus{
  border-color:var(--blue); background:#fff; box-shadow:0 0 0 3px rgba(37,99,235,.08);
}
textarea.form-input{ resize:vertical; min-height:100px; }
```

```css
/* mirai-ryo-lp/index.html（同一パターンを独自に実装） */
.field{display:grid;gap:6px;margin-bottom:14px}
.field label{font-weight:900;font-size:13px}
.field input,.field select,.field textarea{
  width:100%;border:1px solid var(--line);border-radius:12px;padding:13px 14px;
  font-size:15px;background:#fff;transition:.2s
}
.field input:focus,.field select:focus,.field textarea:focus{
  outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.1)
}
.field textarea{min-height:100px;resize:vertical}
```

→ **フォーム入力の定石**として `border-radius:12px` / フォーカスリング `box-shadow: 0 0 0 3px rgba(ブランド色, .08〜.1)` を採用してよい。

### 必須ラベルの表現

`career-compass-lp/index.html` はラベル横に小さな `<span class="req">必須</span>` を添えるシンプルな実装（`.req{color:var(--blue);font-size:11px;margin-left:4px}`）。アスタリスクではなく「必須」の文字ラベルを使っている点が特徴（日本語LPでは視認性が高い）。

```html
<label>お名前<span class="req">必須</span></label>
<input type="text" class="form-input" placeholder="山田 太郎">
```

### FORM-012 ステップフォーム：実装パターンあり（`mirai-ryo-lp/index.html`）

複数ページに分割せず、1画面の縦スクロール内で「ステップ見出し」を挟みながらフィールドをグループ化する実装。円形の連番バッジ（グラデーション背景）でステップを視覚化している。

```css
.formStepNum{
  width:30px;height:30px;border-radius:50%;
  background:linear-gradient(135deg,var(--blue),#60a5fa);
  color:#fff;font-weight:900;font-size:13px;display:grid;place-items:center;flex-shrink:0
}
.formStepLabel{font-weight:900;font-size:14px}
```

```html
<div class="formStepHead">
  <div class="formStepNum">1</div><div class="formStepLabel">基本情報</div>
</div>
<div class="field"><label>お名前</label><input type="text" placeholder="山田 太郎"></div>
<div class="field"><label>年齢</label>
  <select><option>18〜24歳</option><option>25〜34歳</option>...</select>
</div>
```

4ステップ（基本情報／希望条件／現在の状況／自由相談）を1本のフォーム内に見出しだけで区切っており、ページ遷移なしでも「入力量が多い」印象を和らげる効果がある。プログレスバーは実装されておらず、ステップ見出し＋連番のみで進捗感を出している点は簡易版として参考になる。

### フォームコンテナ自体の浮遊感

`career-compass-lp/index.html` はフォーム全体を白背景カードとして強い影で浮かせている：

```css
.contact-form{ background:#fff; border-radius:var(--r-lg); padding:40px; box-shadow:0 24px 64px rgba(0,0,0,.2); }
```

背景セクションが暗色〜画像の場合、フォームだけ通常より強い影（`0 24px 64px`級）で浮かせるとCV導線として視認性が上がることが確認できた。

### 送信ボタンの実務パターン

両案件とも送信ボタンは通常の `.btn` を流用しつつ `width:100%` を追加指定（`mirai-ryo-lp` はさらに `font-size:16px;padding:18px` で他ボタンより大きくして強調）。送信直後の注意書き（個人情報の用途を明示する一文）を `.form-note` として必ず添えている点も両案件で共通していた。
