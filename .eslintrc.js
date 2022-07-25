// .eslintrc.js
module.exports = {
  root: true,
  // 环境配置
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['prettier'],
  // prettier提示报错
  rules: {
    // 刚才的代码...
    // prettier提示报错
    semi: 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never'],
    'vue/multi-word-component-names': 'off'
  }
}
