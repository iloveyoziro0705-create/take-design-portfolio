# レイアウトインスピレーション事例集

## 概要
辞典に登録するほどではないが、制作時に強く参考になるレイアウト事例を保存する。
グリッド・セクション構成・視線誘導の優れた実装を記録する。

---

## 記録フォーマット

```
## LAYINS-XXX: [事例タイトル]
**出典**: [案件名 / 分析ID]
**業種タグ**: #XXX #XXX
**LP-Rank**: S / A / B
**参考箇所**: グリッド / セクション間隔 / コンテナ幅 / 分割レイアウト 等

### 参考要素
[何が、どのように機能しているかを構造的に記録]

### 適用可能業種
[この要素が転用できる業種リスト]

### 実装メモ
[コード断片・CSS値]
```

---

## 事例一覧

---

## LAYINS-001: min()を使ったレスポンシブコンテナ

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: コンテナ幅設計

### 参考要素
- `width: min(1140px, 90%)` で最大幅とモバイル余白を1行で制御
- 大画面では1140px固定、スマホでは画面幅の90%を使用
- `margin: 0 auto` で常に中央配置
- メディアクエリ不要で全デバイスに対応

### 適用可能業種
全業種共通

### 実装メモ
```css
/* 標準コンテナ */
.container     { width: min(1140px, 90%); margin: 0 auto; }
/* 狭いコンテナ（テキスト中心ページ）*/
.container--sm { width: min(800px, 90%); margin: 0 auto; }
/* 広いコンテナ（ギャラリー等）*/
.container--lg { width: min(1280px, 92%); margin: 0 auto; }
/* フル幅（ヒーロー等）*/
.container--full { width: 100%; padding: 0 6%; }
```

---

## LAYINS-002: セクション縦余白の統一による視覚リズム

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: セクション間隔設計

### 参考要素
- 全セクションに `padding: 120px 0` を統一することで縦方向のリズムが生まれる
- セクション間の均等な間隔が「整然とした」印象を作る
- CSSカスタムプロパティで管理することで変更が容易

### 適用可能業種
全業種共通（高級系は120px以上、カジュアル系は80〜96px）

### 実装メモ
```css
:root {
  --section-py: 120px;  /* ラグジュアリー系 */
  --section-py: 96px;   /* 標準系 */
  --section-py: 72px;   /* コンパクト系 */
}
.section { padding: var(--section-py) 0; }

/* 業種別セクションpadding推奨値 */
/* 美容・ホテル・ブライダル: 120px */
/* コーポレート・BtoB:      96px */
/* 採用・医療・教育:        80px */
/* SaaS・テック:            72px */
```

---

## LAYINS-003: 実績数字の区切り線グリッドレイアウト

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #medical #saas #recruit  
**LP-Rank**: A  
**参考箇所**: 実績セクションのレイアウト

### 参考要素
- 3〜4項目の実績数字をグリッドに並べ、隣接する辺を共有の1px線で区切る
- `gap: 1px; background: var(--soft)` + 各アイテムに `background: var(--surface)` で区切り線を表現
- セルの枠線を直接指定しないため、レスポンシブ時に自動的に調整される

### 適用可能業種
全業種（実績・数字・統計を持つサービス全般）

### 実装メモ
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e8ddd7; /* 区切り線の色 */
  border-radius: 24px;
  overflow: hidden;
}
.stat-item {
  background: #fff;
  padding: 40px 24px;
  text-align: center;
}
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); } /* 3項目はそのまま */
  /* 4項目の場合は2+2に変える */
}
```

---

## LAYINS-004: カードのホバー浮き上がりエフェクト統一設計

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: カードインタラクション

### 参考要素
- `transform: translateY(-6px)` + `box-shadow` の同時変化でカードが浮く感覚
- transition を `transform .3s, box-shadow .3s` に統一することでアニメーションが滑らか
- 全カードに同一のホバーエフェクトを適用することでUIの一貫性を保つ

### 適用可能業種
全業種（カードコンポーネントを使用する全てのLP）

### 実装メモ
```css
.card {
  transition: transform .3s ease, box-shadow .3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,.12);
}
/* ブランドカラーシャドウバリエーション */
/* ゴールド系: rgba(200,165,106,.2) */
/* グリーン系: rgba(46,184,138,.2)  */
/* ブルー系:  rgba(26,58,92,.15)   */
```

---

## LAYINS-005: スクロール連動フェードインアップ

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: スクロールアニメーション設計

### 参考要素
- IntersectionObserver で要素が画面に入ったタイミングでclassを付与
- `opacity: 0 → 1` + `translateY(24px → 0)` の組み合わせで「登場」感
- `threshold: 0.15`（要素の15%が見えた時点）で早めに発火させて遅れを防ぐ
- `unobserve()` で一度発火したら監視を解除しパフォーマンスを維持

### 適用可能業種
全業種共通（過剰なアニメーションは医療・士業系で控えめに）

### 実装メモ
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```
```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .6s ease, transform .6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}
/* 遅延バリエーション */
.fade-in:nth-child(2) { transition-delay: .1s; }
.fade-in:nth-child(3) { transition-delay: .2s; }
```

---

## 統計

- 登録事例数: 5
- 最終更新: 2026-06-20
