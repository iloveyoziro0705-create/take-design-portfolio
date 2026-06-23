# 飲食系LP テンプレート

**用途**: レストラン・居酒屋・焼肉・ラーメン・カフェ・宴会店舗のLP設計  
**参照パターン**: IND-002 / FV-011, FV-025, FV-026 / CTA-010, CTA-016  
**業種タグ**: `#restaurant` `#food` `#izakaya` `#ramen` `#cafe` `#banquet`  
**作成日**: 2026-06-23

---

## LP設計フロー（飲食系）

### 来店誘導型（予約不要）
```
[FV（料理ドアップ or 感情語コピー）] → [コンセプト・こだわり] → [メニュー紹介]
→ [お客様の声 or メディア掲載] → [店舗情報・アクセス] → [最終CTA（地図+電話）]
```

### 予約誘導型（宴会・コース）
```
[FV] → [宴会プラン・コース一覧] → [個室・設備紹介] → [お客様の声]
→ [アクセス] → [FAQ] → [最終CTA（宴会予約 or ネット予約）]
```

---

## セクション別設計テンプレート

### Section 1: FV

**FVパターン選択ガイド**:
- 高級・老舗 → FV-025（老舗訴求型 / 創業年数×産地）
- カジュアル・感情訴求 → FV-026（感情語コピー型）
- 料理写真あり → FV-011（ドアップ料理写真型）

```html
<!-- パターンA: 老舗・高品質訴求型 -->
<section class="fv fv--restaurant">
  <div class="fv-bg">
    <!-- 料理ドアップ写真が最強 -->
    <img src="./images/fv-dish.jpg" alt="看板メニュー">
    <div class="fv-overlay fv-overlay--light"></div>
  </div>

  <div class="fv-content">
    <p class="fv-eyebrow">創業 ○○年 / ○○産○○使用</p>
    <h1 class="fv-heading">
      素材の声を聞き、<br>
      <span class="accent">料理に命を吹き込む</span>
    </h1>
    <p class="fv-sub">○○の食材と、○○に代々受け継がれてきた技。<br>
    ここにしかない味を、あなたへ。</p>

    <div class="fv-cta">
      <a href="#reserve" class="btn btn-restaurant-primary">
        ご予約はこちら
      </a>
      <a href="tel:0X-XXXX-XXXX" class="btn btn-restaurant-tel">
        📞 0X-XXXX-XXXX
      </a>
    </div>
  </div>
</section>
```

```html
<!-- パターンB: 感情語コピー型（居酒屋・カジュアル） -->
<section class="fv fv--casual">
  <div class="fv-bg">
    <img src="./images/fv-restaurant.jpg" alt="店内イメージ">
    <div class="fv-overlay"></div>
  </div>
  <div class="fv-content">
    <h1 class="fv-heading">
      今夜は、<br>
      <span class="accent">ここで笑おう</span>
    </h1>
    <p class="fv-sub">○○産の食材と、○○年続く秘伝のタレ。<br>
    あの頃の仲間と、また集まりたくなる場所。</p>
    <div class="fv-cta">
      <a href="#menu" class="btn btn-restaurant-primary">メニューを見る</a>
    </div>
  </div>
</section>
```

---

### Section 2: こだわり・コンセプト

**設計ポイント**:
- 食材の産地・生産者名を明示（「どこから来た食材か」）
- 調理の哲学・歴史・シェフの思いを伝える
- 写真は「食材」「調理シーン」「完成料理」の3種類が理想

```html
<section class="section">
  <div class="container">
    <div class="grid-2">
      <img src="./images/concept.jpg" alt="こだわりの食材" class="concept-img">
      <div class="concept-text">
        <p class="section-tag">OUR STORY</p>
        <h2>○○へのこだわり</h2>
        <p>○○産○○を直接農家から仕入れ〜</p>
        <p>創業○年、○○に受け継がれてきた〜</p>
        <!-- 産地・生産者情報 -->
        <div class="producer-info">
          <p class="producer-label">使用食材の主な産地</p>
          <ul class="producer-list">
            <li>○○：○○県○○産（○○農場）</li>
            <li>○○：○○産 朝採れ直送</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 3: メニュー紹介

**飲食メニュー設計ルール**:
- 写真必須（料理写真なしは致命的）
- 看板メニュー3〜4品に絞る（全メニューは載せない）
- 価格は必ず表示（「時価」はNG）
- 「名物」「人気No.1」バッジで注目を集める

```html
<section class="section bg-dark-restaurant">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">MENU</p>
      <h2 class="section-title">人気メニュー</h2>
    </div>

    <div class="menu-grid">
      <div class="menu-card menu-card--hero">
        <!-- 看板メニュー（大きく表示） -->
        <span class="menu-badge">名物</span>
        <img src="./images/menu-01.jpg" alt="名物○○">
        <div class="menu-info">
          <h3>名物○○</h3>
          <p class="menu-desc">○○産○○を使用。○○のタレで仕上げた当店の代名詞。</p>
          <p class="menu-price">¥○,○○○（税込）</p>
        </div>
      </div>

      <div class="menu-sub-grid">
        <div class="menu-card menu-card--sm">
          <span class="menu-badge menu-badge--popular">人気</span>
          <img src="./images/menu-02.jpg" alt="メニュー2">
          <div class="menu-info">
            <h4>メニュー名</h4>
            <p class="menu-price">¥○○○</p>
          </div>
        </div>
        <!-- 繰り返し -->
      </div>
    </div>

    <div class="menu-more">
      <a href="#full-menu" class="btn btn-secondary">全メニューを見る →</a>
    </div>
  </div>
</section>
```

---

### Section 4: 宴会・コース（宴会対応店のみ）

CTA-016（宴会予約CTA）を参照。

```html
<section class="section" id="banquet">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">BANQUET</p>
      <h2 class="section-title">宴会・コースのご案内</h2>
      <p class="section-desc">歓送迎会・忘新年会・懇親会など各種ご宴会承ります</p>
    </div>

    <div class="banquet-capacity">
      <div class="capacity-item">
        <p class="capacity-num">○<span>名</span></p>
        <p class="capacity-label">最大収容人数</p>
      </div>
      <div class="capacity-item">
        <p class="capacity-num">○<span>室</span></p>
        <p class="capacity-label">個室・半個室数</p>
      </div>
    </div>

    <!-- 宴会プラン一覧（CTA-016参照） -->
    <div class="banquet-plans">
      <!-- プランカードは CTA-016 のマークアップを参照 -->
    </div>
  </div>
</section>
```

---

### Section 5: お客様の声・メディア掲載

```html
<section class="section bg-ivory">
  <div class="container">
    <!-- メディア掲載がある場合 -->
    <div class="media-logos">
      <p class="media-label">メディア掲載実績</p>
      <div class="logo-band">
        <img src="./images/media-01.png" alt="○○グルメ掲載">
        <img src="./images/media-02.png" alt="○○雑誌掲載">
      </div>
    </div>

    <!-- 口コミ -->
    <div class="section-header" style="margin-top: 48px">
      <p class="section-tag">REVIEW</p>
      <h2 class="section-title">お客様のお声</h2>
    </div>
    <div class="grid-3">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <blockquote class="review-body">
          「友人の誕生日で利用しました。料理も雰囲気も最高で、また来たいです。」
        </blockquote>
        <div class="review-author">
          <p class="review-name">T. 様（30代）</p>
          <p class="review-meta">友人のお祝いで来店</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 6: アクセス・店舗情報

```html
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="access-map">
        <iframe src="[Google Maps URL]"
          width="100%" height="380" style="border:0; border-radius:12px;" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="access-info">
        <h3>店舗情報</h3>
        <table class="info-table">
          <tr><th>住所</th><td>○○県○○市〜</td></tr>
          <tr><th>最寄駅</th><td>○○駅 徒歩○分</td></tr>
          <tr><th>駐車場</th><td>○台分（無料 or 近隣有料P）</td></tr>
          <tr><th>営業時間</th><td>
            ランチ: 11:30〜14:00<br>
            ディナー: 17:00〜22:00（LO 21:30）
          </td></tr>
          <tr><th>定休日</th><td>毎週○曜日</td></tr>
          <tr><th>電話</th><td><a href="tel:0X-XXXX-XXXX">0X-XXXX-XXXX</a></td></tr>
        </table>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: 最終CTA

**業態別CTA設計（CTA-010参照）**:
- 来店誘導型 → 地図 + 電話の2択
- 予約誘導型 → ネット予約 + 電話の2択
- 宴会対応型 → 宴会予約フォーム + 電話の2択

```html
<!-- 来店誘導型（予約不要） -->
<section class="section-final-cta bg-restaurant-dark">
  <div class="container">
    <div class="cta-context">
      <h2>今夜、来てください</h2>
      <p class="cta-lead">予約不要です。あなたのお越しをお待ちしています。</p>
    </div>
    <div class="cta-visit">
      <a href="https://maps.google.com/?q=[住所]" class="btn btn--map" target="_blank" rel="noopener">
        地図を見る
      </a>
      <a href="tel:0X-XXXX-XXXX" class="btn btn--tel">
        電話で確認する
      </a>
    </div>
    <p class="cta-hours">営業時間: ランチ 11:30〜 / ディナー 17:00〜</p>
  </div>
</section>
```

---

## 飲食系デザイントークン

```css
:root {
  /* 高級・ダーク系（和食・鉄板・焼肉） */
  --rest-dark-bg:     #1a1209;
  --rest-dark-text:   #f5efe5;
  --rest-dark-accent: #d8a76a;
  --rest-dark-sub:    #8a7260;

  /* カジュアル・明るい系（カフェ・イタリアン） */
  --rest-light-bg:    #fdf8f2;
  --rest-light-accent:#c77f3a;

  /* 飲食フォント */
  --rest-font-h: 'Noto Serif JP', serif;
  --rest-font-b: 'Noto Sans JP', sans-serif;
  --rest-font-en: 'Cormorant Garamond', serif;
}
```

---

## よくあるFAILパターン（飲食系）

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| 料理写真なし | テキストのみのメニュー紹介 | 看板メニューの料理写真を必ず用意 |
| 価格「時価」表示 | 予算が読めず離脱 | 価格レンジをLP内に必ず明示 |
| 営業時間不明 | 「今開いているか」わからず来店断念 | 営業時間+定休日をFVまたは固定ヘッダーに |
| 来店型に予約ボタン | 業態ミスマッチで混乱 | CTA-010（来店誘導型）で業態に合ったCTA選択 |
| 産地・こだわり不明 | 差別化がなく価格競争に負ける | 食材産地・生産者名・調理哲学を必ず掲載 |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
