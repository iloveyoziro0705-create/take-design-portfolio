# SaaS・BtoB系LP テンプレート

**用途**: SaaSツール・業務効率化・CRM・HR・会計・プロジェクト管理・BtoBサービスのLP設計  
**参照パターン**: IND-008 / FV-022〜030 / CTA-011, CTA-015 / saas-btob-lp-prompt.md  
**業種タグ**: `#saas` `#btob` `#crm` `#hr` `#project-management` `#accounting`  
**作成日**: 2026-06-23

---

## BtoB LP設計前の必須確認

```
[BtoB設計前チェック]
① 意思決定者は誰か？
   → 担当者（情報収集） + 決裁者（承認）の2層構造
   → 担当者が「社内提案に使える情報」を得られる設計

② CVアクションは3段階か？
   → 初期: 資料DL → 中期: デモ → 最終: トライアル
   → 「お問い合わせ」1択はCTA最大の失敗（FAIL-017）

③ 価格は開示されているか？
   → 「詳細はお問い合わせ」のみ = 稟議書に予算を書けない
   → 必ず料金レンジ or 比較表を掲載（FAIL-016回避）
```

---

## LP設計フロー（SaaS/BtoB標準）

```
[FV（成果数字+UIスクショ）] → [導入企業ロゴ] → [課題共感セクション]
→ [ソリューション提示] → [主要機能（ユーザー視点で説明）] → [競合比較表]
→ [導入事例（三点セット）] → [料金プラン（3段階）] → [セキュリティ・連携]
→ [導入フロー（可視化）] → [FAQ（BtoB必須3点）] → [最終CTA（3段階）]
```

---

## セクション別設計テンプレート

### Section 1: FV

**FVパターン選択ガイド**:
- 標準SaaS → FV-022（成果数字+UIスクショ型）
- プラットフォーム型（メディア・マーケット） → FV-023（規模数字3軸型）
- SMB向け・スモールスタート訴求 → FV-024（Day1導入型）
- AI/Web制作支援 → FV-028（LLMO差別化型）
- 導入実績アピール → FV-030（導入企業ロゴ直下型）

```html
<!-- パターンA: 標準SaaS（成果数字+UIスクショ型） -->
<section class="fv fv--saas">
  <div class="container">
    <div class="fv-grid">
      <!-- 左：コピー+CTA -->
      <div class="fv-copy">
        <p class="fv-tag">プロジェクト管理SaaS</p>
        <h1 class="fv-heading">
          チームの業務工数を<br>
          <span class="accent">平均40%削減する</span>
        </h1>
        <p class="fv-sub">
          ○○は、バラバラだったタスク・連絡・ファイルを1つにまとめ、
          チームの生産性を根本から変えるプロジェクト管理ツールです。
        </p>

        <!-- 3段階CTA -->
        <div class="fv-cta-3">
          <a href="#trial" class="btn btn-primary btn-lg">
            無料トライアルを始める
          </a>
          <a href="#demo" class="btn btn-secondary">
            デモを見る（3分）
          </a>
          <a href="#download" class="btn btn-ghost btn-sm">
            資料をダウンロード
          </a>
        </div>
        <p class="fv-cta-note">クレジットカード不要 / 14日間無料</p>
      </div>

      <!-- 右：UIスクリーンショット -->
      <div class="fv-visual">
        <img src="./images/ui-screenshot.png" alt="ツールUI" class="ui-screenshot">
      </div>
    </div>
  </div>
</section>
```

```css
.fv--saas {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
  padding: 80px 0;
}
.fv-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
@media (max-width: 767px) {
  .fv-grid { grid-template-columns: 1fr; }
}
.fv-heading { color: #fff; }
.fv-sub { color: rgba(255,255,255,.75); }
.fv-tag {
  font-size: 12px;
  color: #93c5fd;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
}
.fv-cta-3 {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.ui-screenshot {
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0,0,0,.5);
  width: 100%;
}
```

---

### Section 2: 導入企業ロゴ（FV直下）

FV-030（導入企業ロゴ直下型）を参照。

```html
<section class="logo-band-section">
  <div class="container">
    <p class="logo-band-label">導入企業実績 ○,○○○社以上</p>
    <div class="logo-band">
      <img src="./images/logo-company-a.png" alt="○○株式会社">
      <img src="./images/logo-company-b.png" alt="△△株式会社">
      <!-- 上場企業・有名企業ロゴが特に効果的 -->
    </div>
  </div>
</section>
```

---

### Section 3: 課題共感セクション

```html
<section class="section bg-gray">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">こんな課題を抱えていませんか？</h2>
    </div>

    <div class="problem-grid">
      <div class="problem-item">
        <span class="problem-icon">😤</span>
        <p>「誰が何の作業をしているか、把握できていない」</p>
      </div>
      <div class="problem-item">
        <span class="problem-icon">📧</span>
        <p>「メール・チャット・スプレッドシートが乱立して情報が分散する」</p>
      </div>
      <div class="problem-item">
        <span class="problem-icon">⏰</span>
        <p>「進捗確認のための会議が多く、本来の仕事に集中できない」</p>
      </div>
      <div class="problem-item">
        <span class="problem-icon">📊</span>
        <p>「レポート作成に毎月○時間以上かかっている」</p>
      </div>
    </div>

    <div class="problem-solution">
      <p class="solution-bridge">これらの課題を、○○が解決します</p>
    </div>
  </div>
</section>
```

---

### Section 4: 主要機能（ユーザー視点で説明）

**機能訴求の黄金ルール**:
- × 悪い: 「リアルタイムダッシュボード機能搭載」
- ○ 良い: 「現場の進捗をリアルタイムで把握できる」（ユーザー視点の便益）

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">FEATURE</p>
      <h2 class="section-title">主要機能</h2>
    </div>

    <!-- 機能: 左右交互レイアウト -->
    <div class="feature-block">
      <div class="feature-visual">
        <img src="./images/feature-01.png" alt="機能1のスクリーンショット">
      </div>
      <div class="feature-copy">
        <p class="feature-num">01</p>
        <h3>現場の進捗をリアルタイムで把握できる</h3>
        <p>タスクの進捗・担当者・期日が1画面で確認できます。
        「誰が詰まっているか」が即座にわかるので、対応が早くなります。</p>
        <ul class="feature-points">
          <li>ガントチャート表示</li>
          <li>メンバー別稼働状況</li>
          <li>アラート通知機能</li>
        </ul>
      </div>
    </div>

    <div class="feature-block feature-block--reverse">
      <div class="feature-visual">
        <img src="./images/feature-02.png" alt="機能2のスクリーンショット">
      </div>
      <div class="feature-copy">
        <p class="feature-num">02</p>
        <h3>ツールの学習コストがほぼゼロ</h3>
        <p>直感的なUIで、ITに不慣れなメンバーでも初日から使いこなせます。
        平均的な学習時間は○分です。</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 5: 競合比較表

```html
<section class="section bg-gray">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">他サービスと比較する</h2>
    </div>

    <!-- Design System > 比較表コンポーネント参照 -->
    <div class="comparison-table-wrap">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>比較項目</th>
            <th class="self">○○（当社）</th>
            <th>競合A</th>
            <th>競合B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>初期費用</td>
            <td class="self">¥0</td>
            <td>¥50,000〜</td>
            <td>¥30,000〜</td>
          </tr>
          <tr>
            <td>料金透明性</td>
            <td class="self"><span class="check">✓</span> 明示</td>
            <td><span class="cross">✗</span> 要相談</td>
            <td><span class="check check--gray">✓</span> 一部</td>
          </tr>
          <tr>
            <td>日本語サポート</td>
            <td class="self"><span class="check">✓</span> 専任担当</td>
            <td><span class="check check--gray">✓</span> メールのみ</td>
            <td><span class="cross">✗</span> なし</td>
          </tr>
          <tr>
            <td>無料トライアル</td>
            <td class="self"><span class="check">✓</span> 14日間</td>
            <td><span class="check check--gray">✓</span> 7日間</td>
            <td><span class="cross">✗</span> なし</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

---

### Section 6: 導入事例（BtoB三点セット）

**導入事例の三点セット（必須）**:
```
企業名（実名）+ 業種・規模 + 成果数字（「工数40%削減」等）
→ 三点すべて揃って初めて信頼性が生まれる
→ 「A社様」等の匿名事例は信頼性ほぼゼロ
```

```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">CASE STUDY</p>
      <h2 class="section-title">導入事例</h2>
    </div>

    <div class="grid-3">
      <div class="case-card">
        <div class="case-header">
          <img src="./images/logo-case-01.png" alt="○○株式会社ロゴ" class="case-logo">
          <div>
            <p class="case-company">○○株式会社</p>
            <p class="case-meta">製造業 / 従業員○○名</p>
          </div>
        </div>
        <div class="case-result">
          <p class="case-result-num">工数 <span>40%</span> 削減</p>
        </div>
        <blockquote class="case-voice">
          「導入前は○○に週○時間かかっていましたが、
          現在は○時間に短縮されました。チーム全体の生産性が上がっています。」
        </blockquote>
        <p class="case-person">営業部 部長 田中 様</p>
        <a href="#case-detail" class="case-link">詳細を見る →</a>
      </div>
    </div>
  </div>
</section>
```

---

### Section 7: 料金プラン（3段階）

Design Systemの料金プラン比較表（3段プラン）を参照。

```html
<section class="section bg-gray" id="pricing">
  <div class="container">
    <div class="section-header">
      <p class="section-tag">PRICING</p>
      <h2 class="section-title">料金プラン</h2>
      <p class="section-desc">
        <a href="#" class="toggle-billing">月払い</a> / 
        <a href="#" class="toggle-billing toggle-billing--active">年払い（20%OFF）</a>
      </p>
    </div>

    <!-- Design System > 料金プラン比較表参照 -->
    <div class="pricing-grid">
      <!-- Starter / Pro（おすすめ）/ Enterprise の3プラン -->
    </div>

    <p class="pricing-note">
      ※ 全プランに無料トライアル14日間付き（CC不要）<br>
      ※ Enterpriseプランの詳細はお問い合わせください
    </p>
  </div>
</section>
```

---

### Section 8: セキュリティ・連携

```html
<section class="section">
  <div class="container">
    <div class="grid-2">
      <!-- セキュリティ -->
      <div>
        <h3>セキュリティ</h3>
        <div class="security-badges">
          <div class="security-badge">
            <img src="./images/iso27001.png" alt="ISO27001">
            <p>ISO27001取得</p>
          </div>
          <div class="security-badge">
            <img src="./images/privacy-mark.png" alt="プライバシーマーク">
            <p>プライバシーマーク</p>
          </div>
        </div>
        <ul class="security-points">
          <li>通信: SSL/TLS暗号化</li>
          <li>バックアップ: 日次自動バックアップ</li>
          <li>データ保管: 国内サーバー（AWS東京リージョン）</li>
        </ul>
      </div>

      <!-- 連携 -->
      <div>
        <h3>主要ツールとの連携</h3>
        <div class="integrations-grid">
          <div class="integration-item">
            <img src="./images/slack-logo.png" alt="Slack">
            <p>Slack</p>
          </div>
          <div class="integration-item">
            <img src="./images/google-logo.png" alt="Google Workspace">
            <p>Google</p>
          </div>
          <div class="integration-item">
            <img src="./images/salesforce-logo.png" alt="Salesforce">
            <p>Salesforce</p>
          </div>
          <div class="integration-item">
            <img src="./images/kintone-logo.png" alt="kintone">
            <p>kintone</p>
          </div>
        </div>
        <p><a href="#integrations">全○種の連携ツールを見る →</a></p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 9: 導入フロー

```html
<section class="section bg-gray">
  <div class="container container--sm">
    <div class="section-header">
      <h2 class="section-title">導入から運用開始まで</h2>
      <p class="section-desc">最短○日で本番稼働。IT担当者がいなくても大丈夫です。</p>
    </div>

    <div class="flow-steps flow-steps--horizontal">
      <div class="flow-step">
        <div class="step-num">1</div>
        <h4>申込・アカウント作成</h4>
        <p>メールアドレスだけで即日開始</p>
        <p class="step-time">所要時間: ○分</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <div class="step-num">2</div>
        <h4>初期設定</h4>
        <p>ウィザードに従うだけで完了</p>
        <p class="step-time">所要時間: ○〜○時間</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <div class="step-num">3</div>
        <h4>チーム招待</h4>
        <p>メールを送るだけでメンバー追加</p>
        <p class="step-time">所要時間: ○分</p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step">
        <div class="step-num">4</div>
        <h4>運用開始</h4>
        <p>Day1から使いこなせる</p>
      </div>
    </div>
  </div>
</section>
```

---

### Section 10: FAQ（BtoB必須3点+α）

**BtoB必須FAQ 3点**（Design System > FAQ参照）:
1. 「セキュリティはどうなっていますか？」
2. 「既存ツールと連携できますか？」
3. 「導入後のサポート体制はどうなっていますか？」

**追加FAQ（BtoB系共通）**:
4. 「トライアル期間中に解約できますか？」
5. 「請求書払い・銀行振込に対応していますか？」（稟議対応）
6. 「複数拠点・グループ企業での利用は可能ですか？」

---

### Section 11: 最終CTA（3段階型）

CTA-011（BtoB 3段階フェーズ別CTA）を参照。

```html
<section class="section-final-cta bg-saas-dark">
  <div class="container">
    <div class="cta-context">
      <h2>あなたのチームの生産性を変える</h2>
      <p class="cta-lead">今日から14日間、無料でお試しいただけます。</p>
    </div>

    <!-- CTA-011: 3段階フェーズ別CTA -->
    <div class="cta-3stage">
      <div class="cta-stage cta-stage--doc">
        <p class="stage-label">まずは情報収集</p>
        <a href="#download" class="btn btn--outline">
          資料をダウンロード（無料）
        </a>
        <p class="stage-note">1分 / 社内共有用PDF</p>
      </div>
      <div class="cta-stage cta-stage--demo">
        <p class="stage-label">機能を確認したい</p>
        <a href="#demo" class="btn btn--demo">
          デモを見る（3分）
        </a>
        <p class="stage-note">実際の操作画面をご確認</p>
      </div>
      <div class="cta-stage cta-stage--trial">
        <p class="stage-label">導入を検討中</p>
        <a href="#trial" class="btn btn--primary">
          無料トライアルを始める
        </a>
        <p class="stage-note">CC不要 / 14日間無料</p>
      </div>
    </div>
  </div>
</section>
```

---

## SaaS系デザイントークン

```css
:root {
  /* 標準テック系（ダークブルー） */
  --saas-bg:      #0f172a;
  --saas-surface: #1e293b;
  --saas-text:    #e2e8f0;
  --saas-sub:     #94a3b8;
  --saas-accent:  #4a6cf7;
  --saas-accent2: #0ea5e9;

  /* ライト系（SMB・親しみやすい） */
  --saas-light-bg:     #f8fafc;
  --saas-light-accent: #4a6cf7;

  /* フォント */
  --saas-font-h: 'Inter', 'Noto Sans JP', sans-serif;
  --saas-font-b: 'Noto Sans JP', sans-serif;
}
```

---

## よくあるFAILパターン（SaaS/BtoB系）

Design System、saas-btob-lp-prompt.mdのFAILパターン表を参照。

| FAILパターン | 内容 | 対処 |
|-----------|------|------|
| FAIL-016 | 価格完全非開示（稟議ブロック型） | 3段階料金プランをLP内に必ず掲載 |
| FAIL-017 | CTA一本化（お問い合わせのみ） | CTA-011（3段階フェーズ別CTA）で対処 |
| コンセプトFV型 | 英語コピーのみで「何ができるか」不明 | FV-022（成果数字+UIスクショ型）で対処 |
| UIスクショなし | ツール画面が見えず「使う気がしない」 | FVにUIスクリーンショット必須 |
| 機能技術用語羅列 | エンジニア向け説明で担当者に伝わらない | ユーザー視点の便益説明に書き換え |
| 匿名事例のみ | 「A社様」で信頼性ゼロ | 実名+業種+成果数字の三点セット必須 |
| BtoB必須FAQ欠如 | セキュリティ/連携/サポートが未回答 | FAQ 6点（必須3+追加3）を設置 |

---

## 更新履歴

| 日付 | 変更内容 |
|------|---------|
| 2026-06-23 | 初版作成。Knowledge Extraction Phase STEP5として全6ジャンル同時整備。 |
