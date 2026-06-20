# Failure Patterns

## 概要

LP・ホームページ・WordPress制作において、CVRを下げる「やってはいけないパターン」を体系化するフォルダ。
成功パターンだけでなく失敗パターンも学習資産として蓄積することで、同じ失敗を繰り返さない設計を実現する。

---

## ファイル構成

| ファイル | 内容 |
|---------|------|
| `failure-patterns.md` | 失敗パターン辞典（FAIL-XXX形式） |
| `failure-template.md` | 新規Failure Pattern追加時のテンプレート |

---

## 運用ルール

1. LP分析後・制作後に CVR阻害要因を発見したら `failure-patterns.md` へ追記する
2. 既存FAIL-XXXに該当する場合は新規作成せず、既存エントリへ事例を追加する
3. 追加前に `grep -r "FAIL-" knowledge/failure-patterns/` で重複確認する
4. 感想・評価は禁止。**なぜ失敗するのか**を構造的に記述する

---

## Failure Pattern ID 採番ルール

- プレフィックス: `FAIL-XXX`（3桁ゼロ埋め）
- 現在登録数: 5件（FAIL-001〜FAIL-005）
- 次番: FAIL-006〜
