# CTAインスピレーション事例集

## 概要
辞典（cta-library.md）に登録するほどではないが、制作時に強く参考になるCTA事例を保存する。
「なぜCVに効くか」を構造的に記録する（感想禁止）。

---

## 記録フォーマット

```
## CTAINS-XXX: [事例タイトル]
**出典**: [案件名 / 分析ID]
**業種タグ**: #XXX #XXX
**LP-Rank**: S / A / B
**参考箇所**: ボタン文言 / 配置 / 周辺要素 / カラー / 形状

### 参考要素
[何が、どのように機能しているかを構造的に記録]

### 適用可能業種
[この要素が転用できる業種リスト]

### 実装メモ
[コード断片・CSS値・文言パターン]
```

---

## 事例一覧

---

## CTAINS-001: 2択CTAによるユーザー誘導分散

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #salon #service  
**LP-Rank**: A  
**参考箇所**: CTA設計（FV・最終CTA）

### 参考要素
- LINEと電話の2択を並置することで、ユーザーの好みに応じた離脱防止
- LINE: 非同期・文字が苦手なユーザー向け
- 電話: 即時解決・高齢層向け
- どちらかの選択でCV成立 → 取りこぼし最小化の構造

### 適用可能業種
美容・クリニック・整骨院・士業・コンサル・採用

### 実装メモ
```html
<div class="cta-group">
  <a href="https://lin.ee/XXXXX" class="btn btn--line">
    LINEで予約する
  </a>
  <a href="tel:0X-XXXX-XXXX" class="btn btn--tel">
    電話で問い合わせ
  </a>
</div>
```
```css
.cta-group { display: flex; gap: 16px; flex-wrap: wrap; }
.btn--line { background: #06c755; color: #fff; }
.btn--tel  { background: transparent; border: 2px solid var(--gold); color: var(--deep); }
```

---

## CTAINS-002: ゴールドシャドウ付きCTAボタン（ラグジュアリー系）

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #premium  
**LP-Rank**: A  
**参考箇所**: CTAボタンのデザイン

### 参考要素
- `box-shadow: 0 8px 24px rgba(200,165,106,.35)` でブランドカラーのシャドウ
- ホバー時に `translateY(-3px)` + シャドウ強化で浮き上がりエフェクト
- ブランドカラーのシャドウはボタンとページの一体感を生み、「安っぽさ」を排除する

### 適用可能業種
美容・ホテル・ジュエリー・ブライダル・高級飲食

### 実装メモ
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #d7b49e, #c8a56a);
  color: #fff;
  padding: 18px 44px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .05em;
  box-shadow: 0 8px 24px rgba(200,165,106,.35);
  transition: transform .25s, box-shadow .25s;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(200,165,106,.5);
}
```

---

## CTAINS-003: ダーク背景上のゴールドCTAボタン（飲食・ラグジュアリー）

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #restaurant #food #luxury #dark-theme  
**LP-Rank**: A  
**参考箇所**: ダーク背景 × CTAカラー対比

### 参考要素
- 背景 `#0f0f0f`（ほぼ黒）に対して `#d8a76a`（ゴールド）ボタンは最大コントラスト
- テキストカラーを `#111`（濃いめの黒）にすることでボタン内の可読性確保
- ホバー時に `#f0c98b`（明るいゴールド）へ変化させて押下フィードバック

### 適用可能業種
飲食（高級）・バー・ホテル・ナイトエンタメ・ダーク系ブランド

### 実装メモ
```css
.btn {
  display: inline-block;
  padding: 16px 36px;
  background: #d8a76a;
  color: #111;
  font-weight: bold;
  border-radius: 999px;
  transition: background .3s, transform .3s;
}
.btn:hover {
  background: #f0c98b;
  transform: translateY(-3px);
}
```

---

## CTAINS-004: 周辺安心テキストによるCVR補強

**出典**: 採用LP全般 / Pattern-LP-003  
**業種タグ**: #recruit #medical #consultation  
**LP-Rank**: A  
**参考箇所**: CTAボタン直下の補足テキスト

### 参考要素
- CTAボタン直下に「✓ 完全無料」「✓ 営業なし」「✓ 〇分で完了」を配置
- 最後の「踏み出す一歩」を阻む不安を、ボタンの直近で解消する
- チェックマーク（✓）が箇条書きより軽く見えてCV摩擦を下げる

### 適用可能業種
採用・医療・コンサル・金融・BtoB・SaaS（全てのCTA周辺に応用可）

### 実装メモ
```html
<div class="cta-block">
  <a href="#form" class="btn-primary">今すぐ無料相談する</a>
  <ul class="cta-reassurance">
    <li>✓ 完全無料・費用一切なし</li>
    <li>✓ しつこい営業は一切しません</li>
    <li>✓ 1分で申込完了</li>
  </ul>
</div>
```
```css
.cta-reassurance {
  list-style: none;
  margin-top: 14px;
  font-size: 13px;
  color: var(--sub);
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}
```

---

## CTAINS-005: ヘッダーナビ内のカラー強調Reserveボタン

**出典**: Invincible Hair MADA / 2026-06-20-mada-beauty-salon.md  
**業種タグ**: #beauty #salon #stylish #minimal  
**LP-Rank**: A（80/100）  
**参考箇所**: ヘッダーCTA設計

### 参考要素
- ナビゲーション内のリンク項目すべてがテキストリンクの中で「Reserve」だけがコーラルカラーのカラーボタン
- ヘッダーが `position: sticky` で固定されているため、スクロール中も常時視界に予約ボタンが存在する
- ボタンの存在がナビ全体のデザインのアクセントカラーとしても機能している（配色の一貫性）
- スマホ固定フッターCTAと組み合わせることで画面の上端・下端の両方に予約を常駐させる二重構造

### 適用可能業種
美容・クリニック・エステ・個人サービス・飲食（予約必須型）・士業・スクール

### 実装メモ
```css
/* ヘッダーナビ — テキストリンク */
nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: .05em;
  padding: 8px 12px;
}
/* 予約ボタンだけカラー強調 */
nav a.nav-reserve {
  background: var(--accent);   /* #e05050 など */
  color: #fff;
  padding: 10px 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: opacity .2s;
}
nav a.nav-reserve:hover { opacity: .85; }

/* ヘッダー固定 */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 rgba(0,0,0,.06);
}
```

---

## CTAINS-006: 多形態雇用形態別エントリーCTA設計

**出典**: LAVA ホットヨガスタジオ 採用LP / 2026-06-22-lava-hotyoga-recruit-lp.md  
**業種タグ**: #recruit #wellness #multitype-employment  
**LP-Rank**: B-（68/100 — GEN-002最高スコア）  
**参考箇所**: CTA設計・雇用形態別分岐設計

### 参考要素
- 正社員（新卒）・正社員（中途）・アルバイト・業務委託・特集求人を独立したCTAボタン+ページで分岐
- 「自分はどこに応募すればいいか」という迷いを解消し、求職者を最適なエントリーページへ誘導
- 各雇用形態に「あなた向けはこちら→」ラベルをつけることで属性マッチング感が生まれてCV率向上
- 単一「エントリーはこちら」ボタンより、雇用形態別CTAはそれぞれのページで属性に最適化した訴求が可能

### 適用可能業種
多形態雇用を常時展開する採用LP全般（飲食チェーン・ウェルネス・教育・小売・介護）

### 実装メモ
```html
<!-- 多形態雇用形態別エントリーCTA -->
<section class="entry-cta">
  <h2>あなたに合った働き方を選んでください</h2>
  <div class="entry-grid">
    <a href="/entry/new-grad" class="entry-card">
      <span class="entry-type">新卒採用</span>
      <span class="entry-label">新卒・第二新卒の方はこちら →</span>
    </a>
    <a href="/entry/mid-career" class="entry-card">
      <span class="entry-type">中途採用</span>
      <span class="entry-label">経験者・キャリア採用の方はこちら →</span>
    </a>
    <a href="/entry/part-time" class="entry-card">
      <span class="entry-type">アルバイト</span>
      <span class="entry-label">パートタイムで働きたい方はこちら →</span>
    </a>
  </div>
</section>
```
```css
.entry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 32px;
}
.entry-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s;
}
.entry-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
}
.entry-type {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
```

---

## 統計

- 登録事例数: 6（採用LP 辞典統合 2026-06-22 時点）
- 最終更新: 2026-06-22（CTAINS-006 追加 / 採用LP辞典統合）
