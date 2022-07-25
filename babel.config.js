module.exports = {
  presets: [
    '@babel/preset-env',
    // 支持vue中的jsx语法
    '@vue/babel-preset-jsx'
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
