const { merge } = require('webpack-merge')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const base = require('./webpack.base')
const ENV = require('../.env.dev.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        // 匹配文件后缀的规则
        test: /\.(css|s[cs]ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: ENV
      }
    }),
    new ESLintPlugin({
      fix: true
    })
  ]
})
