# Motion Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: motion

## 概要

アニメーション・トランジション・スクロールエフェクトのパターンライブラリ。
「動き」でユーザー体験を高め、CVを促進するモーション設計基準を収録予定。

## 収録予定パターン

### 基本トランジション
- MOT-001: フェードイン（opacity 0→1）
- MOT-002: スライドアップ（translateY）
- MOT-003: スケールイン（scale 0.95→1）
- MOT-004: 左右スライド

### スクロールトリガーアニメ
- MOT-010: セクション入場アニメ（Intersection Observer）
- MOT-011: カウントアップ数値
- MOT-012: 横バー進捗アニメ
- MOT-013: 視差スクロール（Parallax）

### UIアニメ
- MOT-020: ボタンホバーエフェクト
- MOT-021: カードホバーリフト
- MOT-022: ローディングアニメ
- MOT-023: テキストタイプライター

### 使用ルール
- duration基準: 150ms（micro）/ 300ms（standard）/ 500ms（enter）
- easing基準: ease-out（登場）/ ease-in（退場）/ ease-in-out（移動）
- アニメ無効設定: `prefers-reduced-motion` 対応必須
- パフォーマンス: transform / opacity のみ使用（layout再計算禁止）
