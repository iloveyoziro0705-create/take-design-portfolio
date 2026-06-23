# Templates Production

## このフォルダの目的

量産可能な高CVテンプレートを保存するための場所。

セッション間でナレッジを蓄積し、十分な分析データが集まった段階で
業種別の「すぐに使える完成テンプレート」を作成・保管する。

---

## 現在のステータス

**Knowledge Extraction Phase STEP5 完了（2026-06-23）**

60本のLP分析から得られた知識を業種別テンプレート（.md形式）として整備済み。
各テンプレートはセクション別HTML/CSS・デザイントークン・FAILパターン回避ガイドを含む。

---

## 整備済みテンプレート一覧

| テンプレートファイル | 対象業種 | 参照パターン |
|-----------------|---------|------------|
| `beauty-template.md` | 美容サロン・エステ・ネイル・ヘア | IND-001 / FV-001〜012 / CTA-001, 008, 009 |
| `recruit-template.md` | 採用全般（福祉・飲食・IT・保育） | IND-003, 004 / FV-013, 017, 018, 021 / CTA-005, 014 |
| `medical-template.md` | クリニック・整体・美容医療・歯科 | IND-005 / FV-014, 015, 016 / CTA-012 |
| `restaurant-template.md` | 飲食店・居酒屋・宴会対応店 | IND-002 / FV-011, 025, 026 / CTA-010, 016 |
| `school-template.md` | デザイン・AI・転職スクール | IND-006 / FV-019, 020, 021 / CTA-003, 013 |
| `saas-template.md` | SaaS・BtoBサービス・業務ツール | IND-008 / FV-022〜030 / CTA-011, 015 |

---

## 将来追加予定のテンプレート

| テンプレート名 | 対象業種 | 追加条件 |
|-------------|---------|---------|
| `wordpress-base.md` | WordPress 汎用構成 | WordPress案件3件以上の実績完了後 |
| `finance-template.md` | 金融・保険・士業 | IND-007 系LP分析5件完了後 |

---

## テンプレート品質基準

このフォルダに追加するテンプレートは以下の基準を満たすこと。

- LP-Score 80点以上（A Rank以上）の構成に基づくこと
- FV / 導線 / CTA / 信頼性 / オファー の5要素が全て実装されていること
- スマホ固定フッターCTAが実装されていること
- CTAが最低3箇所（FV / 中盤 / 最終）に配置されていること
- `knowledge/web/design-system.md` のデザイントークンを適用していること
- `knowledge/failure-patterns/failure-patterns.md` の FAIL-001〜005 を全て回避していること

---

## テンプレート作成フロー（将来）

```
1. 対象業種の learning-history を全件確認
2. LP-Rank S / S+ 案件のパターンを抽出
3. lp-design-dictionary.md の該当パターンを参照
4. knowledge/prompts/ の業種別プロンプトを使用して制作
5. LP-Score 80点以上を確認
6. このフォルダへ保存
7. README.md の「将来追加予定」テーブルを更新
```

---

## ガバナンス（governance.md 準拠）

このフォルダの知識は `knowledge/governance.md` の SST マップ「量産テンプレート」に従う。
テンプレート内のパターンは `lp-design-dictionary.md` / `fv-library.md` / `cta-library.md` を参照し、
テンプレートファイル内に重複して実装知識を記述しない。
