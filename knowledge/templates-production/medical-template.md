# 医療系LP テンプレート

**用途**: クリニック・整体院・美容医療・歯科・接骨院・鍼灸・皮膚科のLP設計  
**参照パターン**: IND-005 / FV-014, FV-015, FV-016 / CTA-012  
**業種タグ**: `#medical` `#clinic` `#seitai` `#aesthetic-medical` `#dental`  
**作成日**: 2026-06-23

---

## LP設計フロー（医療系標準）

```
[FV（症状共感 or 料金ファースト）] → [こんな症状ありませんか？] → [当院の特徴・治療方針]
→ [施術内容・料金] → [スタッフ・院長紹介] → [患者様の声] → [アクセス] → [FAQ] → [最終CTA]
```

---

## 医療LP特有の薬機法・広告規制ルール

```
⚠️ 医療広告ガイドライン（2018年改正）に基づき以下は原則NG：
× 「○○が治ります」「確実に効果があります」等の断定表現
× 「日本一」「最高」等の最上級表現（根拠がない場合）
× 患者の体験談・ビフォーアフター写真（特定条件下で限定的に可）

○ 使用可能な表現：
○ 「症状が改善された患者様のお声」（体験談は一定条件で可）
○ 「○○に取り組んでいます」「○○を心がけています」
○ 専門医・認定資格の明示
```

---

## セクション別設計テンプレート

### Section 1: FV

**FVパターン選択ガイド**:
- 一般整体・鍼灸・接骨院 → FV-014（症状共感型）
- 美容医療・脱毛・審美歯科 → FV-015（料金ファースト型）
- 専門クリニック（頭痛外来・スポーツ整形等） → FV-016（専門特化タグライン型）

```html
<!-- パターンA: 症状共感型（整体・接骨院向け） -->
<section class="fv fv--medical">
  <div class="fv-bg">
    <img src="./images/fv-clinic.jpg" alt="院内イメージ">
    <div class="fv-overlay"></div>
  </div>

  <div class="fv-content">
    <!-- 症状共感コピー -->
    <div class="symptom-badges">
      <span class="badge badge--symptom">肩こり</span>
      <span class="badge badge--symptom">腰痛</span>
      <span class="badge badge--symptom">頭痛</span>
      <span class="badge badge--symptom">自律神経</span>
    </div>

    <h1 class="fv-heading">
      その不調、<br>
      <span class="accent">もう我慢しなくていい</span>
    </h1>

    <p class="fv-sub">
      ○○市 ○○院は、根本原因から改善を目指す整体院です。<br>
      「どこに行っても良くならない」方こそ、一度ご相談ください。
    </p>

    <div class="fv-cta">
      <a href="#reserve" class="btn btn-medical-primary">
        初回予約はこちら（当日OK）
      </a>
      <p class="fv-cta-note">初回カウンセリング無料 / 予約優先制</p>
    </div>

    <div class="fv-badges fv-badges--trust">
      <span class="badge">開院○年</span>
      <span class="badge">累計○○名</span>
      <span class="badge">駅徒歩○分</span>
    </div>
  </div>
</section>
```

```html
<!-- パターンB: 料金ファースト型（美容医療・脱毛向け） -->
<section class="fv fv--medical-price">
  <div class="fv-content">
    <p class="fv-eyebrow">期間限定キャンペーン</p>
    <h1 class="fv-heading">
      全身脱毛 6回<br>
      <span class="price-highlight">¥79,800〜</span>
    </h1>
    <p class="fv-sub">医療脱毛なのに、この価格。医師常駐・完全個室・○ヶ月保証付き。</p>
    <a href="#reserve" class="btn btn-medical-primary btn-lg">
      無料カウンセリングを予約する
    </a>
  </div>
</section>
```

---

### Section 2: 症状チェックセクション（症状共感型）

```html
<section class="section bg-medical-lt">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">こんな症状でお困りではないですか？</h2>
    </div>

    <div class="symptom-checklist">
      <ul class="check-list">
        <li class="check-item">
          <span class="check-icon">✓</span>
          <span>長年の肩こり・首の痛みが取れない</span>
        </li>
        <li class="check-item">
          <span class="check-icon">✓</span>
          <span>病院に行っても「異常なし」と言われるが辛い</span>
        </li>
        <li class="check-item">
          <span class="check-icon">✓</span>
          <span>薬に頼り続けるのが不安</span>
        </li>
        <!-- 繰り返し（5〜8項目程度） -->
      </ul>
    </div>

    <div class="symptom-solution">
      <p class="solution-bridge">そのお悩み、当院で解決できるかもしれません</p>
    </div>
  </div>
</section>
```

---

### Section 3: 当院の特徴・治療方針

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">FEATURE</p>
      <h2 class="section-title">○○院が選ばれる理由</h2>
    </div>

    <div class="grid-3">
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>根本原因へのアプローチ</h3>
        <p>症状の原因を丁寧に分析し、一人ひとりに合った施術計画を作成します。</p>
      </div>
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>○○資格保有のスペシャリスト</h3>
        <p>○○認定資格を持つスタッフが施術。高い技術力で安心して任せられます。</p>
      </div>
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>通いやすい料金設定</h3>
        <p>初回○○円から。継続してご来院いただけるよう通院プランも用意しています。</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 4: 施術内容・料金

```html
<section class="section bg-gray">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">MENU & PRICE</p>
      <h2 class="section-title">施術内容・料金</h2>
    </div>

    <div class="treatment-list">
      <div class="treatment-item">
        <div class="treatment-info">
          <h4>○○コース</h4>
          <p>○○の症状に特化したコース。初回は問診・検査込み。</p>
          <p class="treatment-time">所要時間: ○分</p>
        </div>
        <div class="treatment-price">
          <p class="price-normal">¥○,○○○</p>
          <p class="price-trial">初回限定 ¥○,○○○</p>
        </div>
      </div>
      <!-- 繰り返し -->
    </div>

    <div class="price-note">
      <p>※ 初回は問診・検査・施術を含む料金です。</p>
      <p>※ 健康保険は適用外です（自由診療）</p>
    </div>
  </div>
</section>
```

---

### Section 5: 院長・スタッフ紹介

```html
<section class="section">
  <div class="container container--sm">
    <div class="section-header">
      <p class="section-tag">STAFF</p>
      <h2 class="section-title">院長・スタッフ紹介</h2>
    </div>

    <div class="doctor-card">
      <img src="./images/doctor-01.jpg" alt="院長 山田太郎" class="doctor-photo">
      <div class="doctor-info">
        <p class="doctor-role">院長 / ○○専門家</p>
        <h3 class="doctor-name">山田 太郎</h3>
        <ul class="doctor-certs">
          <li>○○大学医学部卒業</li>
          <li>○○専門医認定</li>
          <li>○○学会会員</li>
        </ul>
        <blockquote class="doctor-message">
          「患者様の生活の質を改善することを第一に〜」
        </blockquote>
      </div>
    </div>
  </div>
</section>
```

---

### Section 6: 患者様の声

**医療系口コミ薬機法対応**:
- 「○○が治りました」はNG → 「症状が楽になりました」はOK
- 体験談は一定条件下で掲載可（最新の医療広告ガイドラインを確認）

```html
<section class="section bg-ivory">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">VOICE</p>
      <h2 class="section-title">ご来院された方のお声</h2>
      <p class="section-desc">(※ 個人の感想です。効果には個人差があります)</p>
    </div>

    <div class="grid-3">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <blockquote class="review-body">
          「長年悩んでいた肩こりが、数回の施術でかなり楽になりました。
          先生の説明も丁寧で、安心して通えています。」
        </blockquote>
        <div class="review-author">
          <div>
            <p class="review-name">T. 様（40代女性）</p>
            <p class="review-meta">通院期間: ○ヶ月 / お悩み: 肩こり・頭痛</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: アクセス

```html
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="access-map">
        <iframe src="[Google Maps埋め込みURL]"
          width="100%" height="360" style="border:0; border-radius:12px;" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="access-info">
        <table class="info-table">
          <tr><th>院名</th><td>○○院</td></tr>
          <tr><th>住所</th><td>○○県○○市〜</td></tr>
          <tr><th>最寄駅</th><td>○○駅 徒歩○分</td></tr>
          <tr><th>駐車場</th><td>○台分あり（無料）</td></tr>
          <tr><th>診療時間</th><td>
            月〜金: 10:00〜19:00<br>
            土: 10:00〜17:00<br>
            日祝: 定休日
          </td></tr>
          <tr><th>電話</th><td><a href="tel:0X-XXXX-XXXX">0X-XXXX-XXXX</a></td></tr>
        </table>
      </div>
    </div>
  </div>
</section>
```

---

### Section 8: FAQ

**医療系必須FAQ 5点**:
1. 「初めてでも予約できますか？」
2. 「保険は使えますか？」（料金の透明性）
3. 「何回くらい通う必要がありますか？」（通院期間の目安）
4. 「当日予約はできますか？」（来院ハードル低下）
5. 「子ども連れでも大丈夫ですか？」（バリア除去）

---

### Section 9: 最終CTA（3チャンネル型）

```html
<section class="section-final-cta bg-medical-dark">
  <div class="container">
    <div class="cta-context">
      <h2>まずはご相談から</h2>
      <p class="cta-lead">初回カウンセリングは無料です。お気軽にどうぞ。</p>
    </div>

    <!-- CTA-012: 3チャンネル型 -->
    <div class="cta-medical-3ch">
      <div class="ch-grid">
        <a href="#web-booking" class="ch-item ch-web">
          <span class="ch-icon">🗓</span>
          <span class="ch-label">Web予約</span>
          <span class="ch-note">24時間受付</span>
        </a>
        <a href="https://lin.ee/XXXXX" class="ch-item ch-line">
          <span class="ch-icon">💬</span>
          <span class="ch-label">LINE相談</span>
          <span class="ch-note">気軽にご質問を</span>
        </a>
        <a href="tel:0X-XXXX-XXXX" class="ch-item ch-tel">
          <span class="ch-icon">📞</span>
          <span class="ch-label">電話予約</span>
          <span class="ch-note">0X-XXXX-XXXX</span>
        </a>
      </div>
      <p class="cta-assurance">初回カウンセリング無料 / 当日予約対応可</p>
    </div>
  </div>
</section>
```

---

## 医療系デザイントークン

```css
:root {
  /* 整体・ウェルネス系 */
  --med-bg:      #f0fff4;
  --med-surface: #ffffff;
  --med-text:    #1a3a2a;
  --med-accent:  #2eb88a;
  --med-accent2: #06b6d4;

  /* 美容医療系 */
  --aesthetic-bg:     #faf7fb;
  --aesthetic-accent: #9b7fd4;
  --aesthetic-gold:   #c8a56a;

  /* 歯科・口腔系 */
  --dental-accent:  #2563eb;
  --dental-bg:      #f0f7ff;

  /* フォント */
  --med-font-h: 'Noto Serif JP', serif;
  --med-font-b: 'Noto Sans JP', sans-serif;
}
```

---

## よくあるFAILパターン（医療系）

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| 薬機法違反表現 | 「治ります」「効果保証」等の断定 | 薬機法対応表現に修正 |
| 料金完全非表示 | 「要相談」で離脱 | 初回体験価格・コース料金をLP内に明示 |
| 予約方法1択 | 電話のみで若年層が離脱 | CTA-012（3チャンネル）で対処 |
| スタッフ写真なし | 誰が施術するか不安 | 院長・スタッフ顔写真+資格を必ず掲載 |
| アクセス情報不明 | 地図なし・駐車場情報なし | Googleマップ埋め込み+駐車場情報を明記 |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
