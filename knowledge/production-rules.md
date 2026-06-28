# Production Rules — 制作標準手順書

**バージョン**: 2.1
**作成日**: 2026-06-24
**更新日**: 2026-06-28
**ステータス**: Hero Layout Library 1.0 統合済み

---

## このファイルの目的

どの端末・どのClaude Code・どのセッションから利用しても、  
**同じ品質・同じ思考順序・同じ制作プロセス**でLP/HP/WordPress制作を実施できる状態を作ること。

- 分析フェーズで蓄積したナレッジを制作に活用するための標準手順を定義する
- 「ゼロから考える」制作を禁止し、既存ナレッジ優先の再現可能な制作フローを確立する

---

## 制作開始前の必須確認（省略禁止）

**制作依頼を受けたら、コードを書く前に必ず以下を読む。**

```
1. knowledge/governance.md                                    ← SST マップ確認・知識の保存先特定
2. knowledge/design-system/hero-pattern-map.md               ← Hero業種×CV目的マップ（★FIRST）
3. knowledge/design-system/hero-layout-library.md            ← Heroパターン詳細（HERO-XXX）
4. knowledge/design-system/hero-ranking.md                   ← HeroランキングCV/デザイン/モバイル
5. knowledge/lp/industry-patterns.md                         ← 業種別パターン（IND-XXX）
6. knowledge/lp/fv-library.md                                ← FVパターン（FV-XXX）+ 選定フローチャート
7. knowledge/lp/emotional-triggers.md                        ← 感情訴求トリガー（TRIG-XXX）
8. knowledge/lp/offer-library.md                             ← オファー設計パターン（OFFER-XXX）
9. knowledge/assets/industry-asset-patterns.md               ← 業種別素材構成
10. knowledge/assets/asset-management-rules.md               ← 素材管理ルール
11. knowledge/lp/cta-library.md                              ← CTAパターン（CTA-XXX）
12. knowledge/web/design-system.md                           ← デザイントークン・コンポーネント
13. knowledge/case-studies/                                  ← 同業種の過去案件
```

---

## 基本原則

| 原則 | 内容 |
|------|------|
| **ナレッジベース優先** | 独自判断より knowledge/ 内の既存知識を優先する |
| **既存Pattern優先** | 新規パターン作成より既存パターンの活用を優先する |
| **既存Template優先** | templates-production/ の既存テンプレートを最初に参照する |
| **Case Study保存必須** | 制作完了後は必ず case-studies/ へ記録する |
| **ゼロから考えない** | 業種判定 → Template選択 → FV選択 → CTA選択 → 制作 の順で進める |

---

## LP制作フロー（STEP1〜12）

LP制作依頼を受けた場合、**以下の順番で必ず実施する（スキップ禁止）**。

---

### STEP 1: 案件分析

クライアントの情報・依頼内容から以下を抽出する。

| 抽出項目 | 内容 |
|---------|------|
| 業種 | 美容・採用・医療・飲食・スクール・SaaS etc. |
| 商品・サービス | 何を売るのか・何を提供するのか |
| ターゲット | 誰に届けるのか（年代・悩み・状況） |
| オファー | 何を行動喚起するのか（無料体験・資料DL・予約etc.） |
| CVポイント | 一番達成したいCV（メインCV）と補助CV |
| 競合 | 主要競合・差別化軸 |

---

### STEP 2: 業種判定

`knowledge/lp/industry-patterns.md` を参照し、対象業種の IND-XXX を特定する。

```
確認事項:
- 業種タグ（#beauty / #recruit / #medical etc.）
- 推奨LP構成フロー
- 推奨カラーパレット
- CV向上ポイント
- サブカテゴリ別特記事項
```

---

### STEP 3: テンプレート選定

`knowledge/templates-production/` を参照し、最適なテンプレートを選定する。

| 業種 | 参照テンプレート |
|------|----------------|
| 美容サロン・エステ・ネイル | `beauty-template.md` |
| 採用全般（福祉・飲食・IT） | `recruit-template.md` |
| クリニック・整体・歯科 | `medical-template.md` |
| 飲食店・居酒屋・宴会 | `restaurant-template.md` |
| スクール・教育・転職 | `school-template.md` |
| SaaS・BtoB・業務ツール | `saas-template.md` |

**テンプレートが存在しない業種** → STEP2の IND-XXX を元に構成を設計する。

---

### STEP 3.5: Hero Section パターン選定（★NEW）

`knowledge/design-system/hero-pattern-map.md` の **クイック選択チートシート** から始める。

```
選定手順:
1. hero-pattern-map.md の「業種×CV目的マップ」で候補を2〜3件絞る
2. hero-ranking.md でCV期待値・モバイル適性を確認
3. hero-layout-library.md で候補パターンの詳細（レイアウト・コピー・評価）を確認
4. 最終的に1パターンを選定し、STEP 9 の LP設計書に記録する
```

| 選定基準 | 参照先 |
|---------|--------|
| とにかくCV最大化 | hero-ranking.md → ランキング① CV期待値順 |
| スマホ中心ユーザー | hero-ranking.md → ランキング③ モバイル適性順 |
| ブランド格・高級感 | hero-ranking.md → ランキング② デザイン品質順 |
| 業種・CV目的から選ぶ | hero-pattern-map.md → マップ①業種×CV目的 |

**ゼロからHeroを設計することを禁止する。必ずHERO-XXXを選定してから制作する。**

---

### STEP 4: FV選定

`knowledge/lp/fv-library.md` の **FV選定フローチャート** を参照し、FV-XXX を選定する。

```
確認手順:
1. fv-library.md の「FV選定フローチャート」で業種ブランチを確認
2. 5項目クイックチェック（写真素材あり？BtoB？採用？薬機法？）を実施
3. 1〜2パターンを候補として選定
4. 選定理由を STEP 9 の LP設計書に記録する
```

---

### STEP 5: CTA選定

`knowledge/lp/cta-library.md` の **CTA早引き一覧テーブル** を参照し、CTA-XXX を選定する。

```
確認事項:
- メインCTA（最重要CV）に対応するパターン
- 補助CTA（導線の中間）に対応するパターン
- スマホ固定フッターCTAの要否
- 業種・CVポイントとのマッチング
```

**BtoB案件の場合**: CTA-011（3段階: 資料DL/デモ/トライアル）を必ず確認する。  
**医療案件の場合**: CTA-012（3チャンネル: Web予約/LINE/電話）を必ず確認する。  
**採用案件の場合**: CTA-014（低ハードル: まずは話だけ）を検討する。

---

### STEP 6: 構成設計

業種パターン・テンプレート・FV・CTA を元に、セクション構成と推奨導線を構築する。

```
基本構成フロー:
FV → [共感/問題提起] → [解決策/特徴] → [実績/信頼] → [お客様の声] → [FAQ] → [最終CTA]

変形パターン:
- 採用LP: FV → 魅力3点 → 1日の流れ → スタッフ声 → 待遇 → 応募フロー → CTA
- SaaS: FV → 課題提示 → 機能紹介 → 実績 → 料金 → FAQ → CTA（3段階）
- 医療: FV → 症状チェック → 院長紹介 → 施術の流れ → 料金 → 口コミ → CTA
```

---

### STEP 7: コピー設計

以下の3箇所のコピーを先に設計する。

| 箇所 | 設計内容 |
|------|---------|
| FVキャッチコピー | 選定したFV-XXXのコピーパターンを参照・カスタマイズ |
| 中間見出し | 各セクションのH2/H3コピー |
| CTA文言 | 選定したCTA-XXXのボタン文言・安心文言を参照・カスタマイズ |

**コピー設計ルール**:
- ターゲットの「悩み言葉」をそのまま使う（専門用語を使わない）
- 数字は必ず具体化する（「多数」→「○○件」）
- ベネフィットを前に出す（機能ではなく結果を伝える）

---

### STEP 7.5: 素材計画（Asset Management System）★NEW

`knowledge/assets/industry-asset-patterns.md` を参照し、必要素材を確定する。
コーディング前に必ず実施すること（省略禁止）。

```
実施内容:
1. industry-asset-patterns.md で業種別必要素材一覧を確認する（IND-ASSET-XXX）
2. asset-checklist.md Phase 1 でクライアント依頼リストを作成する
3. photo-source-library.md でフリー素材の検索ワードを準備する
4. chatgpt-image-prompt-library.md で必要なプロンプトを選定する
5. icon-source-library.md でアイコンセットを選定する（デフォルト: Lucide）
6. illustration-source-library.md（必要な場合のみ）でイラストを選定する
```

**必須出力（制作前にクライアントへ提示）**:

```markdown
## 素材計画 — [案件名]

### クライアント提供依頼
- [ ] [素材名・用途・推奨サイズ]

### フリー素材で補完（取得先・検索ワード）
- [素材]: [サイト名] / 検索ワード: "[検索ワード]"

### ChatGPT生成が必要な素材
- [素材]: プロンプトID [IMAGE-PROMPT-XXX] を使用

### アイコンセット
- [セット名] を使用 / 使用アイコン: [アイコン名リスト]
```

**役割分担の確認（絶対ルール）**:
- Claude Code: 画像設計 / 素材選定 / 検索ワード作成 / 生成プロンプト作成 / 配置指示
- ChatGPT: 画像生成（AIによる画像生成のみ）
- Claude Codeは画像生成を行わない

---

### STEP 8: デザイン設計

`knowledge/web/design-system.md` を参照し、デザイントークンとコンポーネントを選定する。

```
確認項目:
- カラートークン（業種テンプレートの推奨トークンを優先）
- タイポグラフィ（フォントファミリー・サイズスケール）
- スペーシング（セクションパディング・要素間隔）
- 使用コンポーネント（カード・ボタン・フォーム・タブ・カルーセルetc.）
- CTAセクション設計（.section-final-cta / .cta-context）
```

**業種別デザイントークン早引き**:
- 美容: `--beauty-accent: #c8a56a` / Noto Serif JP + Cormorant Garamond
- 採用: `--hr-accent: #f97316` / Noto Sans JP
- 医療: `--med-accent: #2eb88a` / Noto Serif JP
- 飲食: `--rest-dark-accent: #d8a76a` / Noto Serif JP
- スクール: `--school-accent: #6366f1` / Noto Sans JP
- SaaS: `--saas-accent: #4a6cf7` / Inter + Noto Sans JP

---

### STEP 9: LP設計書作成

以下の形式で LP設計書をまとめる（コーディング前に必ず作成）。

```markdown
## LP設計書 — [案件名]

### 基本情報
- 業種: [業種名] / IND-[XXX]
- ターゲット: [具体的なターゲット像]
- メインCV: [最重要コンバージョン]
- 参照テンプレート: [XXX-template.md]

### 採用パターン
- FV: FV-[XXX]（採用理由: ）
- メインCTA: CTA-[XXX]（採用理由: ）
- 補助CTA: CTA-[XXX]

### セクション構成
1. FV: [コピー案]
2. [セクション名]: [内容]
...

### デザイントークン
- アクセントカラー: [カラーコード]
- フォント: [フォント名]

### 想定CVポイント
- メイン: [CVアクション]
- サブ: [CVアクション]
```

---

### STEP 10: コーディング

LP設計書を元にコーディングを実施する。

```
コーディングルール:
- design-system.md のCSS変数を使用する（ハードコードしない）
- コンポーネントは design-system.md の実装を流用する
- CTAは選定した CTA-XXX の HTML/CSS を元に実装する
- FVは選定した FV-XXX の HTML/CSS を元に実装する
- スマホファースト（モバイル最適化必須）
- スマホ固定フッターCTAを必ず実装する
```

---

### STEP 11: 自己レビュー

コーディング完了後、`knowledge/failure-patterns/failure-patterns.md` と照合する。

**必ず確認するFAILパターン（全案件共通）**:

| FAIL | チェック項目 |
|------|------------|
| FAIL-001 | CTA弱体化（ボタン文言が弱い・設置数が少ない） |
| FAIL-002 | 情報量過多（詰め込みすぎで離脱を招く） |
| FAIL-003 | 信頼性不足（実績・口コミ・顔写真が欠如） |
| FAIL-004 | FV訴求不明確（何のLPか3秒で伝わらない） |
| FAIL-005 | デザイン先行型（CVより見た目優先） |

**業種別追加チェック**:
- 医療系: 薬機法違反表現がないか（医療広告ガイドライン遵守）
- BtoB: FAIL-016（価格非開示）/ FAIL-017（CTA一本化）
- 飲食: 料理写真・価格・営業時間の欠落がないか

---

### STEP 12: Case Study保存

制作完了後、必ず `knowledge/case-studies/` に記録する。

**ファイル名**: `YYYY-MM-DD-[業種]-[案件名].md`

```markdown
## 案件名: [案件名]
- 業種: [業種]
- 採用Pattern: Pattern-LP-XXX
- 採用FV: FV-XXX
- 採用CTA: CTA-XXX / CTA-XXX
- 参照テンプレート: [XXX-template.md]
- 参考ナレッジ: IND-XXX / FAIL-XXX

### 設計理由
[各パターン採用理由を構造的に記録]

### 成果
[CVR・クライアントフィードバック等（後日追記可）]

### 改善点・次回に活かすこと
[次の同業種案件への教訓]

### 再利用価値
[他案件へ応用できる知識]
```

---

## ホームページ制作フロー（STEP1〜10）

ホームページ制作依頼を受けた場合、以下の順番で実施する。

---

### STEP 1: サイト種別判定

以下から種別を特定する。

| 種別 | 主な目的 | CV |
|------|---------|-----|
| コーポレートサイト | 企業信頼性・採用・問い合わせ | お問い合わせ・資料請求 |
| 店舗サイト | 来店誘導・予約 | 電話・Web予約 |
| 採用サイト | 求職者獲得 | 応募エントリー |
| サービスサイト | サービス訴求・問い合わせ | 問い合わせ・資料DL |
| メディアサイト | 情報発信・集客 | 会員登録・広告CV |

---

### STEP 2: 業種判定

`knowledge/lp/industry-patterns.md` で IND-XXX を特定する（LP制作 STEP2 と同様）。

---

### STEP 3: 競合分析

競合サイト（2〜3サイト）の構成・訴求・CVポイントを確認する。

```
確認項目:
- ナビゲーション構成
- FV（キャッチコピー・ビジュアル）
- 差別化ポイントの表現
- CVポイント・CTA
- デザインの方向性
```

---

### STEP 4: サイトマップ作成

サイト種別・業種・競合分析を元にページ一覧を確定する。

```
基本ページ構成:
- トップページ（/）
- サービス・事業内容（/service/）
- 会社概要（/about/）
- お問い合わせ（/contact/）
- プライバシーポリシー（/privacy/）

業種別追加ページ:
- 採用: 採用情報（/recruit/）
- 医療: 診療案内（/treatment/）・アクセス（/access/）
- 飲食: メニュー（/menu/）・ご予約（/reserve/）
```

---

### STEP 5: 導線設計

各ページ間の回遊導線とCVへの動線を設計する。

```
設計原則:
- どのページからも「お問い合わせ」「予約」に到達できる
- グローバルナビ + フッターCTA の二重導線
- 各ページにインラインCTAを設置
```

---

### STEP 6: ページ構成作成

各ページのセクション構成を設計する（トップページは LP制作フローの STEP6 を参照）。

---

### STEP 7: UI設計

`knowledge/web/design-system.md` を参照し、共通UIコンポーネントを選定する。

```
確認項目:
- ヘッダー・フッター設計
- ナビゲーションパターン
- カード・ボタン・フォーム
- レスポンシブブレークポイント
```

---

### STEP 8: デザイン設計

LP制作の STEP8 と同様に design-system.md を参照し、サイト全体のデザイントークンを確定する。

---

### STEP 9: コーディング

ページ別にコーディングを実施する。

```
優先順位:
1. トップページ（最重要・最初に完成させる）
2. サービスページ
3. 会社概要
4. お問い合わせページ（フォーム実装）
5. その他サブページ
```

---

### STEP 10: Case Study保存

制作完了後、LP制作 STEP12 と同じフォーマットで `knowledge/case-studies/` に記録する。

---

## WordPress制作フロー（STEP1〜10）

WordPress案件の場合、以下の順番で実施する。

---

### STEP 1: サイト種別判定

ホームページ制作 STEP1 と同様に種別を特定する。  
加えてWordPress固有の要素を確認する。

```
WordPress固有確認:
- 投稿機能の要否（ブログ・お知らせ）
- カスタム投稿タイプの要否（実績・スタッフ等）
- EC機能の要否（WooCommerce等）
- 多言語対応の要否（WPML・Polylang等）
```

---

### STEP 2: 必要機能抽出

クライアントの運用イメージから必要機能をリストアップする。

| 機能 | 実装方法 |
|------|---------|
| 投稿・ブログ | WordPress標準投稿 |
| 実績・事例 | カスタム投稿タイプ |
| お問い合わせフォーム | Contact Form 7 / WPForms |
| SEO設定 | Yoast SEO / All in One SEO |
| 予約機能 | MTS Simple Booking C 等 |
| EC機能 | WooCommerce |

---

### STEP 3: wordpress-patterns 参照

`knowledge/wordpress/wordpress-patterns.md` を参照し、業種別推奨構成を確認する。

---

### STEP 4: プラグイン選定

`knowledge/wordpress/wordpress-plugins.md` を参照し、必要プラグインを選定する。

```
選定ルール:
- 機能重複するプラグインは入れない
- 更新頻度・サポート状況を確認する
- 軽量プラグインを優先する（表示速度影響）
```

---

### STEP 5: SEO設計

`knowledge/wordpress/wordpress-seo.md` を参照し、SEO設定を確定する。

```
基本設定:
- パーマリンク構造（/%postname%/ 推奨）
- タイトルタグ・メタディスクリプション設計
- OGP設定
- サイトマップ自動生成（XML Sitemaps等）
- Google Analytics / Search Console 連携
```

---

### STEP 6: ページ構成

ホームページ制作 STEP4〜5 と同様にサイトマップ・導線を設計する。

---

### STEP 7: UI設計

`knowledge/web/design-system.md` を参照する（ホームページ制作 STEP7 と同様）。

---

### STEP 8: デザイン

デザイントークンを確定し、テーマカスタマイズ方針を決定する。

```
選択肢:
A. カスタムテーマ（フルスクラッチ）: 自由度最高・工数最大
B. 軽量ベーステーマ（Lightning等）+ カスタマイズ: バランス型
C. ページビルダー（Elementor等）: クライアント自己更新重視の場合
```

---

### STEP 9: 実装

WordPress環境構築からデプロイまでを実施する。

```
実装手順:
1. ローカル環境構築（Local by Flywheel等）
2. テーマ実装
3. プラグイン導入・設定
4. コンテンツ入稿
5. SEO設定
6. 表示速度最適化
7. 本番環境へのデプロイ
8. 最終動作確認
```

---

### STEP 10: Case Study保存

制作完了後、`knowledge/case-studies/` に記録する。  
WordPress固有として「テーマ構成・プラグイン選定理由」も記録する。

---

## 品質管理ルール

### 制作後チェックリスト（全制作物共通）

制作完了後、`knowledge/failure-patterns/failure-patterns.md` と照合し、以下を確認する。

**必ず確認する5項目**:

| # | 確認項目 | 対応するFAIL |
|---|---------|------------|
| 1 | **CTA弱体化**：ボタン設置数・文言の弱さ・視認性 | FAIL-001 |
| 2 | **情報量過多**：詰め込みすぎ・スキャンしにくい | FAIL-002 |
| 3 | **信頼性不足**：実績・顔写真・口コミの欠如 | FAIL-003 |
| 4 | **FV訴求不明確**：3秒で何のLPか伝わるか | FAIL-004 |
| 5 | **デザイン先行**：CVより見た目が優先されていないか | FAIL-005 |

**業種別追加確認**:

| 業種 | 追加確認項目 |
|------|------------|
| 医療 | 薬機法違反表現・医療広告ガイドライン遵守（industry-patterns.md IND-003参照） |
| 飲食 | 料理写真・価格・営業時間・定休日の明記 |
| BtoB/SaaS | FAIL-016（価格非開示）・FAIL-017（CTA一本化）・FAQ設置 |
| 採用 | 給与・働き方の具体的記載・スタッフ顔写真 |
| スクール | Before/After実績・料金透明性・無料体験の訴求 |

---

## Case Study 運用ルール

案件完了後は**必ず** `knowledge/case-studies/` へ保存する。

### 保存必須コンテンツ

| 項目 | 内容 |
|------|------|
| 案件名 | クライアント名または案件識別名 |
| 業種 | 業種名 + 業種タグ（#XXX） |
| 採用Pattern | Pattern-LP-XXX（複数可） |
| 採用FV | FV-XXX（採用理由も記録） |
| 採用CTA | CTA-XXX（複数可）（採用理由も記録） |
| 参考ナレッジ | IND-XXX / FAIL-XXX / FV-XXX の参照記録 |
| 設計理由 | 各選択の構造的な理由（感想禁止） |
| 成果 | CVR・クライアント反応（後日追記可） |
| 改善点 | 次回同業種案件への教訓 |
| 再利用価値 | 他案件へ転用できる知識・パターン |

**ファイル名規則**: `YYYY-MM-DD-[業種]-[案件名].md`

---

## Pattern利用履歴（analytics/ 準備）

`knowledge/analytics/` フォルダを作成済み。

実案件5件完了後に以下のファイルを作成・運用開始する:
- `pattern-usage.md`: Pattern-LP-XXX 利用回数・業種・成果
- `fv-usage.md`: FV-XXX 利用回数・CVへの影響
- `cta-usage.md`: CTA-XXX 利用回数・組み合わせパターン

---

## 最終目標

```
業種判定（industry-patterns.md）
    ↓
FV Library参照（fv-library.md）
    ↓
Emotion Library参照（emotional-triggers.md）
    ↓
Offer Library参照（offer-library.md）
    ↓
★ Asset Management System（assets/industry-asset-patterns.md）
    ↓
CTA Library参照（cta-library.md）
    ↓
Design System適用（design-system.md）
    ↓
制作（コーディング）
    ↓
自己レビュー（failure-patterns.md）
    ↓
Case Study保存（case-studies/）
```

**ゼロから考えない。ナレッジベースから始める。**

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-06-24 | 初版作成。分析フェーズ完了・制作標準化フェーズ移行に伴い制定。 |
| 2026-06-27 | v2.0: Asset Management System 2.0 統合。STEP 7.5 素材計画を追加。制作フローを更新。 |
