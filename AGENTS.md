# AGENTS.md — AI Design Company ナレッジ運用ルール

**バージョン**: 2.1  
**更新日**: 2026-06-20

---

## このファイルの目的

GitHub上のナレッジベース（`knowledge/`）を唯一の情報源とし、
どの端末・どのClaude Code・どのセッションからアクセスしても
同じ品質でLP・ホームページ・WordPressサイトを提案・設計・制作できる状態を維持する。

---

## ナレッジ参照の原則

- **GitHub上の `knowledge/` を唯一の情報源とする**
- ローカル知識・セッション内の記憶は使わない
- 知識が必要な場合は必ず `knowledge/` 内のファイルを読んでから判断する
- 新しい知識を得た場合は必ず `knowledge/` へ統合して次のセッションへ引き継ぐ

---

## 作業開始前プロトコル（必須・省略禁止）

LP・Web・WordPress制作依頼を受けた場合、**コードを書く前に必ず以下を実行する**。

### Step 1: ナレッジ検索
```
knowledge/lp/lp-design-dictionary.md    → 構造パターン確認（Pattern-LP-XXX）
knowledge/lp/industry-patterns.md       → 業種別パターン確認（IND-XXX）
knowledge/lp/fv-library.md              → FVパターン確認（FV-XXX）
knowledge/lp/cta-library.md             → CTAパターン確認（CTA-XXX）
knowledge/web/design-system.md          → デザイントークン確認
knowledge/web/ui-patterns.md            → UIコンポーネント確認
knowledge/inspirations/                 → 参考事例確認
```

### Step 2: 類似業種検索
```bash
grep -r "#[業種タグ]" knowledge/learning-history/
```
- 同業種・類似業種の過去分析ファイルを確認
- LP-Rank S・Aの案件を優先参照

### Step 3: S+/Sランク優先参照
- `learning-history/` 内で `LP-Rank: S+` `LP-Rank: S` `LP-Rank: A` のファイルを優先
- S+/Sランクの構成・FV・CTA・導線を第一候補とする
- BランクはInspirationsの部分参照に留める。Dランクは参照しない

### Step 4: 既存パターン照合
- Pattern-LP-XXX / FV-XXX / CTA-XXX 等から最適なものを選定
- **既存パターンで対応できる場合は新規パターンを作らない**

---

## 制作フロー（順序厳守）

LP制作依頼を受けた場合、必ず以下の順序で実行する。

```
1. 業種判定 → 業種タグ（#XXX）を特定
2. 類似案件検索（knowledge/learning-history/）
3. Sランク案件の確認
4. FV選定（fv-library.md の FV-XXX から）
5. CTA選定（cta-library.md の CTA-XXX から）
6. 導線設計（FLOW-XXX 参照）
7. 信頼要素選定（TRUST-XXX 参照）
8. 情報設計
9. デザイン提案（design-system.md のトークン適用）
10. コーディング
```

---

## LP分析ルール

**LP分析時は必ず `knowledge/templates/lp-analysis-template.md` を使用する。**

テンプレートを使わない分析・自己流の分析フォーマットは禁止。

### 分析手順（厳守）

```
Step 1: lp-analysis-template.md をコピー
Step 2: knowledge/learning-history/YYYY-MM-DD-[案件名].md として保存
Step 3: テンプレートの①〜⑪を上から順に埋める（省略・順序変更禁止）
Step 4: ⑩ LP-Rank Evaluation → lp-rank-evaluation-rules.md の基準で採点
Step 5: LP-Score・LP-Rank・Learning Decision を確定
Step 6: Learning Decision に応じて辞典・inspirations/ へ反映
```

### 分析の必須付与事項

| 項目 | 内容 |
|------|------|
| 業種タグ | 最低3つ（例: `#beauty` `#salon` `#luxury`） |
| LP-Rank | S+ / S / A / B / C / D（lp-rank-evaluation-rules.md 基準） |
| LP-Score | XX / 100（6項目採点・合計） |
| Learning Decision | 積極学習 / 部分学習 / 参考保存 / 学習対象外 |

### LP-Score 採点基準（合計100点）

**詳細は `knowledge/templates/lp-rank-evaluation-rules.md` を参照すること。**

| 項目 | 配点 | 評価軸 |
|------|------|--------|
| FV（ファーストビュー） | 20点 | コピー強度・ターゲット明確性・ベネフィット伝達・信頼要素・視線誘導 |
| 導線設計 | 20点 | セクション順序・悩み→解決→証拠→CTAの流れ・不安解消・スクロール動機 |
| CTA設計 | 20点 | 配置数・文言の具体性・視認性・CTA直前の理由・役割整理 |
| 信頼性 | 15点 | 数値実績・お客様の声・権威性 |
| オファー | 15点 | 行動する理由・希少性/期限・リスク低減要素 |
| モバイル最適化 | 10点 | 可読性・CTA操作性・情報密度・切替明確性・負荷 |

### LP-Rank 判定基準

| ランク | LP-Score | ナレッジ登録 | Learning Decision |
|--------|---------|------------|-----------------|
| S+ | 95〜100 | 全項目を積極登録 | 積極学習 |
| S | 90〜94 | 積極登録 | 積極学習 |
| A | 80〜89 | 登録する | 積極学習 |
| B | 70〜79 | 優れた部分のみ | 部分学習 |
| C | 60〜69 | 参考要素のみ | 参考保存 |
| D | 59以下 | 原則登録しない | 学習対象外 |

### LP-Rank Evaluation の必須禁止事項

- デザインの美しさを根拠にした高評価 → 禁止
- 業界大手だからという理由の高評価 → 禁止
- 採点根拠のない主観的な点数変更 → 禁止
- 迷った場合の甘い採点 → 厳しめを採用する

### 11分析軸（テンプレートに準拠）

```
①  基本情報   → 業種・ターゲット・ペルソナ・オファー・集客経路
②  LP構造    → セクション分解・導線マップ
③  パターン   → 既存パターン照合・新規パターン候補抽出
④  心理学    → 12種の心理トリガー分析
⑤  FV分析   → コピー・CTA・視線誘導・情報量
⑥  CTA分析  → 全CTAの文言・配置・効果
⑦  デザイン  → レイアウト・配色・タイポグラフィ・UIコンポーネント
⑧  モバイル  → 視認性・CTA導線・スクロール設計
⑨  CV要因   → コンバージョンを生む構造的な理由（感想禁止）
⑩  LP-Rank Evaluation → 6項目採点・LP-Score算出・Rank確定・Learning Decision
⑪  学習結果  → 重要知識10項目以上・流用可能知識10項目以上・辞典更新案
```

### 分析品質ルール
- 感想禁止（「美しい」「良い」等の主観表現）
- レビュー禁止（評価コメント）
- 批評禁止（改善提案は⑨CV阻害要因にのみ記載）
- 再利用可能な知識へ変換して記録する
- 保存先: `knowledge/learning-history/YYYY-MM-DD-[案件名].md`

---

## パターン命名規則

詳細は `knowledge/templates/pattern-naming-rules.md` を参照。

| カテゴリ | プレフィックス | 管理ファイル |
|---------|-------------|------------|
| LP全体構成 | Pattern-LP-XXX | lp-design-dictionary.md |
| ファーストビュー | FV-XXX | fv-library.md |
| CTA | CTA-XXX | cta-library.md |
| 導線 | FLOW-XXX | lp-design-dictionary.md |
| 信頼性 | TRUST-XXX | ui-patterns.md |
| レイアウト | LAYOUT-XXX | ui-patterns.md |
| 比較表 | COMPARE-XXX | ui-patterns.md |
| 実績 | PROOF-XXX | ui-patterns.md |
| 口コミ | VOICE-XXX | ui-patterns.md |
| FAQ | FAQ-XXX | ui-patterns.md |
| FVインスピ | FVINS-XXX | fv-inspirations.md |
| CTAインスピ | CTAINS-XXX | cta-inspirations.md |
| レイアウトインスピ | LAYINS-XXX | layout-inspirations.md |
| デザインインスピ | DESINS-XXX | design-inspirations.md |

---

## ナレッジ更新ルール

### 知識統合フロー（順序厳守）

```
新しいLP分析 / 知識発見
       ↓
既存パターンを grep で検索
       ↓
┌──────────────────────────┐
│ 既存パターンに統合できる？  │
└──────────────────────────┘
   YES ↓                NO ↓
既存パターンへ追記    新規Pattern作成（最終手段）
```

### 統合ルール
- 追加前に `grep -r "Pattern-LP" knowledge/` で重複確認
- 同一内容・類似内容は統合する（新規追加しない）
- バリエーションは既存パターン内に「バリエーション」として追記

### Inspirations への保存基準
- **辞典（-library.md）に登録するほどではないが**、参考になる要素
- 「なぜ参考になるか」を構造的に記録（感想禁止）
- 参照元の案件名・分析IDを必ず記録

---

## 育成フェーズ管理

| フェーズ | 条件 | 本格育成対象 |
|---------|------|------------|
| Phase 1 | 0〜49パターン | `lp-design-dictionary.md` のみ |
| Phase 2 | 50〜99パターン | + `fv-library.md` |
| Phase 3 | 100〜149パターン | + `cta-library.md` `design-system.md` |
| Phase 4 | 150パターン〜 | + `industry-patterns.md` |

※ 各フェーズで「本格育成」とは、積極的にパターンを追加・拡充することを指す。
　他フェーズのファイルも都度更新は行う。

---

## Case Study Rules

制作案件が完了したら、必ず `knowledge/case-studies/` に記録すること。

- `knowledge/case-studies/case-study-template.md` を使用する
- ファイル名: `YYYY-MM-DD-[業種]-[プロジェクト名].md`
- 採用したPattern（Pattern-LP-XXX / FV-XXX / CTA-XXX）を必ず記録する
- 改善点・次回に活かすこと・再利用できる知識を記録する
- クライアント評価・成果は後日追記で構わない
- 感想禁止。構造的事実のみ記録する

---

## Failure Pattern Rules

成果を下げる要因を発見した場合は、`knowledge/failure-patterns/failure-patterns.md` に追加すること。

- LP分析後の「CV阻害要因」欄で新しい失敗パターンを発見した場合は登録する
- 既存 FAIL-XXX に該当する場合は新規作成せず既存エントリへ参考事例を追記する
- 成功パターンだけでなく失敗パターンも学習資産として蓄積する
- 追加前に `grep -r "FAIL-" knowledge/failure-patterns/` で重複確認する

---

## Prompt Library Rules

成功した指示文・制作プロンプトは `knowledge/prompts/` に保存すること。

- LP分析、LP制作、業種別制作、WordPress制作ごとに整理する
- プロンプトを使用して成果が出た場合は、改善版に更新する
- 新業種対応のプロンプトが完成したら追加する
- 変数（`[案件名]` 等）は実案件ごとに必ず置き換えて使用する

---

## Learning Reason Rules

ナレッジを保存する場合は、必ず Learning Reason を記録すること。

- なぜ保存したのか（保存理由）を明記する
- どの案件・業種に応用できるか（他案件への応用先）を明記する
- 感想禁止。再利用価値・応用先を構造的に記述する
- Learning Reason なしのナレッジ追加は不完全とみなし、後日補完する

---

## 禁止事項

- ルートの `index.html` を上書きしない
- 感想・レビュー・批評をナレッジファイルに記録しない
- 同じパターンを複数登録しない
- 制作フローをスキップしない
- 新規パターン作成を既存統合より先に行わない
- `knowledge/` 以外の場所に知識を保存しない

---

## ナレッジファイル一覧

```
knowledge/
├── lp/
│   ├── lp-design-dictionary.md    ← LP構造パターン辞典（Pattern-LP-XXX）
│   ├── fv-library.md               ← FVパターン辞典（FV-XXX）
│   ├── cta-library.md              ← CTAパターン辞典（CTA-XXX）
│   └── industry-patterns.md        ← 業種別LP辞典（IND-XXX）
├── web/
│   ├── design-system.md            ← デザイントークン・タイポ・カラー
│   ├── ui-patterns.md              ← UIコンポーネント（TRUST/LAYOUT/PROOF/VOICE/FAQ-XXX）
│   └── conversion-patterns.md      ← CV改善・心理学辞典
├── wordpress/
│   ├── wordpress-patterns.md       ← 業種別WP構成
│   ├── wordpress-plugins.md        ← プラグイン辞典
│   └── wordpress-seo.md            ← SEO辞典
├── inspirations/
│   ├── fv-inspirations.md          ← FV事例集（FVINS-XXX）
│   ├── cta-inspirations.md         ← CTA事例集（CTAINS-XXX）
│   ├── layout-inspirations.md      ← レイアウト事例集（LAYINS-XXX）
│   └── design-inspirations.md      ← 配色・世界観事例集（DESINS-XXX）
├── case-studies/                   ← 実案件記録（自社制作案件）
│   ├── README.md
│   └── YYYY-MM-DD-[業種]-[案件名].md
├── failure-patterns/               ← 失敗パターン辞典（FAIL-XXX）
│   ├── README.md
│   ├── failure-patterns.md
│   └── failure-template.md
├── prompts/                        ← 再利用プロンプトライブラリ
│   ├── README.md
│   ├── lp-analysis-prompt.md
│   ├── lp-production-prompt.md
│   ├── beauty-lp-prompt.md
│   ├── recruit-lp-prompt.md
│   ├── job-lp-prompt.md
│   ├── clinic-lp-prompt.md
│   ├── restaurant-lp-prompt.md
│   └── wordpress-production-prompt.md
├── templates/
│   ├── lp-analysis-template.md     ← LP分析標準手順書（必須使用）
│   ├── lp-rank-evaluation-rules.md ← LP-Rank採点基準（必須参照）
│   └── pattern-naming-rules.md     ← パターン命名規則リファレンス
└── learning-history/
    └── YYYY-MM-DD-[案件名].md      ← 分析履歴（業種タグ・LP-Rank・LP-Score付き）
```

---

## 将来目標

```
美容LP     → 即座に最適構成を提案（Sランク案件ベース）
採用LP     → 即座に最適導線を提案（Sランク案件ベース）
住み込み求人LP → 即座に最適FVを提案（Sランク案件ベース）
整骨院     → 即座に最適CTAを提案（Sランク案件ベース）
```

**最終目標**: 100〜300本のLP分析により、誰が分析しても同じ結果・同じ知識・同じ分類になる状態を実現する。
