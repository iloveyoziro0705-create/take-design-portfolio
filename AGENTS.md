# AGENTS.md — AI Design Company ナレッジ運用ルール

## このファイルの目的

全Claude Codeセッションが同一品質でLP・ホームページ・WordPressサイトを制作できるよう、
ナレッジ運用ルールを定義する。

---

## 作業開始前プロトコル（必須）

LP・Web・WordPress制作依頼を受けた場合、コードを書く前に以下を必ず実行する。

### Step 1: ナレッジ検索
```
knowledge/lp/lp-design-dictionary.md   → 構造パターン確認
knowledge/lp/industry-patterns.md      → 業種別パターン確認
knowledge/lp/fv-library.md             → FV候補選定
knowledge/lp/cta-library.md            → CTA候補選定
```

### Step 2: 類似業種検索
- `knowledge/learning-history/` 内の過去分析ファイルをgrepで検索
- 同業種・類似業種の成功パターンを抽出

### Step 3: 過去の成功パターン参照
- Pattern-IDを特定し、構成・配色・CTA・導線を再利用

---

## 制作フロー（順序厳守）

LP制作依頼を受けた場合、必ず以下の順序で実行する。

```
1. 業種判定
2. 類似案件検索（knowledge/）
3. FV選定（fv-library.md から）
4. CTA選定（cta-library.md から）
5. 導線設計
6. 情報設計
7. デザイン提案
8. コーディング
```

---

## ナレッジ更新ルール

### 新しい知識を発見した場合
- 必ず `knowledge/` 配下の該当ファイルへ統合する
- Pattern-XXX 形式でナンバリングして追加

### 重複登録禁止
- 追加前に既存パターンをgrepで検索する
- 同一内容・類似内容は統合する（新規追加しない）

### 既存パターン優先
- 既存パターンで対応できる場合は新規作成しない
- 既存パターンのバリエーションとして記録する

---

## LP分析ルール

**LP分析時は必ず `knowledge/templates/lp-analysis-template.md` を使用する。**

テンプレートを使わない分析・自己流の分析フォーマットは禁止。

### 分析手順（厳守）

```
Step 1: lp-analysis-template.md をコピー
Step 2: knowledge/learning-history/YYYY-MM-DD-[案件名].md として保存
Step 3: テンプレートの①〜⑩を上から順に埋める（省略・順序変更禁止）
Step 4: ⑩学習結果 → lp-design-dictionary.md へ反映
Step 5: 必要に応じて fv-library.md / cta-library.md / industry-patterns.md を更新
```

### 10分析軸（テンプレートに準拠）

```
① 基本情報   → 業種・ターゲット・ペルソナ・オファー・集客経路
② LP構造    → セクション分解・導線マップ
③ パターン   → 既存パターン照合・新規パターン候補抽出
④ 心理学    → 12種の心理トリガー分析
⑤ FV分析   → コピー・CTA・視線誘導・情報量
⑥ CTA分析  → 全CTAの文言・配置・効果
⑦ デザイン  → レイアウト・配色・タイポグラフィ・UIコンポーネント
⑧ モバイル  → 視認性・CTA導線・スクロール設計
⑨ CV要因   → コンバージョンを生む構造的な理由（感想禁止）
⑩ 学習結果  → 重要知識10項目以上・流用可能知識10項目以上・辞典更新案
```

### 分析品質ルール
- 感想禁止（「美しい」「良い」等の主観表現）
- レビュー禁止（評価コメント）
- 批評禁止（改善提案は⑨CV阻害要因にのみ記載）
- 再利用可能な知識へ変換して記録する
- 保存先: `knowledge/learning-history/YYYY-MM-DD-[案件名].md`

---

## 育成フェーズ管理

| フェーズ | 条件 | 育成対象 |
|---------|------|---------|
| Phase 1 | 0〜49パターン | `lp-design-dictionary.md` のみ |
| Phase 2 | 50〜99パターン | + `fv-library.md` |
| Phase 3 | 100〜149パターン | + `cta-library.md` `design-system.md` |
| Phase 4 | 150パターン〜 | + `industry-patterns.md` |

---

## 禁止事項

- ルートの `index.html` を上書きしない
- 感想・レビューをナレッジファイルに記録しない
- 同じパターンを複数登録しない
- 制作フローをスキップしない

---

## 将来目標

```
美容LP     → 即座に最適構成を提案
採用LP     → 即座に最適導線を提案
住み込み求人LP → 即座に最適FVを提案
整骨院     → 即座に最適CTAを提案
```
