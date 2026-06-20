# 業種別WordPress構成辞典

## 概要
業種別の最適なWordPress構成・テーマ・ページ構成を体系化する。

---

## WP-001: 美容サロン WordPressサイト

**構成タイプ**: 予約型コーポレートサイト  
**推奨テーマ**: Cocoon / Lightning / Swell / 有料: THE THOR

### 必須ページ構成
```
├── トップ（LP的構成）
├── メニュー・料金
├── スタッフ紹介
├── お客様の声
├── ギャラリー
├── アクセス
├── 予約ページ
├── ブログ（施術レポート・美容情報）
└── プライバシーポリシー
```

### 必須プラグイン
- SEO: All in One SEO / Yoast SEO
- 予約: MW WP Form / Cocoar2 / MTS Simple Booking
- キャッシュ: WP Super Cache / W3 Total Cache
- セキュリティ: SiteGuard WP Plugin
- バックアップ: UpdraftPlus

### カスタム投稿タイプ
```php
// functions.php
register_post_type('menu', [
  'label' => 'メニュー',
  'public' => true,
  'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
  'menu_icon' => 'dashicons-clipboard',
]);

register_post_type('staff', [
  'label' => 'スタッフ',
  'public' => true,
  'supports' => ['title', 'editor', 'thumbnail'],
  'menu_icon' => 'dashicons-groups',
]);

register_post_type('voice', [
  'label' => 'お客様の声',
  'public' => true,
  'supports' => ['title', 'editor', 'custom-fields'],
  'menu_icon' => 'dashicons-format-quote',
]);
```

---

## WP-002: 飲食店 WordPressサイト

**構成タイプ**: 情報提供 + 予約誘導型

### 必須ページ構成
```
├── トップ
├── メニュー（料理・ドリンク）
├── コース・宴会プラン
├── 店舗情報・アクセス
├── ギャラリー
├── 予約
└── プライバシーポリシー
```

### 外部連携
- 予約: ホットペッパーグルメ / ぐるなび / TableCheck
- Googleビジネスプロフィール連携（レビュー表示）
- Instagram連携（最新投稿表示）

---

## WP-003: 採用・求人サイト

**構成タイプ**: 求職者向け会社紹介 + 応募フォーム型

### 必須ページ構成
```
├── トップ（LP的構成）
├── 仕事内容
├── 働き方・待遇
├── 先輩スタッフの声
├── 1日の流れ
├── 職場環境・施設
├── 会社紹介
├── 求人票（職種別）
├── 応募フォーム
└── プライバシーポリシー
```

### カスタム投稿タイプ
```php
register_post_type('job', [
  'label' => '求人情報',
  'public' => true,
  'supports' => ['title', 'editor', 'custom-fields'],
  'menu_icon' => 'dashicons-businessman',
]);
```

---

## WP-004: 士業・コンサル WordPressサイト

**構成タイプ**: 信頼構築 + 問い合わせ誘導型

### 必須ページ構成
```
├── トップ
├── サービス一覧
│   ├── サービス個別ページ（各サービス）
├── 料金
├── 解決事例・実績
├── 代表プロフィール
├── 事務所概要
├── ブログ（専門知識発信）
├── 問い合わせ
└── プライバシーポリシー
```

### SEO戦略
- ブログ: 専門分野のロングテールキーワード
- 地域名 + 業種名 でローカルSEO
- Googleビジネスプロフィール最適化

---

## WP-005: 医療・クリニック WordPressサイト

**構成タイプ**: 安心感訴求 + 予約誘導型

### 必須ページ構成
```
├── トップ
├── 診療科目・症状別ページ
├── 医師・スタッフ紹介
├── 設備・施設案内
├── 料金・保険診療
├── 初診の流れ
├── よくある質問
├── アクセス・診療時間
├── 予約
├── ブログ（健康情報）
└── プライバシーポリシー
```

### 法規制対応
- 医療広告ガイドライン遵守
- 効果効能の過剰表現禁止
- 患者の声の掲載は慎重に（同意書必須）

---

## WP-006: ECサイト（WooCommerce）

**構成タイプ**: 物販型

### 必須ページ
```
├── トップ
├── 商品一覧
├── 商品詳細
├── カート
├── 購入手続き
├── マイページ
├── 特定商取引法に基づく表記
└── プライバシーポリシー
```

### 必須プラグイン
- WooCommerce（EC機能）
- WooCommerce Payments / Square / GMOイプシロン（決済）
- WooCommerce PDF Invoices（領収書）
- YITH WooCommerce Wishlist（お気に入り）

---

## 統計・メモ

- 登録WordPressパターン数: 6
- 最終更新: 2026-06-20
