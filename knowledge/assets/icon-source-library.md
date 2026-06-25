# Icon Source Library — アイコン素材選定辞典

**バージョン:** v1.0
**最終更新:** 2026-06-25
**管理者:** TAKE Design
**参照:** design-system.md / industry-asset-patterns.md

---

## 概要

LP・ホームページ・WordPress制作で使用するアイコンライブラリの選定基準と推奨実装方法を統一管理する。

**標準採用:** Lucide Icons（全案件デフォルト）

---

## アイコンライブラリ比較

| ライブラリ | スタイル | SVG | 数量 | CDN | 推奨業種 | 優先度 |
|-----------|---------|-----|------|-----|---------|--------|
| Lucide | アウトライン・モダン | ○ | 1500+ | ○ | 全業種（標準） | ★★★ |
| Heroicons | アウトライン・フラット | ○ | 300+ | ○ | SaaS・管理画面 | ★★ |
| Tabler Icons | アウトライン・多様 | ○ | 5000+ | ○ | LP・HP全般 | ★★ |
| Phosphor Icons | 多スタイル | ○ | 9000+ | ○ | 親しみやすいデザイン | ★★ |
| Font Awesome | 多スタイル・定番 | ○ | 2000+ | ○ | WordPress・汎用 | ★ |
| Bootstrap Icons | シンプル | ○ | 2000+ | ○ | Bootstrap利用時 | ★ |

---

## ICON-001: Lucide（標準採用）

**URL:** https://lucide.dev  
**CDN:** `<script src="https://unpkg.com/lucide@latest"></script>`  
**用途:** LP / HP / WordPress / 全案件標準  
**特徴:** 軽量・モダン・Figma連携・商用利用可（ISCライセンス）

### 実装方法

```html
<!-- CDN読み込み -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- アイコン使用 -->
<i data-lucide="heart" class="icon"></i>
<i data-lucide="check-circle" class="icon-check"></i>

<!-- 初期化 -->
<script>lucide.createIcons();</script>
```

```css
/* 推奨スタイル */
.icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.5;
}

.icon-lg {
  width: 40px;
  height: 40px;
}

.icon-feature {
  width: 48px;
  height: 48px;
  color: var(--accent);
}
```

### 業種別推奨アイコン一覧

#### 美容サロン
```
star          ← 評価・口コミ
heart         ← 安心・好感
sparkles      ← 輝き・美しさ
shield-check  ← 安全・保証
clock         ← 時間・営業時間
map-pin       ← 場所・アクセス
phone         ← 電話
calendar      ← 予約
user          ← スタッフ
check-circle  ← 特徴・メリット
```

#### 採用・求人
```
briefcase     ← 仕事・キャリア
users         ← チーム・仲間
trending-up   ← 成長・昇給
clock         ← 勤務時間
map-pin       ← 勤務地
heart         ← やりがい
award         ← 表彰・評価
graduation-cap ← 研修・資格
coffee        ← 福利厚生
smile         ← 雰囲気・社風
```

#### 医療・クリニック
```
shield-check  ← 安全・認定
heart-pulse   ← 健康・医療
stethoscope   ← 診察
clock         ← 診療時間
map-pin       ← クリニック所在地
phone         ← 予約電話
calendar      ← 予約
user-check    ← 医師・スタッフ
check-circle  ← 特徴・強み
alert-circle  ← 注意事項
```

#### 飲食・レストラン
```
utensils      ← 食事・料理
chef-hat      ← シェフ・こだわり
clock         ← 営業時間
map-pin       ← アクセス
phone         ← 予約電話
star          ← 評価・おすすめ
wine          ← ドリンク・お酒
leaf          ← 素材・自然
heart         ← こだわり
calendar      ← ご予約
```

#### スクール・教育
```
graduation-cap ← 卒業・資格
book-open     ← 学習・カリキュラム
monitor       ← オンライン・PC
users         ← 講師・コミュニティ
trending-up   ← 成長・スキルアップ
award         ← 実績・認定
clock         ← 学習時間・期間
check-circle  ← カリキュラム・特徴
star          ← 評価・口コミ
zap           ← スピード・効率
```

#### SaaS / BtoB
```
zap           ← 高速・効率
shield-check  ← セキュリティ・安全
bar-chart-2   ← データ・分析
settings      ← 設定・カスタマイズ
users         ← チーム・マルチユーザー
cloud          ← クラウド
refresh-cw    ← 自動更新・同期
lock          ← セキュリティ
trending-up   ← 効果・成果
check-circle  ← 機能・特徴
```

### 推奨サイズ・使い方

| 用途 | サイズ | stroke-width |
|------|--------|-------------|
| 特徴アイコン（大） | 48px | 1.5 |
| リスト・特徴（中） | 32px | 1.5 |
| テキスト内（小） | 20px | 2 |
| ボタン内 | 16〜18px | 2 |
| ナビ・フッター | 20〜24px | 1.5 |

---

## ICON-002: Heroicons

**URL:** https://heroicons.com  
**CDN:** SVG直接コピペ or npm  
**用途:** SaaS / 管理画面 / テック系LP  
**特徴:** Tailwind CSS公式 / アウトライン＆ソリッド2スタイル / 商用利用可

### 使い分け

```
Outline（アウトライン版）: 軽い印象・情報提供系
Solid（塗りつぶし版）: 強調・ボタン内・CTA付近
```

### 推奨業種・シーン

```
SaaS LP: 機能紹介アイコン・管理画面UI説明
テック系: ダッシュボード・設定・セキュリティ
BtoB: 実績数値の横・特徴リストの先頭
```

---

## ICON-003: Tabler Icons

**URL:** https://tabler.io/icons  
**CDN:** `<link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet">`  
**用途:** LP / HP全般 / Lucideにない特殊アイコンが必要な場合  
**特徴:** 5000種以上・アウトライン統一・商用利用可（MIT）

### 活用ポイント

```
Lucideにないアイコンが必要な場合の第2選択肢。
同一LP内でLucideとTablerを混在させない。
```

---

## ICON-004: Phosphor Icons

**URL:** https://phosphoricons.com  
**CDN:** `<script src="https://unpkg.com/@phosphor-icons/web"></script>`  
**用途:** 親しみやすいデザイン / 採用LP / 教育 / コミュニティ  
**特徴:** Regular / Bold / Fill / Duotone等6スタイル / 9000種以上

### スタイル別推奨

| スタイル | 推奨業種 | 印象 |
|---------|---------|------|
| Regular | 全般 | 標準・モダン |
| Bold | 採用・スクール | 力強い・フレンドリー |
| Fill | 強調・CTA付近 | 視認性高い |
| Duotone | 特徴アイコン | 奥行き・上質感 |

---

## アイコン選定ルール

### 統一原則

```
1. 1つのLPで使用するアイコンライブラリは原則1種類に統一
2. スタイル（アウトライン/塗り）を混在させない
3. サイズは3段階（大/中/小）で統一
4. カラーはCSS変数で管理（ハードコード禁止）
5. stroke-widthを全体で統一する（1.5 or 2）
```

### NG パターン

```
NG: Font Awesome / Lucide / Heroicons を1LPで混在
NG: 大小バラバラのサイズ（24px/32px/28px が混在）
NG: アウトラインと塗りを同じセクションで混在
NG: 色が業種カラーと合っていない（赤を医療に使うなど）
```

---

## 更新履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.0 | 2026-06-25 | 初版作成。Lucide標準採用・4ライブラリ整理 |
