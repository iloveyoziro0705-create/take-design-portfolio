# パターン命名規則 — 統一リファレンス

**バージョン**: 1.0  
**作成日**: 2026-06-20  
**適用範囲**: 全ナレッジファイル・全分析ファイル

---

## 基本原則

- パターンIDは全ナレッジベースで**一意**（重複禁止）
- 3桁ゼロ埋め（001〜999）
- 新規追加前に既存IDをgrepで確認する
- カテゴリが不明な場合は一番近いカテゴリを選ぶ（新カテゴリは最終手段）

---

## カテゴリ別命名規則

### LP全体構成パターン
```
Pattern-LP-XXX
```
- 管理ファイル: `knowledge/lp/lp-design-dictionary.md`
- 対象: LP全体のセクション構成・業種別の標準構成
- 例: Pattern-LP-001（美容サロン基本構成）

---

### FV（ファーストビュー）パターン
```
FV-XXX
```
- 管理ファイル: `knowledge/lp/fv-library.md`
- 対象: FVのビジュアル構成・レイアウト・コピー構造
- 例: FV-001（フルスクリーン背景画像型）

---

### CTA（コールトゥアクション）パターン
```
CTA-XXX
```
- 管理ファイル: `knowledge/lp/cta-library.md`
- 対象: CTAボタンの文言・デザイン・配置・周辺要素
- 例: CTA-001（LINE誘導型）

---

### 導線パターン
```
FLOW-XXX
```
- 管理ファイル: `knowledge/lp/lp-design-dictionary.md`（構造セクション内）
- 対象: セクション間の遷移・ユーザーの心理変化の流れ・スクロール設計
- 例: FLOW-001（共感 → 解決策 → 実績 → CTA の標準採用導線）

---

### 信頼性パターン
```
TRUST-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: 権威性・社会的証明・認定バッジ・受賞・メディア掲載の表示設計
- 例: TRUST-001（資格バッジ横並び）、TRUST-002（メディア掲載ロゴ帯）

---

### レイアウトパターン
```
LAYOUT-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: グリッド・分割・重なり・マルチカラム等の空間配置設計
- 例: LAYOUT-001（左テキスト右画像の2分割）

---

### 比較表パターン
```
COMPARE-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: 料金比較・サービス比較・Before/After・競合比較の表示設計
- 例: COMPARE-001（3プラン横並び比較表）

---

### 実績・数字パターン
```
PROOF-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: 実績数字・カウンター・統計・受賞数・顧客数の表示設計
- 例: PROOF-001（3カラム区切り線グリッド数字）

---

### 口コミ・声パターン
```
VOICE-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: 口コミカード・SNSスクリーンショット・動画レビュー・スタッフ紹介の表示設計
- 例: VOICE-001（写真付き口コミカード3列）

---

### FAQパターン
```
FAQ-XXX
```
- 管理ファイル: `knowledge/web/ui-patterns.md`
- 対象: FAQ表示形式・アコーディオン・タブ・質問カテゴリ設計
- 例: FAQ-001（detailsタグ アコーディオン）

---

### インスピレーション事例（辞典未満）
```
FVINS-XXX    → knowledge/inspirations/fv-inspirations.md
CTAINS-XXX   → knowledge/inspirations/cta-inspirations.md
LAYINS-XXX   → knowledge/inspirations/layout-inspirations.md
DESINS-XXX   → knowledge/inspirations/design-inspirations.md
```
- 対象: 辞典登録ほどではないが参考価値の高い個別事例

---

## 新カテゴリ追加ルール

以下の条件を**全て満たす**場合のみ新カテゴリを作成できる。

1. 既存カテゴリのどれにも当てはまらない
2. 同カテゴリに分類できるパターンが**3件以上**見込まれる
3. AGENTS.md の命名規則セクションへ追記する
4. 対応する管理ファイルを特定または新規作成する

---

## 現在のパターン数（2026-06-20時点）

| カテゴリ | プレフィックス | 登録数 |
|---------|-------------|--------|
| LP全体構成 | Pattern-LP | 5 |
| ファーストビュー | FV | 7 |
| CTA | CTA | 7 |
| 導線 | FLOW | 0 |
| 信頼性 | TRUST | 0 |
| レイアウト | LAYOUT | 0 |
| 比較表 | COMPARE | 0 |
| 実績 | PROOF | 0 |
| 口コミ | VOICE | 0 |
| FAQ | FAQ | 0 |
| FVインスピ | FVINS | 4 |
| CTAインスピ | CTAINS | 4 |
| レイアウトインスピ | LAYINS | 5 |
| デザインインスピ | DESINS | 5 |

**総パターン数**: 37（Phase 1 育成中）
