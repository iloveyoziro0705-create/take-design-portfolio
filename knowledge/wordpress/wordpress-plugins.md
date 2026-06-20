# WordPressプラグイン辞典

## 概要
業種・目的別の推奨プラグインを管理する。
インストール前にこのファイルを参照して選定する。

---

## カテゴリ別プラグイン一覧

### SEO

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| All in One SEO | 総合SEO | ★★★★★ | 日本語対応。初心者向け |
| Yoast SEO | 総合SEO | ★★★★☆ | 英語強め。機能豊富 |
| SEOPress | 総合SEO | ★★★★☆ | 軽量・低コスト |
| Rank Math | 総合SEO | ★★★★★ | 高機能・無料版でも十分 |

**推奨**: Rank Math（無料版）または All in One SEO

---

### フォーム

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| MW WP Form | 問い合わせフォーム | ★★★★★ | 日本製。自動返信・DB保存 |
| Contact Form 7 | 問い合わせフォーム | ★★★★☆ | 軽量。カスタマイズ性高 |
| WPForms | 問い合わせフォーム | ★★★★☆ | UIが美しい。有料版で機能拡張 |
| Gravity Forms | 高機能フォーム | ★★★★★ | 複雑な条件分岐に対応。有料 |

**推奨**: MW WP Form（日本語環境）

---

### キャッシュ・高速化

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| WP Super Cache | キャッシュ | ★★★★☆ | 軽量・安定 |
| W3 Total Cache | キャッシュ | ★★★★☆ | 高機能だが設定が複雑 |
| WP Rocket | 総合高速化 | ★★★★★ | 有料。設定が簡単で効果大 |
| Autoptimize | CSS/JS最適化 | ★★★★☆ | 無料。WP Rocketと組み合わせ可 |
| EWWW Image Optimizer | 画像圧縮 | ★★★★★ | 自動WebP変換。必須級 |
| Smush | 画像圧縮 | ★★★★☆ | UIが使いやすい |

**推奨セット（無料）**: WP Super Cache + Autoptimize + EWWW Image Optimizer

---

### セキュリティ

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| SiteGuard WP Plugin | 不正ログイン防止 | ★★★★★ | 日本製。必須 |
| Wordfence Security | 総合セキュリティ | ★★★★★ | ファイアウォール・マルウェアスキャン |
| iThemes Security | 総合セキュリティ | ★★★★☆ | 設定が細かい |
| WP Cerber Security | スパム・不正防止 | ★★★★☆ | 軽量 |

**推奨**: SiteGuard WP Plugin（必須）+ Wordfence（追加保護）

---

### バックアップ

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| UpdraftPlus | 自動バックアップ | ★★★★★ | Google Drive/Dropbox連携。定番 |
| BackWPup | 自動バックアップ | ★★★★☆ | 無料版で十分な機能 |
| All-in-One WP Migration | 移行・バックアップ | ★★★★★ | サーバー移行に最適 |

**推奨**: UpdraftPlus（Google Drive連携）

---

### SNS・Instagram

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| Smash Balloon Social Photo Feed | Instagram埋め込み | ★★★★★ | 最も信頼性高い |
| Elfsight Instagram Feed | Instagram埋め込み | ★★★★☆ | デザイン豊富 |
| Custom Facebook Feed | Facebook埋め込み | ★★★★☆ | Facebook公式連携 |

---

### 予約・スケジュール

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| MTS Simple Booking | 予約管理 | ★★★★☆ | 日本製。シンプル |
| Booking Calendar | 予約管理 | ★★★★☆ | カレンダーUI |
| Bookly | 予約管理 | ★★★★★ | 高機能。有料版推奨 |
| Cocoar2 | QRコード予約 | ★★★☆☆ | 特殊用途 |

---

### ポップアップ・CTA

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| Popup Maker | ポップアップ | ★★★★☆ | 無料で機能十分 |
| OptinMonster | リード獲得 | ★★★★★ | 有料だが効果大 |
| Hustle | ポップアップ | ★★★★☆ | 無料版あり |

---

### 多言語

| プラグイン名 | 用途 | 推奨度 | 備考 |
|------------|------|--------|------|
| WPML | 多言語化 | ★★★★★ | 定番。有料 |
| Polylang | 多言語化 | ★★★★☆ | 無料版でも対応可 |
| TranslatePress | 多言語化 | ★★★★☆ | ビジュアル翻訳UI |

---

## インストール禁止プラグイン（パフォーマンス・セキュリティリスク）

- Jetpack（全機能が重い。必要な機能のみ代替プラグイン使用）
- Revolution Slider（重い。代替: Swiper.js）
- WP-Optimize と他キャッシュプラグインの併用（競合）
- 長期間更新停止のプラグイン（3年以上更新なし）

---

## 推奨プラグインセット（業種別）

### 美容サロン最小構成
```
SiteGuard WP Plugin
All in One SEO または Rank Math
MW WP Form
EWWW Image Optimizer
UpdraftPlus
Smash Balloon Social Photo Feed（Instagram埋め込み用）
```

### コーポレートサイト最小構成
```
SiteGuard WP Plugin
Rank Math
Contact Form 7 または MW WP Form
EWWW Image Optimizer
WP Super Cache
UpdraftPlus
```

---

## 統計・メモ

- 最終更新: 2026-06-20
