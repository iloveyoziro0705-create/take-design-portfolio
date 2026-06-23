# 美容系LP テンプレート

**用途**: 美容サロン・エステ・ネイル・まつ毛・ヘアサロン・セルフホワイトニングのLP設計  
**参照パターン**: IND-001 / FV-001〜012 / CTA-001, CTA-008, CTA-009  
**業種タグ**: `#beauty` `#salon` `#aesthetic` `#nail` `#hair`  
**作成日**: 2026-06-23

---

## LP設計フロー（美容系標準）

```
[FV] → [実績・数字] → [メニュー・施術内容] → [Before/After or 口コミ] → [スタッフ紹介]
→ [アクセス・料金] → [FAQ] → [最終CTA]
```

---

## セクション別設計テンプレート

### Section 1: FV（ファーストビュー）

**FVパターン選択ガイド**:
- 新規開業・ブランド構築重視 → FV-009（英語哲学型） or FV-010（差別化施術方式型）
- 日常利用・親近感重視 → FV-012（日常価値訴求型）
- 施術写真ありの場合 → FV-001（フルスクリーン画像型）

```html
<section class="fv">
  <!-- 背景: 施術写真 or サロン内観 -->
  <div class="fv-bg">
    <img src="./images/fv-main.jpg" alt="サロンイメージ">
    <div class="fv-overlay"></div>
  </div>

  <div class="fv-content">
    <!-- タグライン（英語 or 日本語短文） -->
    <p class="fv-tag">Natural Beauty Studio</p>

    <!-- メインコピー -->
    <h1 class="fv-heading">
      あなたの「なりたい」を<br>
      <span class="accent">一番近くで叶える</span>
    </h1>

    <!-- サブコピー -->
    <p class="fv-sub">○○にある完全個室の美容サロン。<br>
    丁寧なカウンセリングで、あなただけの施術を提供します。</p>

    <!-- CTA -->
    <div class="fv-cta">
      <a href="#reserve" class="btn btn-primary btn-lg">
        WEB予約する（24時間受付）
      </a>
      <a href="https://lin.ee/XXXXX" class="btn btn-line">
        LINEで相談する
      </a>
    </div>

    <!-- 実績バッジ -->
    <div class="fv-badges">
      <span class="badge">開業○年</span>
      <span class="badge">累計○○名</span>
      <span class="badge">リピート率○%</span>
    </div>
  </div>
</section>
```

**FVチェックリスト**:
- [ ] サービス内容が3秒で伝わるか
- [ ] 地域名または「完全個室」「マンツーマン」等の差別化が入っているか
- [ ] CTAが2つ（WEB予約 + LINE）あるか
- [ ] 施術写真 or サロン写真が使われているか

---

### Section 2: 実績・信頼ポイント（数字）

```html
<section class="section bg-ivory">
  <div class="container">
    <div class="stats-grid stats-grid--4">
      <div class="stat-item">
        <p class="stat-num">○○<span>名</span></p>
        <p class="stat-label">累計来店数</p>
      </div>
      <div class="stat-item">
        <p class="stat-num">○<span>%</span></p>
        <p class="stat-label">リピート率</p>
      </div>
      <div class="stat-item">
        <p class="stat-num">○<span>年</span></p>
        <p class="stat-label">営業年数</p>
      </div>
      <div class="stat-item">
        <p class="stat-num">4.9<span>/5</span></p>
        <p class="stat-label">お客様満足度</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 3: メニュー・施術内容

**設計ポイント**:
- 3〜4メニューにしぼる（多すぎると迷子になる）
- 「初回限定価格」を必ず明示
- 施術時間・料金・効果を1カードにまとめる

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">MENU</p>
      <h2 class="section-title">施術メニュー</h2>
    </div>

    <div class="grid-3">
      <div class="card menu-card">
        <img src="./images/menu-01.jpg" alt="メニュー名">
        <div class="menu-body">
          <h3>メニュー名</h3>
          <p class="menu-desc">施術内容の説明</p>
          <div class="menu-price">
            <span class="price-normal">通常 ¥XX,XXX</span>
            <span class="price-trial">初回限定 ¥X,XXX</span>
          </div>
          <p class="menu-time">所要時間: ○分</p>
          <a href="#reserve" class="btn btn-secondary">このメニューを予約</a>
        </div>
      </div>
      <!-- 繰り返し -->
    </div>
  </div>
</section>
```

---

### Section 4: お客様の声（口コミ）

**美容系口コミ設計ルール**:
- 実名 or イニシャル+年代（「30代 M様」）
- ビフォーアフター写真があれば最強
- 「来店前の悩み→来店後の変化」の流れで書く
- 星評価（★★★★★）を視覚化する

```html
<section class="section bg-ivory">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">VOICE</p>
      <h2 class="section-title">お客様の声</h2>
    </div>

    <div class="grid-3">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <blockquote class="review-body">
          「以前は○○で悩んでいましたが、通い始めてから○○が変わりました。
          スタッフの方がとても丁寧で安心できます。」
        </blockquote>
        <div class="review-author">
          <img src="./images/avatar-01.jpg" alt="30代 T様">
          <div>
            <p class="review-name">T. 様（30代）</p>
            <p class="review-meta">通院歴 ○ヶ月</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 5: スタッフ紹介

**設計ポイント**:
- 顔写真は必須（親近感・信頼感の最大化）
- 得意メニュー・資格・一言コメントを添える
- 「あなたを担当するのはこの人」という安心感を演出

```html
<section class="section">
  <div class="container container--sm">
    <div class="section-header">
      <p class="section-tag">STAFF</p>
      <h2 class="section-title">担当スタッフ</h2>
    </div>

    <div class="staff-card">
      <img src="./images/staff-01.jpg" alt="スタッフ名" class="staff-photo">
      <div class="staff-info">
        <p class="staff-role">代表 / エステティシャン</p>
        <h3 class="staff-name">山田 花子</h3>
        <p class="staff-career">経歴: ○○スクール卒業 → 都内サロン勤務○年 → 独立</p>
        <p class="staff-message">「一人ひとりの肌と向き合い〜」</p>
        <ul class="staff-certs">
          <li>CIDESCO認定エステティシャン</li>
          <li>日本エステティック協会認定</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### Section 6: アクセス・料金

```html
<section class="section bg-ivory">
  <div class="container">
    <div class="grid-2">
      <!-- 地図埋め込み -->
      <div class="access-map">
        <iframe src="https://www.google.com/maps/embed?pb=..." 
          width="100%" height="360" style="border:0; border-radius:12px;" allowfullscreen loading="lazy"></iframe>
      </div>

      <!-- アクセス情報 -->
      <div class="access-info">
        <h3>アクセス</h3>
        <table class="info-table">
          <tr><th>住所</th><td>○○県○○市〜</td></tr>
          <tr><th>最寄駅</th><td>○○駅 徒歩○分</td></tr>
          <tr><th>営業時間</th><td>10:00〜20:00</td></tr>
          <tr><th>定休日</th><td>毎週○曜日</td></tr>
          <tr><th>電話</th><td><a href="tel:0X-XXXX-XXXX">0X-XXXX-XXXX</a></td></tr>
        </table>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: FAQ

**美容系必須FAQ 5点**:
1. 「初めてでも大丈夫ですか？」（不安解消）
2. 「予約はどうすればいいですか？」（導線案内）
3. 「痛みはありますか？」（施術不安の解消）
4. 「効果はいつ頃から出ますか？」（期待値設定）
5. 「キャンセルはできますか？」（ハードル低下）

---

### Section 8: 最終CTA

```html
<section class="section-final-cta bg-dark">
  <div class="container">
    <div class="cta-context">
      <p class="cta-eyebrow">YOUR BEAUTY JOURNEY</p>
      <h2>あなたの「なりたい」への<br>第一歩を踏み出しませんか</h2>
      <p class="cta-lead">まずはご相談だけでも大歓迎です。</p>
    </div>
    <div class="cta-actions">
      <a href="#reserve" class="btn btn-primary btn-lg">WEB予約する（24時間受付）</a>
      <a href="https://lin.ee/XXXXX" class="btn btn-line">LINEで無料相談</a>
    </div>
    <ul class="cta-guarantees">
      <li>✓ 完全個室 / マンツーマン対応</li>
      <li>✓ しつこい勧誘なし</li>
      <li>✓ 初回カウンセリング無料</li>
    </ul>
  </div>
</section>
```

---

## 美容系デザイントークン

```css
:root {
  /* ラグジュアリー系（標準） */
  --beauty-bg:      #faf7f3;
  --beauty-surface: #ffffff;
  --beauty-text:    #4a403b;
  --beauty-sub:     #7c6f68;
  --beauty-accent:  #c8a56a;
  --beauty-accent2: #e8d5b0;
  --beauty-dark:    #3b2f2a;

  /* ピンク系（若年層向け） */
  --beauty-pink:    #f9a8c9;
  --beauty-pink-lt: #fce8f2;

  /* フォント */
  --beauty-font-h:  'Noto Serif JP', serif;
  --beauty-font-b:  'Noto Sans JP', sans-serif;
  --beauty-font-en: 'Cormorant Garamond', serif;
}
```

---

## よくあるFAILパターン（美容系）

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| FAIL-001 | ヘッダー予約ボタンなし | CTA-008で対処 |
| FAIL-006 | CTA1択（WEB予約のみ） | CTA-009（2択）で対処 |
| 施術内容不明FV | 「何をしているサロンか」わからないFV | FV-010（差別化型）で対処 |
| スタッフ写真なし | 誰が施術するか不明で信頼感ゼロ | 顔出し写真+名前+資格を必ず掲載 |
| 料金非表示 | 「料金はお問い合わせ」で離脱増加 | 初回体験価格を必ずLP内に明示 |
| 口コミ匿名のみ | 「A様」「B様」の匿名口コミ | イニシャル+年代+通院期間で信頼性UP |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
