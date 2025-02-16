const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin' );



module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    statistics: './src/statistics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [ '.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@css': path.resolve(__dirname, 'src', 'css'),
      '@less': path.resolve(__dirname, 'src', 'less'),
      '@sass': path.resolve(__dirname, 'src', 'sass'),
      '@assets': path.resolve(__dirname, 'src', 'assets')
    }
  },
optimization: {
    splitChunks: {
      chunks: 'all'
    }
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin({
          patterns: [
            { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
            { from: 'src/css', to: 'css', noErrorOnMissing: true },
            { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css', noErrorOnMissing: true }
      ]
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!keep-folder/**']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader' ,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]'
        }
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
    ]
  }
}