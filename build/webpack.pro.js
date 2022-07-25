const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

const CompressionPlugin = require('compression-webpack-plugin')
const base = require('./webpack.base')
const ENV = require('../.env.pro.js')

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(base, {
  mode: 'production',
  // devtool: 'nosources-source-map',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true
  },
  module: {
    rules: [
      {
        // 匹配文件后缀的规则
        test: /\.(css|s[cs]ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: true
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: ENV
      }
    }),
    new MiniCssExtractPlugin({
      // 将css代码输出到dist/styles文件夹下
      filename: 'style/chunk-[contenthash].css',
      ignoreOrder: true
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    })
    // new BundleAnalyzerPlugin(),
  ]
})
