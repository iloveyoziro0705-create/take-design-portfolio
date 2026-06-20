# Knowledge Governance

**バージョン**: 1.0  
**作成日**: 2026-06-20  
**目的**: ナレッジベースの Single Source of Truth を管理し、重複・分散・管理不能化を防ぐ

---

## 基本原則

**1つの知識は1つの場所にのみ保存する。**

同じ知識を複数箇所に保存することは禁止。
知識を追加する前に必ず既存ナレッジを検索し、統合可能な場合は統合を優先する。

---

## Single Source of Truth マップ

| 知識カテゴリ | 保存先 | 管理対象 |
|-----------|--------|---------|
| LP構造パターン | `knowledge/lp/lp-design-dictionary.md` | Pattern-LP-XXX / 導線 / セクション構成 / 心理構造 |
| ファーストビュー | `knowledge/lp/fv-library.md` | FV構成 / コピー構造 / 視線誘導 / FVレイアウト |
| CTA | `knowledge/lp/cta-library.md` | CTAパターン / CTA文言 / CTA配置 / CTAデザイン |
| 業種別知識 | `knowledge/lp/industry-patterns.md` | 業種別構成 / 業種別導線 / 業種別CTA推奨 |
| デザインシステム | `knowledge/web/design-system.md` | 配色 / 余白 / カード / ボタン / 見出し |
| UIコンポーネント | `knowledge/web/ui-patterns.md` | UI構造 / ナビゲーション / コンポーネント実装 |
| CV改善 | `knowledge/web/conversion-patterns.md` | CV改善 / 離脱防止 / マイクロコンバージョン / 心理学 |
| WordPress | `knowledge/wordpress/` | WP構成 / プラグイン / SEO |
| 成功事例 | `knowledge/case-studies/` | 実案件記録 / 成功事例 / クライアント評価 |
| 失敗事例 | `knowledge/failure-patterns/` | 失敗パターン(FAIL-XXX) / 注意点 / 改善策 |
| 再利用プロンプト | `knowledge/prompts/` | 成功した指示文 / 業種別プロンプト |
| 量産テンプレート | `knowledge/templates-production/` | 業種別高CVテンプレート（将来追加予定） |
| インスピレーション | `knowledge/inspirations/` | FVINS/CTAINS/LAYINS/DESINS-XXX 参考事例 |
| 分析履歴 | `knowledge/learning-history/` | LP分析レポート / LP-Rank / LP-Score |

---

## 保存先判定フロー

新しい知識を発見した場合、以下の手順で保存先を決定する。

```
新しい知識を発見
       ↓
governance.md の SST マップで保存先を確認
       ↓
grep -r "[キーワード]" knowledge/ で既存知識を検索
       ↓
┌─────────────────────────────┐
│ 既存知識に統合できるか？     │
└─────────────────────────────┘
   YES ↓                    NO ↓
既存エントリへ追記       新規エントリを作成
（新規追加しない）       （SST マップの保存先へ）
```

---

## 重複禁止ルール

以下のパターンは明示的に禁止する。

### 禁止例 1: CTA の二重保存
- **禁止**: 同じCTAパターンを `cta-library.md` と `industry-patterns.md` の両方に保存する
- **正しい運用**: `cta-library.md` に登録し、`industry-patterns.md` からは `CTA-XXX` として参照する

### 禁止例 2: FV の二重保存
- **禁止**: 同じFVパターンを `fv-library.md` と `lp-design-dictionary.md` の両方に保存する
- **正しい運用**: `fv-library.md` に登録し、`lp-design-dictionary.md` からは `FV-XXX` として参照する

### 禁止例 3: 心理学知識の二重保存
- **禁止**: 同じ心理学トリガーを `conversion-patterns.md` と個別LP分析ファイルの両方に詳細登録する
- **正しい運用**: `conversion-patterns.md` に詳細を保存し、LP分析では `PSY-XXX` として参照する

### 禁止例 4: 業種別知識の分散
- **禁止**: 美容業種のCVポイントを `industry-patterns.md` と `lp-design-dictionary.md` の両方に記述する
- **正しい運用**: 業種固有の知識は `industry-patterns.md`、構成パターンは `lp-design-dictionary.md` に分担する

---

## 参照ルール（重複せずに関連知識を繋ぐ）

同じ知識を複数箇所に書かず、参照（リンク）で繋ぐ。

```markdown
<!-- lp-design-dictionary.md 内での参照例 -->
### CTA設計
→ `knowledge/lp/cta-library.md` の `CTA-001` を参照

<!-- industry-patterns.md 内での参照例 -->
### 美容業種の推奨CTA
→ `CTA-001`（LINE誘導型） / `CTA-006`（スマホ固定フッター）を組み合わせる
詳細: `knowledge/lp/cta-library.md` 参照
```

---

## カテゴリ境界の定義

似た知識の保存先が迷いやすいケースを明確化する。

| 迷いやすい知識 | 正しい保存先 | 理由 |
|-------------|-----------|------|
| 業種×CTA の組み合わせ推奨 | `industry-patterns.md` | 業種固有の判断を記録する場所 |
| CTAの実装コード | `cta-library.md` | 実装詳細はCTA辞典に集約 |
| FVのコピー構造 | `fv-library.md` | FV知識はFV辞典に集約 |
| LP全体の心理設計 | `lp-design-dictionary.md` | 構成・導線・心理構造はLP辞典 |
| 心理学トリガーの定義 | `conversion-patterns.md` | CVR改善の科学的根拠は変換辞典 |
| 色・フォントの使用例 | `design-system.md` | デザイントークンはデザインシステム |
| 色・フォントのインスピレーション事例 | `inspirations/design-inspirations.md` | 事例はinspirationsへ |
| 実施した実案件の記録 | `case-studies/` | 自社制作案件のみ |
| 他社LPの分析記録 | `learning-history/` | 分析対象LPのみ |
| 製品・サービスの失敗要因 | `failure-patterns/` | FAIL-XXX形式で管理 |

---

## ナレッジ追加チェックリスト

ナレッジを追加する前に、以下を全て確認すること。

- [ ] `governance.md` の SST マップで保存先を確認した
- [ ] `grep -r "[キーワード]" knowledge/` で重複がないか検索した
- [ ] 既存パターンに統合できないか検討した（統合 > 新規作成）
- [ ] 追加先は SST マップと一致しているか確認した
- [ ] 追加後に `Learning Reason` を記録した
- [ ] 関連パターンへの参照（リンク）を追加した

---

## ガバナンス違反の検出方法

定期的に以下のコマンドで重複を検出する。

```bash
# CTAパターンが cta-library.md 以外にも詳細登録されていないか確認
grep -r "CTA文言" knowledge/ --include="*.md" | grep -v "cta-library.md"

# FVパターンが fv-library.md 以外にも詳細登録されていないか確認
grep -r "min-height: 100vh" knowledge/ --include="*.md" | grep -v "fv-library.md"

# 同一パターンIDが複数ファイルに定義されていないか確認
grep -rh "^## FV-[0-9]" knowledge/ | sort | uniq -d
grep -rh "^## CTA-[0-9]" knowledge/ | sort | uniq -d
grep -rh "^## Pattern-LP-[0-9]" knowledge/ | sort | uniq -d
```

---

## バージョン管理

| バージョン | 更新日 | 変更内容 |
|----------|--------|---------|
| 1.0 | 2026-06-20 | 初版作成。SST マップ・重複禁止ルール・カテゴリ境界定義 |
