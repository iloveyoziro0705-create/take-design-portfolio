# figma-layout.md — Figma Auto Layout 完全対応版

Figmaへそのまま移植できるよう、全フレームをAuto Layoutプロパティ（Direction / Gap / Padding / Alignment / Sizing）で記述する。Sizingは Figma の `Hug contents` / `Fill container` / `Fixed size` の3値で統一。

---

## Frame構造ツリー

```
Page: Construction LP
└─ Frame: Site (Fixed 900 / Hug, BG=neutral.background)
   ├─ Section: Header
   ├─ Section: Hero
   ├─ Section: CTA-Group
   ├─ Section: Services
   ├─ Section: StatBand
   └─ Section: FooterCTA
```

---

## Section: Header

| プロパティ | 値 |
|---|---|
| Direction | Horizontal |
| Padding | 16 / 24 (縦/横) |
| Gap | space.6 (24px) — 自動計算 (space-between) |
| Alignment | Center (vertical), Space-between (horizontal) |
| Sizing (W/H) | Fill / Hug (72px相当) |
| 背景 | white |
| 子要素 | `Logo`(Hug) → `CTA-Compact`(Hug) → `Menu-Trigger`(Fixed 48×48) |

### Logo（内部Auto Layout）
- Direction: Horizontal, Gap: space.2(8px), Alignment: Center, Sizing: Hug
- 子: `LogoMark`(Fixed 40×40, radius full) → Stack(Vertical, Gap: 2px, Hug)[社名(Bold 16px) / タグライン(Regular 12px, color=caption)]

### CTA-Compact（内部Auto Layout）
- Direction: Horizontal, Gap: 0, Alignment: Center, Sizing: Hug, Radius: md(角のみ)
- 子: `Button/Split-Left`(Fixed ~130×48, bg=navy.800) → `Button/Split-Right`(Fixed ~130×48, bg=orange.600)
- 各Buttonの内部: Direction Horizontal, Gap space.2(8px), Padding 12/16, Alignment Center, Sizing Hug → Icon(20px) + Label(14px Bold white)

---

## Section: Hero

| プロパティ | 値 |
|---|---|
| Direction | Horizontal（Desktop/Tablet） → Vertical（Mobile） |
| Padding | space.8 / space.6 (32/24px) |
| Gap | space.8 (32px) |
| Alignment | Top |
| Sizing | Fill / Hug |
| 子要素 | `Hero-Copy`(Fill, 45%目安) → `Hero-Media`(Fill, 55%目安) |

### Hero-Copy（Vertical Stack）
- Direction: Vertical, Gap: space.5(20px), Padding: 0, Alignment: Left, Sizing: Fill/Hug
- 子順序：
  1. `AreaBadge`（Hug, Radius sm, bg=navy.800, padding 8/16, 白文字12px）
  2. `AreaCopy`（Hug, 本文16px, color=body）
  3. `Headline`（Hug, 40-44px Black, line-height 1.2, 強調語のみ`text-run`でorange.600）
  4. `SubCopy-1`（Hug, 16px, line-height1.8, color=body）
  5. `SubCopy-2`（Hug, 16px, line-height1.8, color=body, margin-top space.4）
  6. `IconBadge-Row`（Horizontal, Gap space.3(12px), Sizing Fill, 子3つは各Fill均等幅）
  7. `BeforeAfterCard`（Fixed width ≒ 320px / Hug height, margin-top space.5）

### Hero-Media
- Direction: Vertical, Sizing: Fill/Fill（写真がコンテナを埋める＝Fill）
- 画像: object-fit cover, 比率3:4〜4:5, 左端に`fade-mask`（白→透明のグラデーションOverlay、Blend: Normal）

### IconBadge（単体）
- Direction: Vertical, Gap: space.2(8px), Alignment: Center, Sizing: Fixed 72×auto(Desktop)/64×auto(Mobile)
- 子: `IconCircle`(Fixed 直径72px, radius full, border 1.5px navy.800, shadow=icon-badge) → `Label`(2行, 中央揃え, 12-14px, 強調語のみBold+orange.600)

### BeforeAfterCard
- Direction: Horizontal, Gap: space.1(4px), Padding: space.2(8px), Radius: lg, Shadow: card, Sizing: Hug
- 子: `Image-Before`(Fixed square, radius md) → `Image-After`(Fixed square, radius md)
- Overlay（Absolute配置、Auto Layoutの外）: `ArrowCircle`(Fixed 40×40, radius full, bg=white, shadow=card) を2画像の中央境界に重ねる
- Tag（各画像の左上にAbsolute配置）: `BeforeTag`/`AfterTag`（Hug, Padding 4/12, radius sm）

---

## Section: CTA-Group

| プロパティ | 値 |
|---|---|
| Direction | Vertical |
| Padding | space.6 / space.6 |
| Gap | space.4 (16px) |
| Alignment | Center (stretch children) |
| Sizing | Fill / Hug |
| 子要素 | `Button/Primary`(Fill, H=64) → `Button/Secondary`(Fill, H=64) → `TrustBadge-Row`(Fill, Hug) |

### Button/Primary・Secondary（大型CTA、内部Auto Layout）
- Direction: Horizontal, Gap: space.4(16px), Padding: 0/space.6(0/24px), Alignment: Space-between(中身は3要素), Sizing: Fill/Fixed(64px), Radius: xl(20px), Shadow: cta-button（Primary）/cta-button-navy（Secondary）
- 子: `IconCircle-Left`(Fixed 40×40, bg=白 半透明, radius full) → Stack(Vertical, Gap 2px, Hug)[Caption(12px)/MainLabel(20px Bold)] → `ArrowCircle-Right`(Fixed 40×40, bg=白 半透明, radius full)

### TrustBadge-Row
- Direction: Horizontal, Gap: space.3(12px), Alignment: Center, Sizing: Fill (子はHug, space-betweenで均等配置)
- 子: `TrustCheckBadge`×3（Direction Horizontal, Gap space.1(4px), Padding 8/16, Radius full, bg=cream）

---

## Section: Services（対応工事）

| プロパティ | 値 |
|---|---|
| Direction | Vertical |
| Padding | space.16 / space.6 (64/24px) |
| Gap | space.8 (32px) |
| Alignment | Center |
| Sizing | Fill / Hug |
| 子要素 | `SectionTitle`(Hug) → `ServiceCard-Grid`(Fill, Wrap) |

### SectionTitle
- Direction: Horizontal, Gap: space.4(16px), Alignment: Center, Sizing: Hug
- 子: `Divider-Line`(Fixed width ≒48px, height 1px, bg=navy.600) → `Title`(Hug, 28-32px Bold) → `Divider-Line`(同左)

### ServiceCard-Grid
- Type: Grid（FigmaのAuto Layout Wrap機能を使用）
- Columns: Desktop=3 / Tablet=2 / Mobile=1
- Gap: space.6(24px) 横 / space.6(24px) 縦
- Sizing: Fill（各セルはFill、比率均等）

### ServiceCard（単体、6インスタンス共通構造）
- Direction: Vertical, Gap: 0, Padding: 0, Radius: lg(16px), Shadow: card, Sizing: Fill(幅)/Hug(高さ、ただしmin-height指定)
- 子:
  1. `Photo`（Fixed height比率4:3, radius: top-left/top-right only = lg, Sizing Fill幅）
  2. `Content`（Direction Vertical, Padding: space.6(24px), Gap: space.2(8px), Sizing Fill/Hug）
     - `IconCircle`（Fixed 56×56, radius full, bg=navy.800, position: margin-top -28px でPhotoに半分オーバーラップ＝Absolute的配置、Figma上はConstraints Top固定+Y座標マイナスオフセットで再現）
     - `Title`（Hug, 20-24px Bold）
     - `Description`（Hug, 14-16px, color=body, line-height 1.6）

---

## Section: StatBand（実績スタッツ）

| プロパティ | 値 |
|---|---|
| Direction | Horizontal |
| Padding | space.14 / space.6 (56/24px) |
| Gap | space.8 (32px) |
| Alignment | Center |
| Sizing | Fill(画面幅いっぱい, コンテナ制約を無視) / Hug |
| 背景 | navy.800 ベタ（Full Bleed = Breakout） |
| 子要素 | `StatCard`×3（各Fill均等幅） |

### StatCard
- Direction: Vertical, Gap: space.2(8px), Alignment: Center, Sizing: Fill/Hug
- 子: `WreathIcon-Row`（Horizontal, Gap 0, Alignment Center）[LeftWreath(24px) / Stack(Vertical, Center)[Label(14px white)/Number(36-40px Black white)/SubLabel(12px white)] / RightWreath(24px)]

---

## Section: FooterCTA（下部固定）

| プロパティ | 値 |
|---|---|
| Direction | Horizontal |
| Padding | 0 |
| Gap | 0 |
| Alignment | Stretch |
| Sizing | Fill(画面幅いっぱい) / Fixed(56px) |
| Constraints | Mobile: Bottom固定（Figma Prototypeの"Fix position when scrolling"を指定） |
| 子要素 | `Button/Split-Left`(Fill, bg=navy.800) → `Button/Split-Right`(Fill, bg=orange.600) |

各SplitボタンはHeaderのCTA-Compactと同一構造（Direction Horizontal, Gap space.2, Padding 16/24, Alignment Center, Sizing Fill/Fixed56, Icon20px+Label16pxBold）。

---

## Sizing早見表（Hug / Fill / Fixed の使い分け）

| 要素 | Sizing |
|---|---|
| Site全体フレーム | Fixed幅(900) / Hug高さ |
| Section各種 | Fill幅 / Hug高さ |
| Header内Logo・Menu | Hug / Hug |
| Hero-Copy / Hero-Media | Fill / Hug（比率はFillの重み付けで45:55を再現） |
| Button(Primary/Secondary) | Fill幅 / Fixed高さ(64) |
| Button(Compact/Split) | Hug or Fill / Fixed高さ(48-56) |
| IconCircle系 | Fixed / Fixed（正円を維持するため必ずFixed） |
| ServiceCard | Fill幅 / Hug高さ(min-height指定) |
| ServiceCard内Photo | Fill幅 / Fixed高さ(4:3比率から算出) |
