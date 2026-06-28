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

### layouts/
| ファイル | 内容 | 状態 |
|---------|------|------|
| hero-layout-library.md | Hero Section 55パターン | ✅ 完成 |
| hero-ranking.md | HeroランキングCV/デザイン/モバイル | ✅ 完成 |
| hero-pattern-map.md | Hero業種×CV目的マップ | ✅ 完成 |
| cta-layout-library.md | CTAセクションレイアウト | 🔜 準備中 |
| feature-layout-library.md | Featureセクションレイアウト 55パターン | ✅ 完成 |
| feature-ranking.md | FeatureランキングCV/デザイン/スマホ/汎用性 | ✅ 完成 |
| feature-pattern-map.md | Feature業種×CV目的マップ | ✅ 完成 |
| voice-layout-library.md | Voiceセクションレイアウト | 🔜 準備中 |
| faq-layout-library.md | FAQセクションレイアウト | 🔜 準備中 |
| flow-layout-library.md | Flowセクションレイアウト | 🔜 準備中 |
| pricing-layout-library.md | Pricingセクションレイアウト | 🔜 準備中 |
| profile-layout-library.md | Profileセクションレイアウト | 🔜 準備中 |
| contact-layout-library.md | Contactセクションレイアウト | 🔜 準備中 |
| footer-layout-library.md | Footerセクションレイアウト | 🔜 準備中 |

### photo/
| ファイル | 内容 | 状態 |
|---------|------|------|
| photo-composition-library.md | 写真構図パターン | 🔜 準備中 |
| visual-composition-rules.md | ビジュアル選定・加工ルール | 🔜 準備中 |

### components/
| ファイル | 内容 | 状態 |
|---------|------|------|
| ui-component-library.md | コンポーネント統合インデックス | 🔜 準備中 |
| button-library.md | ボタンパターン | 🔜 準備中 |
| card-library.md | カードパターン | 🔜 準備中 |
| form-library.md | フォームパターン | 🔜 準備中 |
| badge-library.md | バッジ・タグパターン | 🔜 準備中 |
| icon-library.md | アイコン使用ルール | 🔜 準備中 |

### motion/
| ファイル | 内容 | 状態 |
|---------|------|------|
| motion-library.md | アニメーション・トランジション | 🔜 準備中 |

### spacing/
| ファイル | 内容 | 状態 |
|---------|------|------|
| spacing-library.md | 余白スケール・セクション間距離 | 🔜 準備中 |

### typography/
| ファイル | 内容 | 状態 |
|---------|------|------|
| typography-library.md | フォント・スケール・業種別推奨 | 🔜 準備中 |

### colors/
| ファイル | 内容 | 状態 |
|---------|------|------|
| color-system.md | カラーシステム・業種別パレット | 🔜 準備中 |

---

## 制作フロー（Design System ベース）

```
業種判定 → Section Layout → Photo Composition → UI Components
→ Motion → Spacing → Typography → Color System → 制作
```

詳細: `knowledge/production-rules.md`
