# FVインスピレーション事例集

## 概要
辞典（fv-library.md）に登録するほどではないが、制作時に強く参考になるFV事例を保存する。
「なぜ参考になるか」を必ず構造的に記録する（感想禁止）。

---

## 記録フォーマット

```
## FVINS-XXX: [事例タイトル]
**出典**: [案件名 / 分析ID]
**業種タグ**: #XXX #XXX
**LP-Rank**: S / A / B
**参考箇所**: FV全体 / コピー / ビジュアル / CTA配置 / 余白 / 等

### 参考要素
[何が、どのように機能しているかを構造的に記録]

### 適用可能業種
[この要素が転用できる業種リスト]

### 実装メモ
[コード断片・CSS値・寸法・色コード等]
```

---

## 事例一覧

---

## FVINS-001: グラデーション背景 × 装飾グリッドオーバーレイ

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #salon #luxury  
**LP-Rank**: A  
**参考箇所**: 背景テクスチャ設計

### 参考要素
- `body::before` に `position: fixed; pointer-events: none;` でグリッドオーバーレイを常時表示
- グリッド線: `rgba(255,255,255,.35)` で44px間隔、全体opacity `0.16` で目立ちすぎない
- 複数の `radial-gradient` を重ねることで、フラットな背景に奥行きと質感を付与
- 画像なしでも高級感を演出できる構成

### 適用可能業種
美容・サロン・ホテル・ブライダル・ジュエリー・インテリア

### 実装メモ
```css
body {
  background:
    radial-gradient(circle at 10% 0%, rgba(232, 204, 181, .45), transparent 34%),
    radial-gradient(circle at 90% 18%, rgba(200, 165, 106, .18), transparent 30%),
    #faf7f3;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .16;
  z-index: -1;
}
```

---

## FVINS-002: フルスクリーン背景 × 二段階ダークオーバーレイ

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #restaurant #food #luxury  
**LP-Rank**: A  
**参考箇所**: 写真背景の可読性確保手法

### 参考要素
- `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75))` で上部を薄く・下部を濃くする
- 上部を薄くすることで写真のメインビジュアルを見せつつ、テキストエリア（中下部）の可読性を確保
- 単一rgba値の均一オーバーレイより自然な明暗差が生まれる

### 適用可能業種
飲食・ホテル・旅行・ウェディング・不動産（外観写真）・美容（店内写真）

### 実装メモ
```css
.hero {
  background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75)),
    url('hero.jpg') center/cover no-repeat;
}
/* テキスト配置エリアによってオーバーレイ値を調整 */
/* テキスト上部配置: (.2, .6) / 中央配置: (.4, .7) / 下部配置: (.55, .8) */
```

---

## FVINS-003: 英字ラベル × 縦線装飾 × 明朝体H1 の三層構造

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #branding  
**LP-Rank**: A  
**参考箇所**: 見出し階層設計

### 参考要素
- 英字キャプション（12px / 追跡0.24em）→ 縦線（1px / 54px）→ 明朝体H1 の順序
- 英字ラベルがブランド感と情報整理を同時に担う
- 縦線がセクションヘッダーの「始まり」を視覚的に示す
- 3層構造が視線を自然にH1へ誘導する

### 適用可能業種
美容・ホテル・ブライダル・飲食（高級）・インテリア・アパレル

### 実装メモ
```css
.ornament {
  width: 1px;
  height: 54px;
  background: linear-gradient(#c8a56a, transparent);
  margin: 0 auto 18px;
}
.label {
  font-family: 'Jost', sans-serif;
  color: #c8a56a;
  letter-spacing: .24em;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}
```

---

## FVINS-004: clamp()によるレスポンシブH1スケーリング

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: タイポグラフィのレスポンシブ設計

### 参考要素
- `font-size: clamp(46px, 8vw, 92px)` でモバイル〜デスクトップを1行で制御
- 最小値・ビューポート依存値・最大値の三値設定
- メディアクエリなしで自然なスケーリングを実現

### 適用可能業種
全業種共通

### 実装メモ
```css
/* 飲食・ラグジュアリー系 大胆なH1 */
h1 { font-size: clamp(46px, 8vw, 92px); }

/* 美容・サービス系 標準H1 */
h1 { font-size: clamp(36px, 6vw, 72px); }

/* コーポレート・採用系 控えめH1 */
h1 { font-size: clamp(28px, 4.5vw, 56px); }

/* セクションH2 全業種共通 */
h2 { font-size: clamp(28px, 4vw, 50px); }
```

---

## FVINS-005: 縦書きFVコピー × 施術シーン写真（和の品格）

**出典**: Hériter（ヘリテ）/ 2026-06-20-heriter-beauty-salon.md  
**業種タグ**: #beauty #salon #japanese #heritage #natural  
**LP-Rank**: B（70/100）  
**参考箇所**: FVコピー表現・タイポグラフィ設計

### 参考要素
- 縦書きメインコピー「毎日のために 心地のよいスタイルを」が和の品格と温かみを同時表現
- フランス語ブランド名（Hériter）と縦書き日本語コピーの対比で「洋×和」の独自世界観
- 施術シーン（スタイリスト + お客様）の写真が「どんな空間で施術を受けるか」をFVで即座に伝える
- コピーは「日常」訴求（特別な日ではなく毎日のために）でリピート来店の動機を形成

### 適用可能業種
美容サロン・日本料理・旅館・茶道・和雑貨・老舗ブランド全般

### 実装メモ
```css
/* 縦書きコピーの基本設定 */
.fv-copy-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(20px, 3vw, 38px);
  letter-spacing: .18em;
  line-height: 1.9;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,.3);
}
/* モバイルでは横書きに */
@media (max-width: 767px) {
  .fv-copy-vertical {
    writing-mode: horizontal-tb;
    font-size: clamp(18px, 5vw, 28px);
  }
}
```

---

## FVINS-006: 英語哲学型FVコピー × ミニマリスト施術写真

**出典**: Invincible Hair MADA / 2026-06-20-mada-beauty-salon.md  
**業種タグ**: #beauty #salon #monochrome #minimal #stylish #philosophy  
**LP-Rank**: A（80/100）  
**参考箇所**: FVコピー表現・世界観設計（GEN-001シリーズ唯一のFV満点事例）

### 参考要素
- 「BE YOURSELF. FOR ALWAYS.」全大文字英語短文2連で哲学的価値観を即座に表明
- ピリオド（.）で1文ずつ完結させることで重みと断言の印象を強める
- モノクロ背景 + コーラルアクセントというシンプルな配色がコピーを際立たせる
- 業種説明・悩み共感型コピーを使わないことでターゲットのセルフスクリーニングが成立

### 適用可能業種
美容サロン（スタイリッシュ系）・アパレル・フィットネス・ライフスタイルブランド・コーポレート（ブランド系）

### 実装メモ
```css
/* 英語哲学コピーのスタイル */
.fv-title-philosophy {
  font-family: 'Jost', 'Montserrat', 'Inter', sans-serif;
  font-size: clamp(42px, 7vw, 90px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #fff;
  line-height: 1.15;
}
/* 補足の日本語コピー */
.fv-subtitle-ja {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(13px, 1.8vw, 17px);
  letter-spacing: .12em;
  color: rgba(255,255,255,.8);
  margin-top: 20px;
  line-height: 2;
}
```

---

## FVINS-007: 内発動機型FVコピー「好きを 仕事に。」（ウェルネス・採用LP）

**出典**: LAVA ホットヨガスタジオ 採用LP / 2026-06-22-lava-hotyoga-recruit-lp.md  
**業種タグ**: #recruit #wellness #yoga #lifestyle  
**LP-Rank**: B-（68/100 — GEN-002最高スコア）  
**参考箇所**: FVコピー表現

### 参考要素
- 「好きを 仕事に。」という6文字コピーが「内発動機（好き）」を仕事の正当な動機として肯定する
- 求職者が「そういう仕事をしたかった」と既に持っていた感情を言語化する役割
- 短文×句点（。）で断言することで「誰でも歓迎」ではなく「この仕事が好きな人に来てほしい」というセルフスクリーニング効果が生まれる
- FVにスタッフのカルーセル写真を組み合わせることで「好きを仕事にした人たちがいる職場」を視覚的に実証

### 適用可能業種
ヨガ・フィットネス・スポーツ・アパレル・音楽・料理・アート・アウトドア・ゲーム等「業種自体への熱量」がある採用LP全般

### 実装メモ
```css
/* 内発動機型コピーのスタイル */
.fv-copy-inner-motivation {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: .12em;
  line-height: 1.4;
}
/* サブコピー（仕事内容の補足）*/
.fv-subcopy {
  font-size: clamp(14px, 2vw, 18px);
  letter-spacing: .08em;
  margin-top: 24px;
  opacity: .85;
}
```

---

## FVINS-008: 対称反復型FVコピー「ひらけ、世界。ひらけ、自分。」（大手採用LP）

**出典**: 日本生命 採用LP / 2026-06-22-nipponlife-recruit-lp.md  
**業種タグ**: #recruit #insurance #corporate #bigcompany  
**LP-Rank**: B-（63/100）  
**参考箇所**: FVコピー表現・テンプレートパターン

### 参考要素
- 「ひらけ、世界。ひらけ、自分。」: 「[動詞命令形]、[外の概念]。[動詞命令形]、[内の概念]。」の対称反復構造
- リズム（音の繰り返し）が記憶に定着しやすく、見た後も脳内で再生される
- 「世界（社会・外部への貢献）」と「自分（個人の成長）」を同時に訴求できる二重訴求構造
- 大企業の「社会的使命」と「個人の成長機会」を1文で両立させる希少なコピーパターン
- ピリオド＋句点（。）で1フレーズずつ完結させることで重みと断言感を付与

### 適用可能業種
大手企業採用LP・社会貢献系採用（保険・金融・インフラ・行政・NGO）・グローバル展開企業

### 実装メモ
```
/* 対称反復型コピーの構文テンプレート */
[動詞命令形]、[外の概念]。[動詞命令形]、[内の概念]。

/* 業種別応用例 */
「伸ばせ、地域。伸ばせ、自分。」（地方採用LP）
「守れ、命。守れ、誇り。」（医療・警察・消防採用LP）
「繋げ、社会。繋げ、未来。」（インフラ・通信採用LP）
「育てろ、子どもたち。育てろ、自分。」（保育・教育採用LP）
```

---

## 統計

- 登録事例数: 8（採用LP 辞典統合 2026-06-22 時点）
- 最終更新: 2026-06-22（FVINS-007〜008 追加 / 採用LP辞典統合）
