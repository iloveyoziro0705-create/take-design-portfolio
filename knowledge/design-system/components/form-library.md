# Form Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

フォームコンポーネントのデザイン・実装・UXパターンライブラリ。
入力ハードルを下げ、CV率を最大化するフォーム設計を収録予定。

## 収録予定パターン

### 入力フィールド
- FORM-001: テキスト入力（標準）
- FORM-002: テキストエリア
- FORM-003: セレクトボックス
- FORM-004: ラジオボタン・チェックボックス
- FORM-005: 電話番号入力（ハイフン自動挿入）
- FORM-006: 日付入力（カレンダーUI）

### フォーム構成パターン
- FORM-010: シングル入力+ボタン（メール取得）
- FORM-011: 3項目以内の最小フォーム
- FORM-012: ステップフォーム（3ステップ）
- FORM-013: スクロールフォーム（長文対応）

### UXルール
- ラベル位置（上部固定 vs プレースホルダー）
- エラーメッセージ表示
- 送信後サンクスページ設計
- プログレスバー（ステップフォーム）

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
