module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/component-tags-order": ["error", {
      "order": ["template", "style", "script"]
    }],
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
