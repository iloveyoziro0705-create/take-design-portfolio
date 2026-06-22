# CTA辞典

## 概要
コンバージョンを生むCTAパターンのライブラリ。
ボタンテキスト・配置・デザイン・心理学を体系化する。

**現在のステータス**: Phase 1完了待ち（Phase 3から本格育成）

---

## CTA管理ルール

- パターンID: `CTA-XXX`
- ボタンテキスト・色・配置・心理学トリガーを必ず記録
- A/Bテスト結果が得られた場合は追記

### Learning Reason（各CTAパターン追加時に必須記録）

新規パターンを追加する際は、パターン末尾に必ず以下のセクションを記録すること。

```markdown
## Learning Reason
### 保存理由
[なぜこのCTAパターンを登録したか（CV効果・心理学的根拠・発見経緯）]
### 再利用価値
[どの業種・ページポジション・CVアクションに何度適用できるか]
### 特に優れている点
[文言の具体性・視認性・心理トリガーの観点で優れている点]
### 他案件への応用先
[適用推奨の業種・LP位置（FV/中盤/最終）・CVアクションタイプ]
```

---

## CTA-001: LINE誘導型（美容・サロン・個人サービス）

**用途**: LINE公式アカウントへの誘導  
**CV率特性**: タップ率高・離脱率低・返信ハードル低

### ボタン実装
```html
<a href="https://lin.ee/XXXXX" class="cta-line">
  <svg><!-- LINE icon --></svg>
  LINEで無料相談する
</a>
```

### スタイル
```css
.cta-line {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #06c755;
  color: #fff;
  padding: 18px 36px;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(6,199,85,.35);
  transition: transform .2s, box-shadow .2s;
}
.cta-line:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(6,199,85,.45);
}
```

### 効果的なテキストパターン
| テキスト | 適用場面 |
|---------|---------|
| 「LINEで無料相談する」 | 相談型サービス |
| 「まずはLINEで話を聞く」 | 不安が高い商品 |
| 「LINEで予約する（30秒）」 | 時間訴求 |
| 「今すぐLINEで予約 →」 | 即決誘導 |

### 配置ルール
- Hero下: 必須
- セクション末尾: 1〜2か所
- 固定フッター: スマホのみ

---

## CTA-002: 無料相談型（士業・コンサル・金融・B2B）

**用途**: 問い合わせフォーム or 電話  
**CV率特性**: 熟考型ユーザー向け・信頼性が重要

### ボタンテキストパターン
| テキスト | 心理学 |
|---------|--------|
| 「無料相談を予約する」 | 無料訴求 |
| 「まずは話だけ聞いてみる」 | ハードル低下 |
| 「60分 無料でご相談」 | 具体的な価値 |
| 「今すぐ無料相談（予約不要）」 | 即時行動 + 手間なし |

### 安心テキスト（CTAの直下に配置）
```
✓ 完全無料・しつこい営業なし
✓ オンライン対応可能
✓ 〇〇士が直接対応
```

---

## CTA-003: 無料体験型（スクール・SaaS・アプリ）

**用途**: 無料トライアル・体験講座申込  
**CV率特性**: 低ハードル・高件数・ナーチャリング必要

### ボタンテキストパターン
| テキスト | 心理学 |
|---------|--------|
| 「無料で試してみる」 | 損失なし訴求 |
| 「7日間 無料体験を始める」 | 期間の明示 |
| 「まずは無料登録（1分）」 | 時間コスト低 |
| 「クレジットカード不要で始める」 | 金銭リスク排除 |

---

## CTA-004: 資料請求型（BtoB・不動産・教育）

**用途**: 資料PDF / カタログ送付  
**CV率特性**: 低コミット・情報収集段階のユーザー

### ボタンテキストパターン
| テキスト | 適用場面 |
|---------|---------|
| 「無料資料をダウンロード」 | デジタル資料 |
| 「カタログを請求する（無料）」 | 印刷物 |
| 「詳しい資料を受け取る」 | 情報ニーズ訴求 |

---

## CTA-005: 応募型（採用LP）

**用途**: 求人応募・エントリー  
**CV率特性**: 意思決定型・情報完全性が重要

### ボタンテキストパターン
| テキスト | 心理学 |
|---------|--------|
| 「まずは話だけ聞いてみる」 | 最低ハードル |
| 「見学だけでもOK！応募する」 | 行動コスト最小化 |
| 「1分で応募完了！エントリーする」 | 時間コスト低 |
| 「今の職場を変えてみる →」 | 変化訴求 |

---

## CTA-006: 固定フッターCTA（スマホ専用）

**用途**: スマホユーザー向け常時表示CTA  
**CV率特性**: 見逃しゼロ・タップ率向上

### 実装
```css
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 12px 16px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 -4px 20px rgba(0,0,0,.12);
  display: flex;
  gap: 10px;
}
@media (min-width: 768px) {
  .sticky-cta { display: none; }
}
```

### 構成パターン
- パターンA: [電話ボタン] [LINEボタン] — 2択
- パターンB: [大CTAボタン全幅] — 1択
- パターンC: [テキスト + ボタン] — コンテキスト訴求

---

## CTA-007: カウントダウン付きCTA（希少性訴求）

**用途**: 期間限定オファー・早期割引  
**CV率特性**: 緊急性による意思決定加速

### 実装パターン
```html
<div class="cta-urgency">
  <p class="urgency-text">⚡ キャンペーン終了まで</p>
  <div class="countdown" id="countdown">
    <span id="h">00</span>:<span id="m">00</span>:<span id="s">00</span>
  </div>
  <a href="#" class="btn-primary">今すぐ申し込む</a>
  <p class="cta-sub">残り〇名様限定</p>
</div>
```

---

## CTA-008: ヘッダーナビ内カラー強調予約ボタン型

**用途**: ヘッダー固定ナビゲーション内での予約ボタン差別化  
**CV率特性**: スクロール中の視認性確保・常時接触・FAIL-001回避

### 構成
```html
<nav>
  <a href="#">HOME</a>
  <a href="#">CONCEPT</a>
  <a href="#">MENU</a>
  <a href="#">GALLERY</a>
  <!-- この予約ボタンだけカラーで塗りつぶし -->
  <a href="#reserve" class="nav-reserve-btn">Reserve</a>
</nav>
```

### スタイル
```css
.nav-reserve-btn {
  background: var(--accent); /* ブランドカラー */
  color: #fff;
  padding: 10px 24px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .05em;
  transition: opacity .2s;
}
.nav-reserve-btn:hover { opacity: .85; }

/* ヘッダー固定 */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(10px);
}
```

### 配置ルール
- ヘッダー固定（`position: sticky`）必須
- ナビ最右端に配置（視線が自然に予約ボタンへ着地）
- スマホ固定フッターCTAと組み合わせることで上下両端に予約を常駐させる

### 効果的なテキスト
| テキスト | 適用場面 |
|---------|---------|
| 「Reserve」 | スタイリッシュ系サロン（英字） |
| 「ご予約」 | 親しみやすい系サロン（日本語） |
| 「予約する」 | 明確な行動喚起型 |
| 「WEB予約」 | 24時間対応を示唆 |

---

## CTA-009: WEB予約+LINE 2択フッターCTA型（美容系標準）

**用途**: フッター・最終CTA・スマホ固定フッターでの2択構成  
**CV率特性**: ユーザーの好み分散に対応・取りこぼし最小化・FAIL-006回避

### 構成
```html
<!-- スマホ固定フッターCTA -->
<div class="sticky-cta-2col">
  <a href="#web-reserve" class="btn btn--web">
    <svg><!-- カレンダーアイコン --></svg>
    WEB予約する
  </a>
  <a href="https://lin.ee/XXXXX" class="btn btn--line">
    <svg><!-- LINEアイコン --></svg>
    LINEで予約
  </a>
</div>
```

### スタイル
```css
.sticky-cta-2col {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  z-index: 9999;
}
.btn--web {
  background: var(--accent);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 12px;
  font-weight: 700;
  font-size: 15px;
}
.btn--line {
  background: #06c755;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 12px;
  font-weight: 700;
  font-size: 15px;
}
@media (min-width: 768px) {
  .sticky-cta-2col { display: none; }
}
```

### 2択の心理設計
| ボタン | 対象ユーザー | 特性 |
|------|------------|------|
| WEB予約（カレンダー型） | 計画的・情報整理派 | 日時を即確定したい |
| LINE予約 | コミュニケーション重視派 | 質問してから決めたい・文字派 |

**Locco D/56 でCTA設計 16/20（シリーズ最高）を実現した確認済みパターン**

---

## CTA-010: 来店誘導型CTA（地図+電話 / 予約不要型飲食店）

**用途**: 予約不要の来店誘導型飲食店（ラーメン・焼肉・カウンター・ファストカジュアル）のCTA設計  
**CV率特性**: 業態に合った最適CVアクションへ誘導し、ミスマッチによる離脱を防ぐ

### 業態別CTA設計ルール

| 業態タイプ | 最適CTA | NG例（ミスマッチ）|
|----------|---------|----------------|
| 来店誘導型 | [地図を見る] + [電話する] | 「ご予約はこちら」（予約不要なのに混乱を招く）|
| 予約必須型 | [ネット予約] + [電話予約] | 地図ボタンのみ（予約への誘導が弱い）|
| 宴会対応型 | [宴会予約する] + [地図を見る] | 地図なし（来店確認ができない）|

**注意**: IND-002に記録の通り、来店誘導型に「予約ボタンなし」は欠陥ではなく正解。

### 実装（来店誘導型）
```html
<div class="cta-visit">
  <a href="https://maps.google.com/?q=[店舗住所]" class="btn btn--map" target="_blank" rel="noopener">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    </svg>
    地図を見る
  </a>
  <a href="tel:0X-XXXX-XXXX" class="btn btn--tel">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
    電話で確認する
  </a>
</div>
```

### スタイル
```css
.cta-visit {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn--map {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2a6aad;   /* Googleマップブルー系 */
  color: #fff;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(42,106,173,.35);
  transition: transform .2s, box-shadow .2s;
}
.btn--map:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(42,106,173,.45);
}
.btn--tel {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 700;
  transition: background .2s, color .2s;
}
.btn--tel:hover {
  background: var(--accent);
  color: #fff;
}
```

### 2択の設計意図
| ボタン | 対象ユーザー | 心理段階 |
|------|------------|---------|
| 地図を見る | アクセス確認 → 来店直結 | 「行けるかどうか確認したい」段階 |
| 電話で確認 | 混雑確認・席数確認 | 「今夜行くか迷っている」段階 |

### 配置ルール
- フッター最終CTA: 必須（来店誘導型の核心）
- ヘッダー右端: 電話番号テキストリンクのみ（常時表示）
- セクション末尾: 「地図を見る」1択でOK（重複させすぎない）
- スマホ固定フッター: `btn--map`（大）+ `btn--tel`（小）の2択

---

## デザイン原則

### ボタンカラー（業種別）
| 業種 | 推奨色 | 理由 |
|------|--------|------|
| 美容・エステ | `#c8a56a`(金) / `#e8a0a0`(ピンク) | ブランドとの一致 |
| 医療・福祉 | `#2eb88a`(緑) | 安心・回復 |
| 採用 | `#f97316`(オレンジ) | 活力・行動 |
| 金融 | `#1a3a5c`(ネイビー) | 信頼・安定 |
| IT・テック | `#6366f1`(インディゴ) | 革新 |
| 飲食 | `#d8a76a`(金茶) | 食欲・温かみ |
| LINE誘導 | `#06c755`(LINEグリーン) | 認知色固定 |

### サイズ規定
- デスクトップ: `padding: 18px 44px; font-size: 17px;`
- モバイル: `padding: 16px 32px; font-size: 16px;`
- 最小タップ領域: 44x44px（WCAG準拠）

### ホバーエフェクト
```css
.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,0,0,.2);
  transition: .25s ease;
}
```

---

## 統計・メモ

- 登録CTAパターン数: 10（飲食LP 辞典統合 2026-06-22 時点）
- Phase 3 育成開始条件: LP辞典100パターン到達後
- 最終更新: 2026-06-22（CTA-010 追加 / 飲食LP辞典統合）
