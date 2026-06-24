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

## CTA-011: BtoB 3段階フェーズ別CTA（SaaS・業務ツール）

**用途**: 検討フェーズ別に3種類のCTAを同時提供し、初期〜最終検討層全員を取りこぼさない  
**CV率特性**: 単一CTA比でCV数1.5〜2倍（GEN-009系LPの最重要改善軸）  
**FAIL回避**: FAIL-017（BtoBのCTA一本化型）の根本的解決

### 3段階CTAの設計原則
```
[初期検討層] 資料ダウンロード
  → まだ社内で予算も上がっていない / 情報収集段階
  → ハードル最低・氏名+メールのみ

[中期検討層] デモ依頼 / デモ動画視聴
  → 機能を確認したい / 複数候補と比較している
  → 担当者が「使うイメージ」を掴む段階

[最終検討層] 無料トライアル開始
  → 社内でGOが出た / 実際に試して稟議を通したい
  → CC不要・即時開始が必須条件
```

### HTMLテンプレート
```html
<div class="cta-3stage">
  <!-- 初期検討層 -->
  <div class="cta-stage cta-stage--doc">
    <p class="stage-label">まずは情報収集</p>
    <a href="#download" class="btn btn--outline">
      <svg><!-- download icon --></svg>
      資料をダウンロード（無料）
    </a>
    <p class="stage-note">所要1分 / 社内共有用PDF</p>
  </div>

  <!-- 中期検討層 -->
  <div class="cta-stage cta-stage--demo">
    <p class="stage-label">機能を確認したい</p>
    <a href="#demo" class="btn btn--demo">
      <svg><!-- play icon --></svg>
      デモを見る（3分）
    </a>
    <p class="stage-note">実際の操作画面をご覧いただけます</p>
  </div>

  <!-- 最終検討層 -->
  <div class="cta-stage cta-stage--trial">
    <p class="stage-label">導入を検討中</p>
    <a href="#trial" class="btn btn--primary">
      無料トライアルを始める
    </a>
    <p class="stage-note">クレジットカード不要 / 14日間無料</p>
  </div>
</div>
```

### スタイル
```css
.cta-3stage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  background: #f8f9fc;
  border-radius: 16px;
}
@media (max-width: 767px) {
  .cta-3stage { grid-template-columns: 1fr; }
}

.cta-stage {
  text-align: center;
  padding: 24px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,.08);
}
.stage-label {
  font-size: 12px;
  color: #888;
  letter-spacing: .05em;
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
.stage-note {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

/* ボタンスタイル */
.btn--outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 2px solid #4a6cf7;
  color: #4a6cf7;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: .2s;
  width: 100%;
  justify-content: center;
}
.btn--outline:hover { background: #4a6cf7; color: #fff; }

.btn--demo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0f4ff;
  color: #4a6cf7;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: .2s;
  width: 100%;
  justify-content: center;
}
.btn--demo:hover { background: #dde6ff; }

.btn--primary {
  display: inline-block;
  background: #4a6cf7;
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: .2s;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 16px rgba(74,108,247,.4);
}
.btn--primary:hover { background: #3555e0; }
```

### 配置ルール
| 配置場所 | 推奨パターン |
|---------|------------|
| FV直下 | 3段階全部 or トライアル+資料DLの2択 |
| 中盤（機能紹介後） | デモCTA優先 |
| 価格セクション後 | トライアルCTA優先 |
| 最終CTA | 3段階全部（最後の門として総合）|

### Learning Reason
**保存理由**: GEN-009 SaaS/BtoB 10本分析でCTA一本化型LP（お問い合わせのみ）は全て低スコア（C+以下）。3段階CTA導入LPは平均+12点以上の差が確認された。  
**再利用価値**: SaaS・BtoB・IT・コンサル・HR・法務・ERP全ジャンルで適用可能。検討期間が長い商材に特に有効。  
**特に優れている点**: 担当者（提案者）と決裁者（承認者）の2段階意思決定構造に対応。担当者が「資料」で社内提案し、決裁者がGOを出したら「トライアル」という自然な流れを設計できる。  
**他案件への応用先**: SaaS全般・BtoBサービス・業務効率化ツール・HRテック・法務SaaS・ERP。

---

## CTA-012: 医療系 3チャンネルCTA（電話+LINE+Web予約）

**用途**: 予約方法をユーザーが選べる3チャンネル設計（クリニック・整体・美容医療）  
**CV率特性**: 年代別・行動パターン別の取りこぼしゼロ設計  
**根拠**: GEN-004医療系LP分析で「予約方法が1つ」のLPはCVを逃している

### 3チャンネルの対象ユーザー
| チャンネル | 対象ユーザー | 年代 |
|---------|-----------|------|
| Web予約（24時間） | 深夜・早朝に調べる・今すぐ決めたい | 20〜40代 |
| LINE予約 | 電話が苦手・文字で質問したい | 20〜30代 |
| 電話予約 | 口頭でしっかり確認したい | 40代以上 |

### HTMLテンプレート
```html
<div class="cta-medical-3ch">
  <h3 class="cta-heading">ご予約・お問い合わせ</h3>

  <div class="ch-grid">
    <a href="#web-booking" class="ch-item ch-web">
      <span class="ch-icon">🗓</span>
      <span class="ch-label">Web予約</span>
      <span class="ch-note">24時間受付</span>
    </a>
    <a href="https://lin.ee/XXXXX" class="ch-item ch-line">
      <span class="ch-icon">💬</span>
      <span class="ch-label">LINE予約</span>
      <span class="ch-note">気軽にご相談</span>
    </a>
    <a href="tel:0X-XXXX-XXXX" class="ch-item ch-tel">
      <span class="ch-icon">📞</span>
      <span class="ch-label">電話予約</span>
      <span class="ch-note">0X-XXXX-XXXX</span>
    </a>
  </div>

  <p class="cta-assurance">初診・初回カウンセリング無料 / 当日予約OK</p>
</div>
```

### スタイル
```css
.cta-medical-3ch {
  text-align: center;
  padding: 48px 24px;
  background: linear-gradient(135deg, #f0faf7 0%, #e8f5f0 100%);
  border-radius: 20px;
}
.ch-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 24px auto;
  max-width: 600px;
}
@media (max-width: 599px) {
  .ch-grid { grid-template-columns: 1fr; }
}
.ch-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border-radius: 12px;
  font-weight: 700;
  transition: transform .2s;
  gap: 4px;
}
.ch-item:hover { transform: translateY(-4px); }
.ch-icon { font-size: 24px; }
.ch-label { font-size: 16px; color: #fff; }
.ch-note { font-size: 12px; color: rgba(255,255,255,.8); }

.ch-web { background: #2eb88a; box-shadow: 0 6px 20px rgba(46,184,138,.3); }
.ch-line { background: #06c755; box-shadow: 0 6px 20px rgba(6,199,85,.3); }
.ch-tel { background: #3b82f6; box-shadow: 0 6px 20px rgba(59,130,246,.3); }

.cta-assurance {
  font-size: 13px;
  color: #666;
  margin-top: 16px;
}
```

### Learning Reason
**保存理由**: 医療LP（GEN-004）分析で単一予約チャンネルの離脱リスクが確認された。年代・時間帯・コミュニケーション好みによって予約チャンネルが異なるため3チャンネル設計が有効。  
**再利用価値**: クリニック・整体・美容医療・歯科・接骨院など医療系全般に高い再利用性。  
**特に優れている点**: 深夜にスマホで調べる若年層（Web予約）〜電話で確認したいシニア層（電話）まで全年代をカバー。「当日予約OK」「初診無料」の安心文言がCTAに直結。  
**他案件への応用先**: クリニック・美容医療・整体・歯科・接骨院・スパ（高単価サロン）。

---

## CTA-013: スクール系 フェーズ別2段CTA（無料体験+個別相談）

**用途**: スクール・教育サービスの検討フェーズ別2段CTA  
**CV率特性**: 「今すぐ申し込む」を避け、まず体験・相談でハードルを下げてCV獲得  
**根拠**: GEN-006スクール系LP分析（AIスクール・デザインスクール等）

### 2段CTAの設計原則
```
[低ハードル層] 無料体験・無料セミナー参加
  → 「まず試してみる」行動
  → 費用ゼロ・時間コスト最小
  → CV後にナーチャリングして本申込へ

[高意欲層] 個別カウンセリング申込
  → 「自分に合うか確認したい」行動
  → 担当者と1on1で相談できる安心感
  → 本申込に最も近いCV
```

### HTMLテンプレート
```html
<div class="cta-school">
  <!-- メインCTA: 無料体験 -->
  <div class="school-cta-main">
    <a href="#trial" class="btn btn--school-primary">
      無料体験に参加する
    </a>
    <ul class="school-cta-notes">
      <li>参加費無料・申込み2分</li>
      <li>オンライン開催・全国どこからでもOK</li>
      <li>次回開催: ○月○日（土）14:00〜</li>
    </ul>
  </div>

  <!-- サブCTA: 個別相談 -->
  <div class="school-cta-sub">
    <p class="sub-label">まず話を聞きたい方</p>
    <a href="#counseling" class="btn btn--school-outline">
      無料カウンセリングを予約する →
    </a>
    <p class="sub-note">LINEで気軽に相談も可能</p>
  </div>
</div>
```

### スタイル
```css
.cta-school {
  max-width: 560px;
  margin: 0 auto;
  text-align: center;
}
.school-cta-main {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 16px;
}
.btn--school-primary {
  display: inline-block;
  background: #fff;
  color: #6366f1;
  padding: 16px 40px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 17px;
  box-shadow: 0 4px 16px rgba(0,0,0,.15);
  transition: transform .2s;
}
.btn--school-primary:hover { transform: translateY(-3px); }

.school-cta-notes {
  list-style: none;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.school-cta-notes li {
  font-size: 13px;
  color: rgba(255,255,255,.85);
}
.school-cta-notes li::before { content: '✓ '; }

.school-cta-sub {
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.sub-label {
  font-size: 13px;
  color: #999;
  margin-bottom: 12px;
}
.btn--school-outline {
  display: inline-block;
  color: #6366f1;
  font-weight: 700;
  font-size: 15px;
  text-decoration: underline;
}
.sub-note {
  font-size: 12px;
  color: #aaa;
  margin-top: 8px;
}
```

### 配置ルール
- FV直下: メインCTA（無料体験）のみ
- 受講生実績セクション後: 2段CTA全部
- 料金紹介セクション後: 個別カウンセリングCTA（「費用面の相談は」）
- 最終CTA: 2段全部

### Learning Reason
**保存理由**: GEN-006（AIスクール/デザインスクール）分析で「今すぐ申し込む」系CTAより「無料体験」「無料相談」の2段設計がCVを確保しやすいことを確認。  
**再利用価値**: デザインスクール・AIスクール・語学スクール・転職スクール・資格スクール全般。  
**特に優れている点**: 決断できない検討層を「無料体験」で引き込み、高意欲層を「個別相談」で捕捉する二重の受け皿設計。  
**他案件への応用先**: スクール・コーチング・キャリア支援・副業支援・留学サービス。

---

## CTA-014: 採用LP 低ハードルエントリーCTA（見学・話だけ型）

**用途**: 採用LPでの最低ハードルCTA設計（即決NG層を取りこぼさない）  
**CV率特性**: 「応募しなくてもいい」「話を聞くだけ」でCV数を最大化  
**根拠**: GEN-007採用LP分析（保育士・物流・介護など転職に慎重な業種）

### 採用CVの心理的ハードル順序
```
高 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 低
[正式応募] > [面接] > [見学] > [話を聞く] > [資料を見る]

求職者は「応募 = 断りにくい」という心理がある
→「話を聞くだけ」「見学だけ」でハードルを最大限下げる
```

### テキストパターン（業種別）
| 業種 | CTAテキスト | 補足文 |
|-----|-----------|--------|
| 保育士 | 「まずは見学だけでもOK！」 | 「質問だけでも大歓迎です」 |
| 介護 | 「話だけ聞く（採用担当に直接）」 | 「履歴書不要でOK」 |
| 飲食 | 「1日体験から始めてみる →」 | 「働くイメージをつかんで」 |
| IT・デザイン | 「カジュアル面談を申し込む」 | 「選考なし・服装自由」 |
| 一般事務 | 「職場見学を予約する」 | 「内見感覚でOK」 |

### HTMLテンプレート
```html
<div class="cta-recruit">
  <!-- メインCTA: 最低ハードル -->
  <a href="#contact" class="btn btn--recruit-main">
    まずは話だけ聞いてみる（無料）
  </a>

  <!-- サブアクション群 -->
  <div class="recruit-sub-actions">
    <a href="tel:0X-XXXX-XXXX" class="sub-action">
      📞 電話で気軽に相談
    </a>
    <a href="https://lin.ee/XXXXX" class="sub-action">
      💬 LINEで質問する
    </a>
  </div>

  <!-- 安心文言 -->
  <div class="recruit-assurance">
    <span>✓ 履歴書不要</span>
    <span>✓ 採用担当が直接対応</span>
    <span>✓ しつこい連絡なし</span>
  </div>
</div>
```

### スタイル
```css
.cta-recruit { text-align: center; }

.btn--recruit-main {
  display: inline-block;
  background: #f97316;
  color: #fff;
  padding: 20px 48px;
  border-radius: 999px;
  font-size: 18px;
  font-weight: 800;
  box-shadow: 0 8px 24px rgba(249,115,22,.4);
  transition: transform .2s, box-shadow .2s;
}
.btn--recruit-main:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(249,115,22,.5);
}

.recruit-sub-actions {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.sub-action {
  color: #666;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: underline;
}

.recruit-assurance {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 16px;
  font-size: 13px;
  color: #888;
}
```

### Learning Reason
**保存理由**: GEN-007採用LP（保育士・物流・介護等）で「今すぐ応募」より「話を聞く」「見学だけ」型CTAが採用CVに直結することを確認。転職に慎重な業種では特に重要。  
**再利用価値**: 保育士・介護・物流・飲食・建設・製造など人材確保に苦戦する全業種の採用LPに適用可能。  
**特に優れている点**: 「履歴書不要」「しつこい連絡なし」の安心文言セットで求職者の応募ハードルを最大限排除。  
**他案件への応用先**: 採用LP全般・福祉系・介護・保育・物流・飲食スタッフ採用。

---

## CTA-015: SaaS インライン資料請求フォーム型CTA

**用途**: LP内でフォームを完結させる資料DL型CTA（他サイトへの離脱ゼロ）  
**CV率特性**: 外部フォームへの遷移がないため離脱率が低い / 入力項目最小化でCV率向上  
**根拠**: GEN-009全般での「LP内フォーム完結型資料DL」が高CVを確認

### 設計原則
```
入力項目: 3項目以内が鉄則（名前 + メール + 会社名）
送信後: 「ダウンロードリンク」をメール or 即時表示
強調: 「1分で完了」「今すぐダウンロード可能」
```

### HTMLテンプレート
```html
<section class="inline-dl" id="download">
  <div class="inline-dl__inner">
    <div class="inline-dl__copy">
      <p class="dl-tag">📄 無料資料</p>
      <h3>○○の導入事例・費用感がわかる<br>資料をダウンロード</h3>
      <ul class="dl-features">
        <li>✓ 導入事例5社分（ROI・削減工数）</li>
        <li>✓ 料金プラン概要（Starter / Pro / Enterprise）</li>
        <li>✓ 初期設定〜運用開始までのスケジュール</li>
      </ul>
    </div>

    <form class="dl-form" action="/download" method="POST">
      <div class="form-row">
        <input type="text" name="name" placeholder="お名前" required>
      </div>
      <div class="form-row">
        <input type="email" name="email" placeholder="メールアドレス" required>
      </div>
      <div class="form-row">
        <input type="text" name="company" placeholder="会社名" required>
      </div>
      <button type="submit" class="btn btn--dl">
        <svg><!-- download icon --></svg>
        今すぐダウンロード（無料）
      </button>
      <p class="form-privacy">
        <a href="/privacy">プライバシーポリシー</a>に同意の上ご送信ください。
        入力情報はダウンロード用途のみに使用します。
      </p>
    </form>
  </div>
</section>
```

### スタイル
```css
.inline-dl {
  background: linear-gradient(135deg, #1e3a5f 0%, #2d5a9e 100%);
  padding: 64px 24px;
}
.inline-dl__inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 767px) {
  .inline-dl__inner { grid-template-columns: 1fr; }
}

/* コピー側 */
.dl-tag {
  font-size: 13px;
  font-weight: 700;
  color: #93c5fd;
  letter-spacing: .1em;
  margin-bottom: 12px;
}
.inline-dl__copy h3 {
  font-size: clamp(20px, 3vw, 26px);
  color: #fff;
  line-height: 1.5;
  margin-bottom: 20px;
}
.dl-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dl-features li { font-size: 14px; color: rgba(255,255,255,.8); }

/* フォーム側 */
.dl-form {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.form-row input {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color .2s;
  box-sizing: border-box;
}
.form-row input:focus {
  outline: none;
  border-color: #4a6cf7;
}
.btn--dl {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: #4a6cf7;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(74,108,247,.4);
  transition: background .2s;
}
.btn--dl:hover { background: #3555e0; }
.form-privacy {
  font-size: 11px;
  color: #999;
  text-align: center;
}
.form-privacy a { color: #4a6cf7; }
```

### 配置ルール
- 機能説明セクション後: 最初の資料DLチャンス
- 導入事例セクション後: 「もっと詳しく知りたい」タイミング
- 最終CTA前: トライアルを選ばない層を資料DLで確保

### Learning Reason
**保存理由**: GEN-009 BtoB LP全10本で「LP離脱させない資料DL設計」の有無がCVに大きく影響することを確認。外部フォームサービス（HubSpot等）への遷移は離脱率20〜30%が目安。  
**再利用価値**: SaaS・BtoBサービス・HR・法務・ERP・ITコンサルなど稟議フローが発生する全業種。  
**特に優れている点**: 入力3項目のみ・LP内完結・受け取るコンテンツ（事例・料金・スケジュール）を明示することで「入力する価値」を担保。  
**他案件への応用先**: BtoB/SaaS全般・Webマーケ支援・採用SaaS・ERPシステム・法務ツール。

---

## CTA-016: 宴会・法人予約特化CTA（飲食イベント型）

**用途**: 宴会・歓送迎会・法人接待などの団体予約に特化したCTA設計  
**CV率特性**: 宴会予約はWebとの相性が良く、電話対応コスト削減にもつながる  
**根拠**: GEN-005飲食LP分析で「宴会予約特化CTAあり」店舗の競合差別化を確認

### 2段階宴会CTA設計
```
[プランを見る] → 宴会コース料金・人数別プランへの誘導
[宴会予約をする] → 予約フォームへの誘導（人数・日時・コース選択）
```

### HTMLテンプレート
```html
<section class="cta-banquet">
  <div class="banquet-header">
    <p class="banquet-tag">🍻 宴会・コース予約</p>
    <h2>歓送迎会・忘新年会のご予約承り中</h2>
    <p class="banquet-sub">2名〜50名まで対応 / 個室・半個室あり</p>
  </div>

  <div class="banquet-plans">
    <div class="plan-card">
      <p class="plan-name">スタンダードコース</p>
      <p class="plan-price">¥3,980〜<span>/人</span></p>
      <p class="plan-desc">料理8品+飲み放題2時間</p>
    </div>
    <div class="plan-card plan-card--recommend">
      <p class="plan-badge">人気</p>
      <p class="plan-name">プレミアムコース</p>
      <p class="plan-price">¥5,980〜<span>/人</span></p>
      <p class="plan-desc">料理12品+飲み放題2.5時間</p>
    </div>
    <div class="plan-card">
      <p class="plan-name">法人・接待コース</p>
      <p class="plan-price">¥8,000〜<span>/人</span></p>
      <p class="plan-desc">個室確約+特選料理</p>
    </div>
  </div>

  <div class="banquet-cta">
    <a href="#banquet-reserve" class="btn btn--banquet">
      宴会プランを予約する →
    </a>
    <a href="tel:0X-XXXX-XXXX" class="btn btn--banquet-tel">
      電話で相談（詳細応相談）
    </a>
  </div>

  <ul class="banquet-notes">
    <li>前日までの予約で席確保 / 当日相談も可能な場合あり</li>
    <li>アレルギー・食事制限はお気軽にご相談ください</li>
    <li>3名以上よりコース割引あり</li>
  </ul>
</section>
```

### スタイル
```css
.cta-banquet {
  background: #1a1a1a;
  color: #fff;
  padding: 64px 24px;
  text-align: center;
}
.banquet-tag {
  font-size: 14px;
  color: #d8a76a;
  letter-spacing: .15em;
  margin-bottom: 12px;
  font-weight: 600;
}
.cta-banquet h2 {
  font-size: clamp(22px, 4vw, 32px);
  margin-bottom: 8px;
}
.banquet-sub { font-size: 14px; color: #aaa; }

.banquet-plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 40px auto 32px;
}
@media (max-width: 767px) {
  .banquet-plans { grid-template-columns: 1fr; }
}
.plan-card {
  background: #2a2a2a;
  border-radius: 12px;
  padding: 24px 16px;
  position: relative;
}
.plan-card--recommend {
  border: 2px solid #d8a76a;
}
.plan-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #d8a76a;
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 14px;
  border-radius: 999px;
}
.plan-name { font-size: 14px; color: #aaa; margin-bottom: 8px; }
.plan-price { font-size: 28px; font-weight: 800; color: #d8a76a; }
.plan-price span { font-size: 14px; color: #aaa; }
.plan-desc { font-size: 13px; color: #888; margin-top: 8px; }

.banquet-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.btn--banquet {
  display: inline-block;
  background: #d8a76a;
  color: #1a1a1a;
  padding: 18px 44px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  transition: opacity .2s;
}
.btn--banquet:hover { opacity: .85; }
.btn--banquet-tel {
  display: inline-block;
  background: transparent;
  border: 2px solid #d8a76a;
  color: #d8a76a;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: .2s;
}
.btn--banquet-tel:hover { background: #d8a76a; color: #1a1a1a; }

.banquet-notes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
}
.banquet-notes li {
  font-size: 13px;
  color: #888;
}
.banquet-notes li::before { content: '※ '; }
```

### 宴会予約フォーム実装仕様（GAP-006対応）

**フォームに必要な項目**（飲食宴会予約の最小セット）:

```html
<!-- 宴会予約フォーム（#banquet-reserve セクション） -->
<section class="section" id="banquet-reserve">
  <div class="container container--narrow">
    <div class="form-header">
      <p class="form-eyebrow">BANQUET RESERVE</p>
      <h2 class="form-title">宴会・コース予約フォーム</h2>
      <p class="form-desc">入力後3営業日以内に確認のご連絡をいたします</p>
    </div>

    <form class="lp-form" action="#" method="post">
      <!-- お名前 -->
      <div class="form-group">
        <label class="form-label" for="b-name">
          お名前（幹事様）<span class="form-required">必須</span>
        </label>
        <input class="form-input" type="text" id="b-name" name="name"
          placeholder="例: 山田 太郎" required>
      </div>

      <!-- 電話番号（宴会は電話必須） -->
      <div class="form-group">
        <label class="form-label" for="b-tel">
          電話番号 <span class="form-required">必須</span>
        </label>
        <input class="form-input" type="tel" id="b-tel" name="tel"
          placeholder="例: 090-1234-5678" required autocomplete="tel">
        <p class="form-hint">確認のご連絡に使用します</p>
      </div>

      <!-- 人数 -->
      <div class="form-group">
        <label class="form-label" for="b-guests">
          ご利用人数 <span class="form-required">必須</span>
        </label>
        <div class="form-select-wrap">
          <select class="form-select" id="b-guests" name="guests" required>
            <option value="" disabled selected>選択してください</option>
            <option value="2-5">2〜5名</option>
            <option value="6-10">6〜10名</option>
            <option value="11-20">11〜20名</option>
            <option value="21-30">21〜30名</option>
            <option value="31+">31名以上</option>
          </select>
        </div>
      </div>

      <!-- 希望コース -->
      <div class="form-group">
        <label class="form-label" for="b-course">
          ご希望コース <span class="form-required">必須</span>
        </label>
        <div class="form-select-wrap">
          <select class="form-select" id="b-course" name="course" required>
            <option value="" disabled selected>選択してください</option>
            <option value="standard">スタンダードコース（¥3,980〜/人）</option>
            <option value="premium">プレミアムコース（¥5,980〜/人）</option>
            <option value="corporate">法人・接待コース（¥8,000〜/人）</option>
            <option value="consult">相談して決めたい</option>
          </select>
        </div>
      </div>

      <!-- 希望日時 -->
      <div class="form-group">
        <label class="form-label" for="b-date">
          ご希望日 <span class="form-required">必須</span>
        </label>
        <input class="form-input" type="date" id="b-date" name="date" required>
      </div>

      <!-- 個室希望 -->
      <div class="form-group">
        <p class="form-label">個室のご希望</p>
        <div class="form-radio-group">
          <label class="form-radio-label">
            <input type="radio" name="private" value="yes"> 個室を希望する
          </label>
          <label class="form-radio-label">
            <input type="radio" name="private" value="no" checked> どちらでも可
          </label>
        </div>
      </div>

      <!-- その他 -->
      <div class="form-group">
        <label class="form-label" for="b-note">
          その他ご要望・アレルギー情報 <span class="form-optional">任意</span>
        </label>
        <textarea class="form-textarea" id="b-note" name="note"
          rows="3" placeholder="アレルギー・お祝いのデコレーション希望など"></textarea>
      </div>

      <!-- プライバシー同意 -->
      <div class="form-group form-group--checkbox">
        <label class="form-checkbox-label">
          <input type="checkbox" name="privacy" required>
          <span class="form-checkbox-text">
            <a href="/privacy" target="_blank" rel="noopener">プライバシーポリシー</a>に同意する
          </span>
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block form-submit">
        宴会予約を申し込む →
      </button>
      <p class="form-assurance">✓ 3営業日以内に確認のご連絡をいたします</p>
    </form>
  </div>
</section>
```

```css
/* ラジオボタングループ */
.form-radio-group { display: flex; gap: 24px; flex-wrap: wrap; }
.form-radio-label {
  display: flex; align-items: center; gap: 8px;
  font-size: 15px; cursor: pointer;
}
.form-radio-label input[type="radio"] {
  width: 18px; height: 18px; accent-color: var(--accent);
}
.form-hint { font-size: 12px; color: var(--text-sub); margin-top: 4px; }
```

**必須項目の根拠**:
- 電話番号：宴会は当日人数変更・キャンセルが多いため電話連絡が必須
- 人数：コース割引・個室割り当ての判断に必要
- 希望コース：事前に見積もりを準備するために必要
- 希望日：仮押さえ可能か確認するために必要

### Learning Reason
**保存理由**: GEN-005飲食LP分析で「宴会専用CTA設計」ありLPは団体予約CVに直結することを確認。忘新年会・歓送迎会シーズンにWeb流入が増える業態では宴会CTAが重要CVポイント。  
**再利用価値**: 居酒屋・焼肉・しゃぶしゃぶ・中華・和食など宴会需要がある全飲食店LP。  
**特に優れている点**: コース料金の事前明示で「価格が心配」という最大障壁を除去し、法人利用者が経費精算できる価格感を担保。  
**他案件への応用先**: 飲食（居酒屋・焼肉・和食）・ホテル宴会・貸し会議室・イベントスペース。

---

## CTA-017: インライン予約カレンダー型CTA（Calendly埋め込み型）

**用途**: LP内にカレンダー予約UIを直接埋め込み、ページ離脱ゼロで予約完了  
**CV率特性**: 外部カレンダーへの遷移がなくCVR向上 / 「今この瞬間」の意欲を逃さない  
**根拠**: BtoB・コンサル・採用LP等で「相談予約の摩擦最小化」が高CVの共通要因

### 設計原則
```
Calendly / TidyCal / Acuity 等の埋め込みウィジェット活用
→ 「空き時間から選ぶだけ」のUXで予約摩擦を最小化
→ 確認メールが自動送信される安心感
```

### HTMLテンプレート（Calendly埋め込み）
```html
<section class="cta-calendar">
  <div class="calendar-header">
    <h3>無料相談の日程を選ぶ</h3>
    <p>所要時間: 30分 / オンライン（Zoom）/ 完全無料</p>
  </div>

  <!-- Calendlyウィジェット埋め込み -->
  <div class="calendly-inline-widget"
    data-url="https://calendly.com/your-account/30min"
    style="min-width:320px;height:700px;">
  </div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

  <!-- Calendly未使用の場合: 日時選択フォーム -->
  <div class="calendar-form-fallback">
    <form action="/reserve" method="POST">
      <div class="form-row">
        <label>ご希望日時（第1希望）</label>
        <input type="datetime-local" name="date1" required>
      </div>
      <div class="form-row">
        <label>ご希望日時（第2希望）</label>
        <input type="datetime-local" name="date2">
      </div>
      <div class="form-row">
        <input type="text" name="name" placeholder="お名前" required>
      </div>
      <div class="form-row">
        <input type="email" name="email" placeholder="メールアドレス" required>
      </div>
      <button type="submit" class="btn btn--calendar">
        予約を確定する
      </button>
    </form>
  </div>
</section>
```

### スタイル
```css
.cta-calendar {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px;
}
.calendar-header {
  text-align: center;
  margin-bottom: 32px;
}
.calendar-header h3 {
  font-size: clamp(20px, 3vw, 28px);
  margin-bottom: 8px;
}
.calendar-header p {
  font-size: 14px;
  color: #666;
}
.btn--calendar {
  width: 100%;
  background: #4a6cf7;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s;
}
.btn--calendar:hover { background: #3555e0; }
```

### 適用業種と配置
| 業種 | テキスト | 配置 |
|-----|--------|------|
| BtoBコンサル | 「無料コンサルを予約する（30分）」 | 最終CTA |
| 採用LP | 「カジュアル面談を予約する」 | FV直下+最終CTA |
| スクール | 「無料カウンセリングを選ぶ」 | 料金セクション後 |
| 士業 | 「初回相談（60分無料）を予約」 | FV+最終CTA |

### Learning Reason
**保存理由**: 高単価・高検討度の商材では「今すぐ申し込む」より「日程を選ぶ」の方がCV摩擦が低い。コンサル・採用・士業で確認。  
**再利用価値**: コンサル・士業・採用・スクール・美容医療・BtoBサービスなど相談予約型CVアクション全般。  
**特に優れている点**: カレンダーUIが「選ぶだけ」のUXを提供し、メール往復の手間をゼロにする。空き時間の可視化で「今すぐ確定できる」安心感を提供。  
**他案件への応用先**: BtoBコンサル・士業事務所・採用LP（カジュアル面談）・スクール（個別相談）・クリニック。

---



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

- 登録CTAパターン数: **17**（2026-06-23 Knowledge Extraction Phase STEP2完了 / 全6ジャンル対応）
- カバー業種: 美容・医療・採用・飲食・スクール・SaaS/BtoB
- Phase 3 育成開始条件: LP辞典100パターン到達後（残り83パターン）
- 最終更新: 2026-06-23（CTA-011〜017 追加 / 全6ジャンル知識抽出完了）

### CTA早引き一覧

| ID | パターン名 | 適用業種 | 特徴 |
|----|----------|---------|------|
| CTA-001 | LINE誘導型 | 美容・サロン・個人 | LINE緑ボタン・タップ率高 |
| CTA-002 | 無料相談型 | 士業・コンサル・BtoB | 熟考型ユーザー向け |
| CTA-003 | 無料体験型 | スクール・SaaS | 低ハードル・ナーチャリング型 |
| CTA-004 | 資料請求型 | BtoB・不動産・教育 | 情報収集段階向け |
| CTA-005 | 応募型 | 採用LP | 低ハードルエントリー |
| CTA-006 | 固定フッターCTA | スマホ全般 | スクロール中も常時表示 |
| CTA-007 | カウントダウン付き | 期間限定オファー | 緊急性・希少性訴求 |
| CTA-008 | ヘッダー強調予約ボタン | 美容・飲食 | ナビ内カラー強調 |
| CTA-009 | WEB予約+LINE 2択 | 美容系標準 | ユーザー好み分散対応 |
| CTA-010 | 来店誘導型 | 飲食（来店型） | 地図+電話の業態最適 |
| CTA-011 | BtoB 3段階フェーズ別 | SaaS・BtoB | 資料DL/デモ/トライアル |
| CTA-012 | 医療系 3チャンネル | クリニック・医療 | Web+LINE+電話の3択 |
| CTA-013 | スクール 2段CTA | スクール・教育 | 無料体験+個別相談 |
| CTA-014 | 採用 低ハードル | 採用全般 | 話だけ/見学だけ型 |
| CTA-015 | インライン資料請求フォーム | SaaS・BtoB | LP離脱ゼロ・入力3項目 |
| CTA-016 | 宴会・法人予約 | 飲食（宴会型） | コース料金明示+団体対応 |
| CTA-017 | インライン予約カレンダー | コンサル・士業・採用 | Calendly埋め込み摩擦ゼロ |
