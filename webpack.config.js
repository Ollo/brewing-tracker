const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = require('./project.config.js')

const webpackConfig = {
  entry: [
    path.resolve(`${config.src}/main.js`)
  ],

  output: {
    path: path.resolve(config.dist),
    filename: 'shell-[name].js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' }, // creates style nodes from JS strings
          { loader: 'css-loader' }, // translates CSS into CommonJS
          { loader: 'sass-loader' } // compiles Sass to CSS
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.src + '/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(config.src)
    ]
  },

  devtool: 'eval-source-map'
}

module.exports = webpackConfig
