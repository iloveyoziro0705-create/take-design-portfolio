# Design System

**バージョン**: 1.0
**作成日**: 2026-06-28
**対象プロダクト**: LP / ホームページ / WordPress / 管理画面 / ポートフォリオ / SaaS

---

## Design System の目的

LP・HP・WordPress・管理画面・ポートフォリオ・SaaSすべてで共通利用できるデザイン基盤。
**ライブラリを組み合わせて制作する。ゼロからデザインを考えない。**

---

## フォルダ構成

```
knowledge/design-system/
├── layouts/        ← セクションレイアウトパターン
├── photo/          ← 写真構図・ビジュアルルール
├── components/     ← UIコンポーネント
├── motion/         ← アニメーション
├── spacing/        ← 余白設計
├── typography/     ← フォント・タイポグラフィ
└── colors/         ← カラーシステム
```

---

## ライブラリ一覧

**状態の凡例**: ✅ 完成（体系的パターン網羅済み） / 🟡 実例収録中（実制作LPの裏付けあり・件数はこれから蓄積） / 🔜 準備中（未着手）
**2026-07-12**: 過去に制作した12件のLP（ai-school-lp / beauty-salon-lp / business-design-academy-lp / career-compass-lp / dental-clinic-lp / elearning-lp / finance-lp / hoikushi-mikata-lp / lumia-lp / mirai-ryo-lp / rapas-lp / restaurant-lp）を分析し、各ファイル末尾の「実案件からの知見」セクションに実装パターン・実測CSS値・調達フローを追記。既存内容は変更・削除せず追記のみ。

### layouts/
| ファイル | 内容 | 状態 |
|---------|------|------|
| hero-layout-library.md | Hero Section 59パターン（2026-07-12: Pinterest調査でHERO-056〜059追加、美容室/飲食店） | ✅ 完成 |
| hero-ranking.md | HeroランキングCV/デザイン/モバイル | ✅ 完成 |
| hero-pattern-map.md | Hero業種×CV目的マップ | ✅ 完成 |
| cta-layout-library.md | CTAセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| feature-layout-library.md | Featureセクションレイアウト 55パターン + 実装事例マッピング | ✅ 完成 |
| feature-ranking.md | FeatureランキングCV/デザイン/スマホ/汎用性 | ✅ 完成 |
| feature-pattern-map.md | Feature業種×CV目的マップ | ✅ 完成 |
| voice-layout-library.md | Voiceセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| faq-layout-library.md | FAQセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| flow-layout-library.md | Flowセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| pricing-layout-library.md | Pricingセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| profile-layout-library.md | Profileセクションレイアウト | 🟡 実例収録中（実例少数・要蓄積） |
| contact-layout-library.md | Contactセクションレイアウト | 🟡 実例収録中（12LP分析済） |
| footer-layout-library.md | Footerセクションレイアウト | 🟡 実例収録中（12LP分析済） |

### photo/
| ファイル | 内容 | 状態 |
|---------|------|------|
| photo-composition-library.md | 写真構図パターン | 🟡 実例収録中（12LP分析済） |
| visual-composition-rules.md | ビジュアル選定・加工ルール | 🟡 実例収録中（写真/イラスト調達フロー含む） |

### components/
| ファイル | 内容 | 状態 |
|---------|------|------|
| ui-component-library.md | コンポーネント統合インデックス | 🟡 実例収録中（12LP分析済） |
| button-library.md | ボタンパターン | 🟡 実例収録中（12LP分析済） |
| card-library.md | カードパターン | 🟡 実例収録中（12LP分析済） |
| form-library.md | フォームパターン | 🟡 実例収録中（実例少数・要蓄積） |
| badge-library.md | バッジ・タグパターン | 🟡 実例収録中（12LP分析済） |
| icon-library.md | アイコン使用ルール | 🟡 実例収録中（12LP分析済） |

### motion/
| ファイル | 内容 | 状態 |
|---------|------|------|
| motion-library.md | アニメーション・トランジション | 🟡 実例収録中（GSAP/ScrollTrigger/Rive実装含む） |

### spacing/
| ファイル | 内容 | 状態 |
|---------|------|------|
| spacing-library.md | 余白スケール・セクション間距離 | 🟡 実例収録中（12LP分析済） |

### typography/
| ファイル | 内容 | 状態 |
|---------|------|------|
| typography-library.md | フォント・スケール・業種別推奨 | 🟡 実例収録中（12LP分析済） |

### colors/
| ファイル | 内容 | 状態 |
|---------|------|------|
| color-system.md | カラーシステム・業種別パレット | 🟡 実例収録中（12案件の実hex値対応表あり） |

---

## 制作フロー（Design System ベース）

```
業種判定 → Section Layout → Photo Composition → UI Components
→ Motion → Spacing → Typography → Color System → 制作
```

詳細: `knowledge/production-rules.md`
