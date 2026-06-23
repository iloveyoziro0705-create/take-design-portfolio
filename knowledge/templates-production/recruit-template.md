# 採用系LP テンプレート

**用途**: 正社員・パート・アルバイト・業務委託の採用LP設計（福祉・飲食・物流・IT・保育など）  
**参照パターン**: IND-003 / IND-004 / FV-013, FV-017, FV-018, FV-021, FV-027, FV-029 / CTA-005, CTA-014  
**業種タグ**: `#recruit` `#hr` `#nursery` `#care` `#food` `#logistics`  
**作成日**: 2026-06-23

---

## LP設計フロー（採用系標準）

```
[FV（求職者の感情に刺さるコピー）] → [職場の魅力3点] → [スタッフの声]
→ [仕事内容・1日のスケジュール] → [給与・待遇・福利厚生]
→ [職場写真ギャラリー] → [応募方法・選考フロー] → [FAQ] → [最終CTA]
```

---

## セクション別設計テンプレート

### Section 1: FV

**FVパターン選択ガイド**:
- スタッフ写真が揃っている場合 → FV-013（スタッフ顔写真カルーセル型）
- ライフスタイル訴求（フィットネス・サービス業） → FV-017（ライフスタイル型）
- 職人・専門職採用 → FV-018（仕事哲学型）
- ターゲット明示（「転職希望の方へ」） → FV-021（ターゲット明示バッジ型）
- 大企業・グループ採用 → FV-029（対称反復コピー型）

```html
<section class="fv fv--recruit">
  <div class="fv-bg">
    <!-- 職場写真 or スタッフ写真 -->
    <img src="./images/fv-recruit.jpg" alt="職場イメージ">
    <div class="fv-overlay"></div>
  </div>

  <div class="fv-content">
    <!-- ターゲット明示バッジ（オプション） -->
    <div class="fv-badges">
      <span class="badge badge--recruit">○○経験者歓迎</span>
      <span class="badge badge--recruit">未経験OK</span>
    </div>

    <h1 class="fv-heading">
      「働きたい」が見つかる場所が<br>
      <span class="accent">ここにある</span>
    </h1>

    <p class="fv-sub">
      ○○株式会社では現在、○○スタッフを募集しています。<br>
      未経験でも安心の研修制度と、スタッフ思いの職場環境です。
    </p>

    <!-- 採用LP特有: 「まずは話だけ」ハードル最低CTA -->
    <a href="#contact" class="btn btn-primary btn-lg">
      まずは話だけ聞いてみる（無料）
    </a>
    <p class="fv-cta-note">履歴書不要 / しつこい連絡なし</p>
  </div>
</section>
```

**FVチェックリスト**:
- [ ] 「どんな会社・職種」かが3秒で伝わるか
- [ ] 「未経験OK」「○○経験者」等のターゲットが明示されているか
- [ ] CTAが「まずは話だけ」「見学だけでもOK」の低ハードル設計か
- [ ] 履歴書不要・強引な勧誘なし等の安心文言があるか

---

### Section 2: 職場の魅力 3点（Why Here）

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">WHY HERE</p>
      <h2 class="section-title">○○で働く3つの理由</h2>
    </div>

    <div class="grid-3">
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>充実の研修制度</h3>
        <p>未経験でも安心のOJT研修○ヶ月。先輩スタッフが丁寧にサポートします。</p>
      </div>
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>働きやすい環境</h3>
        <p>有給取得率○%、残業月平均○時間以内。家庭との両立もできます。</p>
      </div>
      <div class="card card--feature">
        <div class="card-icon"><!-- アイコン --></div>
        <h3>キャリアアップを支援</h3>
        <p>資格取得支援制度あり。○年で管理職になったスタッフも多数。</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 3: スタッフの声

**採用LP口コミ設計ルール**:
- 実名+顔写真+年齢+職種+入社年数
- 「入社前の不安」→「実際に働いて感じること」の流れ
- 様々な属性（年代・入社経緯）のスタッフを3名以上

```html
<section class="section bg-gray">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">VOICE</p>
      <h2 class="section-title">スタッフの声</h2>
    </div>

    <div class="grid-3">
      <div class="staff-voice-card">
        <img src="./images/staff-01.jpg" alt="田中 花子" class="staff-photo">
        <div class="staff-info">
          <p class="staff-meta">入社○年 / ○○スタッフ</p>
          <p class="staff-name">田中 花子（28歳）</p>
          <blockquote>
            「未経験で不安でしたが、研修が充実していて半年で一人前になれました。
            チームの雰囲気も良く、毎日仕事が楽しいです。」
          </blockquote>
        </div>
      </div>
      <!-- 繰り返し -->
    </div>
  </div>
</section>
```

---

### Section 4: 仕事内容・1日のスケジュール

```html
<section class="section">
  <div class="container container--sm">
    <div class="section-header">
      <p class="section-tag">DAILY</p>
      <h2 class="section-title">1日のスケジュール</h2>
    </div>

    <div class="daily-schedule">
      <div class="schedule-item">
        <p class="schedule-time">09:00</p>
        <div class="schedule-content">
          <h4>出勤・朝礼</h4>
          <p>チームで当日の業務確認。5分程度でスタート。</p>
        </div>
      </div>
      <!-- 繰り返し -->
    </div>
  </div>
</section>
```

---

### Section 5: 給与・待遇・福利厚生

**採用LP料金（給与）設計ルール**:
- 給与レンジは必ず明示（「応相談」は離脱率UP）
- 残業代・交通費・各種手当を明記
- 「月収モデル例」を数字で示す

```html
<section class="section bg-ivory">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">CONDITION</p>
      <h2 class="section-title">給与・待遇</h2>
    </div>

    <div class="conditions-grid">
      <div class="condition-item">
        <h4>給与</h4>
        <p>月給 ○○万円〜○○万円<br>
        <small>※経験・スキルを考慮して決定</small></p>
      </div>
      <div class="condition-item">
        <h4>勤務時間</h4>
        <p>○:○○〜○:○○（実働○時間）<br>シフト制 / 週○日〜相談可</p>
      </div>
      <div class="condition-item">
        <h4>休日・休暇</h4>
        <p>完全週休2日制<br>有給休暇・産育休・夏季・年末年始</p>
      </div>
      <div class="condition-item">
        <h4>福利厚生</h4>
        <p>社会保険完備 / 交通費全額支給<br>資格取得支援 / 制服貸与</p>
      </div>
    </div>

    <!-- モデル月収例 -->
    <div class="model-income">
      <p class="model-label">入社○年目のモデル月収</p>
      <p class="model-num">○○<span>万円</span></p>
      <p class="model-detail">基本給 ○○万 + 各種手当 ○万 + 皆勤手当 ○万</p>
    </div>
  </div>
</section>
```

---

### Section 6: 応募方法・選考フロー

**選考フロー可視化が採用CVに直結**:

```html
<section class="section">
  <div class="container container--sm">
    <div class="section-header">
      <p class="section-tag">HOW TO APPLY</p>
      <h2 class="section-title">応募から入社までの流れ</h2>
    </div>

    <div class="flow-steps">
      <div class="flow-step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h4>応募・相談（LINEまたはフォームから）</h4>
          <p>「まず話を聞きたい」だけでOKです。</p>
        </div>
      </div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h4>職場見学・面談</h4>
          <p>実際の職場を見ていただき、担当者とお話しできます。</p>
        </div>
      </div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h4>採用通知・条件確認</h4>
          <p>面談から○日以内に連絡します。</p>
        </div>
      </div>
      <div class="flow-arrow">↓</div>
      <div class="flow-step">
        <div class="step-num">4</div>
        <div class="step-content">
          <h4>入社・研修スタート</h4>
          <p>丁寧なOJT研修からスタートします。</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: FAQ

**採用系必須FAQ 5点**:
1. 「未経験でも応募できますか？」
2. 「応募後にしつこい連絡は来ますか？」（ハードル低下の核心）
3. 「いつから働けますか？」
4. 「正社員登用の可能性はありますか？」
5. 「研修中の給与はどうなりますか？」

---

### Section 8: 最終CTA（低ハードル設計）

```html
<section class="section-final-cta bg-recruit">
  <div class="container">
    <div class="cta-context">
      <p class="cta-eyebrow">JOIN US</p>
      <h2>まずは、話を聞くだけでOKです</h2>
      <p class="cta-lead">応募する気がなくてもOK。職場の雰囲気だけ見に来てください。</p>
    </div>

    <div class="cta-actions">
      <a href="#contact" class="btn btn-primary btn-lg">
        まずは話だけ聞いてみる
      </a>
      <a href="https://lin.ee/XXXXX" class="btn btn-line">
        LINEで気軽に相談
      </a>
    </div>

    <ul class="cta-guarantees">
      <li>✓ 履歴書・職務経歴書不要</li>
      <li>✓ しつこい連絡・勧誘なし</li>
      <li>✓ 採用担当者が直接対応</li>
    </ul>
  </div>
</section>
```

---

## 採用系デザイントークン

```css
:root {
  /* 標準（オレンジ系） */
  --recruit-bg:      #fff8f2;
  --recruit-accent:  #f97316;
  --recruit-accent2: #fb923c;
  --recruit-dark:    #1a0a00;

  /* 福祉・医療系（グリーン系） */
  --welfare-accent:  #2eb88a;
  --welfare-bg:      #f0fff4;

  /* フォント */
  --recruit-font-h:  'Noto Serif JP', serif;
  --recruit-font-b:  'Noto Sans JP', sans-serif;
}
```

---

## よくあるFAILパターン（採用系）

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| 「今すぐ応募」CTA一択 | 慎重な求職者を全員逃す | CTA-014（低ハードル型）で対処 |
| 給与非表示 | 「要相談」で離脱率60%超 | 給与レンジ+モデル収入を必ず明示 |
| スタッフ写真なし | 職場の雰囲気が伝わらず離脱 | 顔出し写真+名前+職種で信頼感UP |
| 選考フロー不明 | 「応募後どうなるか」が不安で離脱 | 4ステップフロー可視化で安心感 |
| 「強引な勧誘あり」イメージ | 問い合わせ後の不安 | 安心文言（しつこい連絡なし）の明示 |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
