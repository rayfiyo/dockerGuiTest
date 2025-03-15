module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: [
    "feat",
    "fix",
    "docs",
    "test",
    "refactor",
    "setting",
    "style",
    "cicd",
    "perf",
    "add",
    "del",
  ],
  maxMessageLength: 64,
  minMessageLength: 1,
  // questions: ["type", "subject", "issues", "body"],
  questions: ["type", "subject", "issues"],
  scopes: [],
  types: {
    cicd: {
      description: "🎡CI/CDに関する更新",
      emoji: "🎡",
      value: "cicd",
    },
    docs: {
      description: "📄ドキュメント更新",
      emoji: "📄",
      value: "docs",
    },
    feat: {
      description: "🍻新機能実装",
      emoji: "🍻",
      value: "feat",
    },
    fix: {
      description: "🐛不具合修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "🚀パフォーマンス改善",
      emoji: "🚀",
      value: "perf",
    },
    refactor: {
      description: "💡リファクタリング",
      emoji: "💡",
      value: "refactor",
    },
    style: {
      description:
        "💄コーディングスタイルの更新（空白，フォーマット，記号，…）",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "🧪テストの更新",
      emoji: "🧪",
      value: "test",
    },
    setting: {
      description: "🔧設定ファイルの更新",
      emoji: "🔧",
      value: "setting",
    },
    add: {
      description: "➕️新規の静的ファイル追加（機能面への影響がない）",
      emoji: "➕️",
      value: "add",
    },
    del: {
      description:
        "🗑️ファイルやリソース単体の削除（リファクタや機能修正でもない）",
      emoji: "🗑️",
      value: "del",
    },
  },
  messages: {
    type: "どんなコミット？",
    subject: "ひとことで変更点は？\n",
    issues: "閉じる issue いくつ？\n",
    // body: "詳細あれば～\n",
  },
};
