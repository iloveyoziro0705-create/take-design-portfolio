# Templates Production

## このフォルダの目的

量産可能な高CVテンプレートを保存するための場所。

セッション間でナレッジを蓄積し、十分な分析データが集まった段階で
業種別の「すぐに使える完成テンプレート」を作成・保管する。

---

## 現在のステータス

**予約済み（テンプレート本体は未作成）**

knowledge/learning-history/ に分析データが蓄積され、
各業種で LP-Rank S / S+ の案件が複数確認された段階でテンプレート作成を開始する。

---

## 将来追加予定のテンプレート

| テンプレート名 | 対象業種 | 追加条件 |
|-------------|---------|---------|
| `beauty-salon-lp.html` | 美容サロン・エステ・脱毛 | 美容系Sランク案件3件以上の分析完了後 |
| `recruit-lp.html` | 採用（正社員・パート） | 採用系Sランク案件3件以上の分析完了後 |
| `job-lp.html` | 住み込み求人・季節労働 | 求人系Sランク案件3件以上の分析完了後 |
| `clinic-lp.html` | 整骨院・鍼灸院・クリニック | 医療系Sランク案件3件以上の分析完了後 |
| `restaurant-lp.html` | 飲食店・レストラン | 飲食系Sランク案件3件以上の分析完了後 |
| `wordpress-base/` | WordPress 汎用構成 | WordPress案件3件以上の実績完了後 |

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
