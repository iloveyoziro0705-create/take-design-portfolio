# Color System

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: colors

## 概要

カラーシステム・業種別推奨カラーパレット・色の使い分けルールのライブラリ。
LP・HP・WordPress・SaaS・管理画面・ポートフォリオで一貫したカラー設計基準を収録予定。

## 収録予定内容

### システムカラー（共通）

| ロール | トークン名 | 用途 |
|-------|---------|------|
| Primary | --color-primary | メインブランドカラー |
| Primary-dark | --color-primary-dark | ホバー・強調 |
| Secondary | --color-secondary | サブカラー |
| Accent | --color-accent | 目立たせたい箇所 |
| Background | --color-bg | ページ背景 |
| Surface | --color-surface | カード・パネル背景 |
| Text-primary | --color-text | 本文 |
| Text-sub | --color-text-sub | サブテキスト |
| Border | --color-border | 罫線 |
| Success | --color-success | 完了・チェック |
| Warning | --color-warning | 注意 |
| Error | --color-error | エラー |

### 業種別推奨カラーパレット

#### 美容・エステ（ラグジュアリー）
- Primary: #c9a96e（ゴールド）
- Secondary: #f5f0e8（クリーム）
- Accent: #1a1a1a（ブラック）

#### 美容・エステ（親しみ系）
- Primary: #e8a0b4（ピンク）
- Secondary: #fff5f8（薄ピンク）
- Accent: #c47ea0（濃ピンク）

#### 医療・クリニック
- Primary: #2563eb（ブルー）
- Secondary: #eff6ff（薄ブルー）
- Accent: #1e40af（濃ブルー）

#### SaaS・テック
- Primary: #7c3aed（パープル）
- Secondary: #f5f3ff（薄パープル）
- Accent: #4c1d95（濃パープル）

#### 飲食
- Primary: #ea580c（オレンジ）
- Secondary: #fff7ed（薄オレンジ）
- Accent: #9a3412（濃オレンジ）

#### 採用・HR
- Primary: #16a34a（グリーン）
- Secondary: #f0fdf4（薄グリーン）
- Accent: #14532d（濃グリーン）

#### コーポレート（スタンダード）
- Primary: #1e3a5f（ネイビー）
- Secondary: #f0f4f8（薄グレー）
- Accent: #c9a96e（ゴールド）

### カラー使用ルール

- **メインカラー使用率**: 10%以下（アクセントとして）
- **背景色**: 白 or 薄グレー（#f8f9fa以上の明度）
- **コントラスト比**: テキスト4.5:1以上（WCAG AA）
- **グラデーション**: 同系色2色で（補色グラデは上級者向け）
- **ダークモード**: セクションごとに背景切り替えで擬似ダークを表現

### グラデーション定義

| 名称 | 定義 |
|------|------|
| grad-brand | linear-gradient(135deg, var(--primary), var(--primary-dark)) |
| grad-warm | linear-gradient(135deg, #f97316, #ef4444) |
| grad-cool | linear-gradient(135deg, #3b82f6, #8b5cf6) |
| grad-dark | linear-gradient(135deg, #1e293b, #0f172a) |
| grad-gold | linear-gradient(135deg, #c9a96e, #a07840) |
