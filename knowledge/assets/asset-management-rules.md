# Asset Management Rules — 素材管理ルール

**バージョン**: 1.0
**作成日**: 2026-06-27
**管理ファイル**: knowledge/assets/asset-management-rules.md

---

## このファイルの目的

LP・HP・WordPress制作における素材管理の基本ルールと役割分担を定義する。
すべての制作でこのルールに従い、素材管理の品質を標準化する。

---

## 絶対ルール（省略・変更禁止）

### Rule 1: 画像生成の役割分担

| 担当者 | 担当業務 |
|--------|---------|
| **Claude Code** | 画像設計 / 素材選定 / 検索ワード作成 / 画像生成プロンプト作成 / 配置指示 |
| **ChatGPT** | 画像生成（AIによる画像生成のみ） |
| **クライアント** | 実写素材の提供（スタッフ・店舗・商品等） |

**Claude Codeは画像生成を行わない。** 画像生成が必要な場合はChatGPTを使用する。

---

### Rule 2: 素材の優先順位

```
1位: クライアント提供の実写素材（最優先）
2位: フリー素材サイト（photo-source-library.md 参照）
3位: ChatGPT画像生成（chatgpt-image-prompt-library.md 参照）
4位: イラスト素材（illustration-source-library.md 参照）
5位: アイコン（icon-source-library.md 参照）
```

クライアント提供素材が存在する場合は、必ずそちらを優先する。

---

### Rule 3: 制作前の必須出力

LP・HP・WordPress制作を開始する前に、必ず以下を出力する：

```
■ 必要素材一覧
■ 素材取得方法（クライアント提供 / フリー素材 / ChatGPT生成）
■ フリー素材検索ワード
■ ChatGPT画像生成プロンプト（必要な場合）
■ 配置指示（どのセクションにどの素材を使うか）
```

コーディングを始める前に素材計画を確定する。

---

### Rule 4: アイコンセットの統一

- 1ページにつき1種類のアイコンセットを使用する（混在禁止）
- デフォルト標準: **Lucide Icons**
- 例外: SaaS・IT系はHeroicons / 親しみやすさ重視はPhosphor Icons

---

### Rule 5: ライセンス確認の義務

- すべての外部素材を使用する前にライセンスを確認する
- 商用利用NGの素材は使用しない
- 帰属表示が必要な素材は必ず表示を設定する
- 確認できない素材は使用しない

---

## Asset Management System 2.0 — ファイル構成

```
knowledge/assets/
├── asset-management-rules.md      ← このファイル（ルール・役割分担）
├── asset-checklist.md             ← 素材チェックリスト（3フェーズ）
├── photo-source-library.md        ← フォト素材サイト・業種別検索ワード
├── illustration-source-library.md ← イラスト素材サイト・業種別活用
├── icon-source-library.md         ← アイコンセット・実装ガイド
├── chatgpt-image-prompt-library.md ← ChatGPT画像生成プロンプト集
└── industry-asset-patterns.md     ← 業種別必要素材構成パターン
```

---

## 制作フロー内での Asset Management 位置付け

```
STEP1:  案件分析
STEP2:  業種判定（IND-XXX）
STEP3:  テンプレート選定
STEP4:  FV選定（FV-XXX）
STEP5:  CTA選定（CTA-XXX）
STEP6:  構成設計
STEP7:  コピー設計
         ↓
★ STEP7.5: 素材計画（Asset Management System）
  - industry-asset-patterns.md で業種別素材一覧確認
  - asset-checklist.md Phase 1 でクライアント依頼リスト作成
  - photo-source-library.md で検索ワード準備
  - chatgpt-image-prompt-library.md でプロンプト選定
  - icon-source-library.md でアイコンセット選定
         ↓
STEP8:  デザイン設計（design-system.md）
STEP9:  LP設計書作成
STEP10: コーディング（素材組み込み）
STEP11: 自己レビュー
STEP12: Case Study保存
```

---

## 素材カテゴリ別 管理ルール

### フォト素材

- **取得元**: `photo-source-library.md` 参照
- **ファイル形式**: JPG（写真）/ PNG（透過が必要な場合）/ WebP（パフォーマンス重視）
- **ファイル命名規則**: `[セクション]-[連番].jpg`（例: `fv-hero.jpg`, `service-01.jpg`）
- **推奨サイズ**:
  - FV画像: 1920×1080px以上
  - カード画像: 600×400px以上
  - サムネイル: 400×300px以上
- **ファイルサイズ制限**:
  - FV画像: 200KB以下
  - その他: 100KB以下

### イラスト素材

- **取得元**: `illustration-source-library.md` 参照
- **ファイル形式**: SVG（推奨）/ PNG
- **色変更**: SVGは必ずブランドカラーに合わせて色変更する
- **統一**: 同一ページで同一サイト・同一スタイルパックで統一する

### アイコン

- **デフォルト**: Lucide Icons（`icon-source-library.md` 参照）
- **実装方式**: SVGインライン または CDN
- **サイズ**: CSSクラスで管理（`.icon-sm`〜`.icon-2xl`）
- **色**: CSSの `currentColor` または デザイントークン変数で管理

### AI生成画像（ChatGPT）

- **使用プロンプト**: `chatgpt-image-prompt-library.md` 参照
- **生成後の確認**: クライアント確認必須
- **ファイル形式**: PNG（ChatGPTの出力形式）
- **命名規則**: `ai-[用途]-[連番].png`（例: `ai-fv-hero.png`）

---

## NG 事項

| NG行為 | 理由 |
|--------|------|
| Claude Codeで画像生成 | 役割分担のルール違反 |
| ライセンス未確認の素材使用 | 著作権侵害リスク |
| 1ページに複数のアイコンセット混在 | デザインの統一感が崩れる |
| クライアント未確認でAI生成画像を使用 | 意図しない表現になる可能性 |
| FV以外の素材の `loading="eager"` | パフォーマンス低下 |
| alt属性なしの `<img>` タグ | アクセシビリティ違反 |
| 100KBを超える画像の無圧縮使用 | ページ表示速度の低下 |

---

## Asset Management System 更新ルール

新しいフリー素材サイト・イラストサイト・アイコンセットを発見した場合：

1. 各ライブラリファイルに追記する（フォーマット遵守）
2. `governance.md` の SST マップを更新する
3. Learning Reason を必ず記録する
4. 既存サイトと重複しないことを確認する

新しい業種パターンが必要な場合：
- `industry-asset-patterns.md` に IND-ASSET-XXX として追記する

ChatGPTプロンプトが成功した場合：
- `chatgpt-image-prompt-library.md` に「※成功実績あり」を追記する
- 改善版プロンプトがあれば更新する

---

## Learning Reason

**Why**: 素材管理の役割分担・優先順位・ルールを明文化することで、セッションをまたいでも一貫した素材選定ができる状態を作る。Claude Codeの役割（設計・選定・プロンプト作成）とChatGPTの役割（生成）を明確に分離する。
**応用先**: すべてのLP・HP・WordPress制作における素材管理全般
