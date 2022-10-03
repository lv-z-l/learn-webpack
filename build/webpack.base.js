const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const threadLoader = {
  loader: 'thread-loader',
  options: {
    workers: require('os').cpus().length - 1
  }
}

module.exports = {
  // 模式 开发模式
  mode: 'production',
  // 入口文件 main.js
  entry: {
    main: './src/index.js'
  },
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve('./src'),
      assets: path.resolve('./public/assets')
    },
    // 引入文件时省略后缀
    extensions: ['.js', '.ts', '.less', '.scss', '.css', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: ['cache-loader', threadLoader, 'vue-loader']
      },
      // {
      //   // 匹配文件后缀的规则
      //   test: /\.(css|s[cs]ss)$/,
      //   use: [
      //     {
      //       loader: 'sass-resources-loader',
      //       options: {
      //         resources: [
      //           // 放置全局引入的公共scss文件
      //         ],
      //       },
      //     },
      //   ]
      // },
      {
        // 匹配文件后缀的规则
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024 // 25kb
          }
        },
        generator: {
          // 打包到 dist/image 文件下
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        // 匹配js后缀文件
        test: /\.js$/,
        // 排除node_modules中的js
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'cache-loader',
          threadLoader,
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  // 输出
  output: {
    // 输出到 dist文件夹
    path: path.resolve(__dirname, '../dist'),
    // js文件下
    filename: 'js/chunk-[contenthash].js',
    // 每次打包前自动清除旧的dist
    clean: true
  },
  plugins: [
    // 刚才的代码...
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    })
  ],
  externals: {
    vue: 'Vue'
  }
}
