# スクール系LP テンプレート

**用途**: デザインスクール・AIスクール・語学・資格・転職支援スクールのLP設計  
**参照パターン**: IND-006 / FV-019, FV-020, FV-021 / CTA-003, CTA-013  
**業種タグ**: `#school` `#education` `#design-school` `#ai-school` `#career`  
**作成日**: 2026-06-23

---

## LP設計フロー（スクール系標準）

```
[FV（受講後成果 or ターゲット明示）] → [こんな人に向けています] → [受講後の変化（Before/After）]
→ [カリキュラム・コース内容] → [卒業生実績・受講生の声] → [講師紹介]
→ [料金プラン] → [よくある質問] → [最終CTA（無料体験+個別相談）]
```

---

## セクション別設計テンプレート

### Section 1: FV

**FVパターン選択ガイド**:
- 転職・キャリアチェンジ系 → FV-019（受講後成果数字型）
- マルチコース（デザイン/マーケ/AI）→ FV-020（4職種タグ付き写真型）
- ターゲット絞り込み（「副業希望者へ」）→ FV-021（ターゲット明示バッジ型）

```html
<!-- パターンA: 受講後成果数字型 -->
<section class="fv fv--school">
  <div class="fv-bg fv-bg--gradient">
    <!-- グラデーション背景 + 受講生写真 -->
  </div>
  <div class="fv-content">
    <!-- ターゲット明示バッジ -->
    <div class="fv-badges">
      <span class="badge badge--target">未経験から</span>
      <span class="badge badge--target">副業・転職志望</span>
    </div>

    <h1 class="fv-heading">
      ○ヶ月で、<br>
      <span class="accent">○○スキルを身につける</span>
    </h1>

    <!-- 成果数字バー -->
    <div class="outcome-bar">
      <div class="outcome-item">
        <p class="outcome-num">○<span>%</span></p>
        <p class="outcome-label">転職成功率</p>
      </div>
      <div class="outcome-item">
        <p class="outcome-num">○<span>万円</span></p>
        <p class="outcome-label">平均年収UP</p>
      </div>
      <div class="outcome-item">
        <p class="outcome-num">○<span>ヶ月</span></p>
        <p class="outcome-label">未経験から習得</p>
      </div>
    </div>

    <div class="fv-cta">
      <a href="#trial" class="btn btn-school-primary btn-lg">
        無料体験に参加する
      </a>
      <a href="#counseling" class="btn btn-school-outline">
        まず無料相談してみる →
      </a>
    </div>
    <p class="fv-cta-note">参加費無料 / オンライン参加OK</p>
  </div>
</section>
```

```html
<!-- パターンB: マルチコース・職種タグ型 -->
<section class="fv fv--school-multi">
  <div class="fv-content">
    <h1 class="fv-heading">
      なりたい自分を<br>
      <span class="accent">選んで学ぶ</span>
    </h1>
    <!-- 職種タグ -->
    <div class="course-tags">
      <a href="#design" class="course-tag">
        <img src="./images/icon-design.svg" alt="デザイン">
        デザイン
      </a>
      <a href="#web" class="course-tag">
        <img src="./images/icon-web.svg" alt="Web開発">
        Web開発
      </a>
      <a href="#marketing" class="course-tag">
        <img src="./images/icon-marketing.svg" alt="マーケ">
        マーケ
      </a>
      <a href="#ai" class="course-tag">
        <img src="./images/icon-ai.svg" alt="AI活用">
        AI活用
      </a>
    </div>
    <a href="#trial" class="btn btn-school-primary btn-lg">無料体験を予約する</a>
  </div>
</section>
```

---

### Section 2: こんな方に向けています（ターゲット共感）

```html
<section class="section bg-school-lt">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">こんな方にぴったりです</h2>
    </div>

    <div class="target-list">
      <div class="target-item">
        <span class="target-icon">🙋</span>
        <p>「○○をやってみたいけど、何から始めればいいかわからない」</p>
      </div>
      <div class="target-item">
        <span class="target-icon">🙋</span>
        <p>「副業で月○万円稼いでみたい」</p>
      </div>
      <div class="target-item">
        <span class="target-icon">🙋</span>
        <p>「今の仕事に不満があって、キャリアチェンジを考えている」</p>
      </div>
      <div class="target-item">
        <span class="target-icon">🙋</span>
        <p>「独学では続けられない。仲間と一緒に学びたい」</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 3: 受講後の変化（Before/After）

**スクール系最強訴求コンテンツ**:

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">RESULT</p>
      <h2 class="section-title">受講前・受講後の変化</h2>
    </div>

    <div class="before-after">
      <div class="ba-side ba-before">
        <p class="ba-label ba-label--before">受講前</p>
        <ul class="ba-list">
          <li>○○スキルがゼロ</li>
          <li>副業収入が月○万円</li>
          <li>転職活動が進まない</li>
          <li>独学で挫折した</li>
        </ul>
      </div>

      <div class="ba-arrow">→</div>

      <div class="ba-side ba-after">
        <p class="ba-label ba-label--after">受講後</p>
        <ul class="ba-list ba-list--after">
          <li>○○を使った実案件を受注</li>
          <li>副業で月○〜○万円を安定して稼ぐ</li>
          <li>○○職への転職に成功</li>
          <li>○ヶ月でポートフォリオ完成</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### Section 4: カリキュラム

```html
<section class="section bg-gray">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">CURRICULUM</p>
      <h2 class="section-title">カリキュラム</h2>
    </div>

    <div class="curriculum-timeline">
      <div class="curriculum-phase">
        <p class="phase-label">PHASE 1（1〜○週）</p>
        <h4>○○の基礎を学ぶ</h4>
        <ul class="curriculum-topics">
          <li>○○ツールの基本操作</li>
          <li>○○の基礎知識</li>
        </ul>
      </div>
      <div class="curriculum-arrow">↓</div>
      <div class="curriculum-phase">
        <p class="phase-label">PHASE 2（○〜○週）</p>
        <h4>実践・制作演習</h4>
        <ul class="curriculum-topics">
          <li>実案件を想定した演習</li>
          <li>フィードバックを受けながら改善</li>
        </ul>
      </div>
      <div class="curriculum-arrow">↓</div>
      <div class="curriculum-phase">
        <p class="phase-label">PHASE 3（○〜○週）</p>
        <h4>ポートフォリオ・就転職準備</h4>
        <ul class="curriculum-topics">
          <li>ポートフォリオ作成</li>
          <li>面接対策・就転職支援</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

### Section 5: 卒業生実績・受講生の声

```html
<section class="section">
  <div class="container">
    <!-- 数字実績 -->
    <div class="stats-grid">
      <div class="stat-item">
        <p class="stat-num">○○<span>名</span></p>
        <p class="stat-label">累計受講生数</p>
      </div>
      <div class="stat-item">
        <p class="stat-num">○<span>%</span></p>
        <p class="stat-label">転職成功率（希望者）</p>
      </div>
      <div class="stat-item">
        <p class="stat-num">○<span>万円</span></p>
        <p class="stat-label">受講生平均副業収入</p>
      </div>
    </div>

    <!-- 受講生の声 -->
    <div class="section-header" style="margin-top: 64px">
      <p class="section-tag">VOICE</p>
      <h2 class="section-title">受講生の声</h2>
    </div>
    <div class="grid-3">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <blockquote class="review-body">
          「未経験からたった○ヶ月でポートフォリオが完成し、
          目標だった○○職への転職ができました。
          講師のフィードバックが的確で成長を実感できました。」
        </blockquote>
        <div class="review-author">
          <img src="./images/avatar-01.jpg" alt="田中様" class="review-avatar">
          <div>
            <p class="review-name">田中 様（28歳）</p>
            <p class="review-meta">元○○職 → ○○職に転職成功</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 6: 講師紹介

```html
<section class="section bg-ivory">
  <div class="container container--sm">
    <div class="section-header">
      <p class="section-tag">INSTRUCTOR</p>
      <h2 class="section-title">講師紹介</h2>
    </div>

    <div class="instructor-card">
      <img src="./images/instructor-01.jpg" alt="山田 花子 講師" class="instructor-photo">
      <div class="instructor-info">
        <p class="instructor-role">○○コース メイン講師</p>
        <h3 class="instructor-name">山田 花子</h3>
        <ul class="instructor-career">
          <li>○○大学卒業後、大手○○企業でXX年勤務</li>
          <li>独立後、○○の案件を○件以上担当</li>
          <li>○○資格保有</li>
        </ul>
        <blockquote class="instructor-message">
          「スキルを学ぶことより、それを使って人生を変えることを大切にしています。〜」
        </blockquote>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: 料金プラン

**スクール料金設計ルール**:
- 複数プラン（コース期間別・サポート内容別）を比較できる形式
- 分割払い・奨学金・補助金情報を明記
- 「無料体験後に判断できる」を強調

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">PRICE</p>
      <h2 class="section-title">受講料金</h2>
    </div>

    <div class="pricing-grid">
      <div class="pricing-card">
        <p class="plan-name">スタンダードプラン</p>
        <p class="plan-price">¥○○○,○○○<span></span></p>
        <ul class="plan-features">
          <li>○ヶ月間受講</li>
          <li>週○回グループ授業</li>
          <li>課題フィードバック</li>
          <li class="disabled">転職サポート</li>
          <li class="disabled">就転職保証</li>
        </ul>
        <a href="#trial" class="btn btn-secondary">まず体験する</a>
      </div>

      <div class="pricing-card pricing-card--recommend">
        <p class="recommend-badge">人気No.1</p>
        <p class="plan-name">転職保証プラン</p>
        <p class="plan-price">¥○○○,○○○<span></span></p>
        <ul class="plan-features">
          <li>○ヶ月間受講</li>
          <li>週○回個別メンタリング</li>
          <li>課題フィードバック</li>
          <li>転職サポート（書類・面接）</li>
          <li>転職できなければ全額返金</li>
        </ul>
        <a href="#trial" class="btn btn-primary">無料体験を予約する</a>
      </div>
    </div>

    <div class="price-notes">
      <p>✓ 分割払い可（○回まで無金利）</p>
      <p>✓ 教育訓練給付金対象コースあり（最大○%補助）</p>
      <p>✓ 無料体験を受けてから判断できます</p>
    </div>
  </div>
</section>
```

---

### Section 8: FAQ

**スクール系必須FAQ 5点**:
1. 「未経験でも本当についていけますか？」
2. 「仕事や育児と両立できますか？（受講形式）」
3. 「途中でやめたら返金されますか？」
4. 「就転職後も学び続けられますか？」
5. 「パソコンは何が必要ですか？」

---

### Section 9: 最終CTA（2段階型）

CTA-013（スクール系フェーズ別2段CTA）を参照。

```html
<section class="section-final-cta bg-school-dark">
  <div class="container">
    <div class="cta-context">
      <p class="cta-eyebrow">FIRST STEP</p>
      <h2>まずは、無料体験から始めよう</h2>
      <p class="cta-lead">次の開催日: ○月○日（土）14:00〜 / オンライン</p>
    </div>

    <div class="cta-school">
      <div class="school-cta-main">
        <a href="#trial" class="btn btn--school-primary">
          無料体験に参加する（参加費0円）
        </a>
        <ul class="school-cta-notes">
          <li>申込み2分 / オンライン参加OK</li>
          <li>しつこい勧誘なし・入会強制なし</li>
          <li>定員○名（先着順）</li>
        </ul>
      </div>
      <div class="school-cta-sub">
        <p class="sub-label">まず話を聞きたい方</p>
        <a href="#counseling" class="btn btn--school-outline">
          無料カウンセリングを予約する →
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## スクール系デザイントークン

```css
:root {
  /* スタンダード（パープル系） */
  --school-bg:      #f8f5ff;
  --school-accent:  #6366f1;
  --school-accent2: #8b5cf6;
  --school-dark:    #1e1b4b;

  /* IT・AI系（ダークブルー） */
  --ai-bg:     #0f1523;
  --ai-accent: #00d2ff;
  --ai-green:  #00e676;

  /* フォント */
  --school-font-h: 'Noto Sans JP', sans-serif;
  --school-font-b: 'Noto Sans JP', sans-serif;
  --school-font-en: 'Poppins', sans-serif;
}
```

---

## よくあるFAILパターン（スクール系）

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| 成果数字なしFV | 「なんとなく良さそう」で終わる | FV-019（受講後成果数字型）で対処 |
| 「今すぐ申し込む」CTA | ハードルが高く初期層を逃す | CTA-013（無料体験+個別相談の2段）で対処 |
| 料金のみ表示、価値非明示 | 高額に見えてリターンが不明 | Before/Afterと成果数字で価値先出し |
| 卒業生の声が匿名 | 「本当?」と疑われ信頼性ゼロ | 実名+写真+転職先+年齢で信頼性UP |
| 返金ポリシー不明 | 「損したら？」という不安で離脱 | 全額返金保証の条件を明記 |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
