const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin' );
<<<<<<< HEAD



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
=======
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin' );
const ESLintPlugin = require('eslint-webpack-plugin');


const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;

const optimize = () => ({
  splitChunks: {
    chunks: 'all'
  },
  minimizer: IS_PROD ? [new CssMinimizerWebpackPlugin(), new TerserPlugin()] : [],
  usedExports: true,
});

const getFileName = (ext) => `[name]${IS_DEV ? '' : '.[hash]'}.${ext}`;

const setCssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: ''
      }
    },
    'css-loader'
  ]
  if (extra) {
    loaders.push(extra)
  }
  return loaders
}

const setPlugins = () => {
  const plugins = [
>>>>>>> 601b0c7 (webpack фadvanced)
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
<<<<<<< HEAD
    new CopyWebpackPlugin({
          patterns: [
            { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
            { from: 'src/css', to: 'css', noErrorOnMissing: true },
            { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css', noErrorOnMissing: true }
=======
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
        { from: 'src/css', to: 'css', noErrorOnMissing: true },
        {
          from: path.resolve(__dirname, 'src/favicon.png'),
          to: path.resolve(__dirname, 'dist'),
        },
        { from: 'node_modules/normalize.css/normalize.css', to: 'css/normalize.css', noErrorOnMissing: true }
>>>>>>> 601b0c7 (webpack фadvanced)
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
<<<<<<< HEAD
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
=======
    }),
    new ESLintPlugin ({
      extensions: ['js'],
      fix: true
    })
  ]
  return plugins;
}

const jsLoaders = (extra) => {
  const loaders = {
    loader: 'babel-loader' ,
    options: {
      presets: ['@babel/preset-env' ]
    }
  }
  if (extra) loaders. options.presets.push(extra)
  return loaders
}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx',
    statistics: './src/statistics.ts'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFileName('js')
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@css': path.resolve(__dirname, 'src', 'css'),
      '@less': path.resolve(__dirname, 'src', 'less'),
      '@sass': path.resolve(__dirname, 'src', 'sass'),
      '@assets': path.resolve(__dirname, 'src', 'assets')
    }
  },
  devtool: IS_DEV ? 'source-map' : false,
  optimization: optimize(),
  devServer: {
    port: 4200,
    hot: false
  },
  plugins: setPlugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
          use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
          use: jsLoaders('@babel/preset-typescript')
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
          use: jsLoaders('@babel/preset-react')
      },
      {
        test: /\.css$/,
        use: setCssLoaders()
      },
      {
        test: /\.less$/,
        use: setCssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: setCssLoaders('sass-loader')
>>>>>>> 601b0c7 (webpack фadvanced)
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
<<<<<<< HEAD
          filename: 'assets/[name][ext]'
=======
          filename: 'assets/[name].[hash][ext]'
>>>>>>> 601b0c7 (webpack фadvanced)
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
<<<<<<< HEAD
    ]
  }
}
=======
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

>>>>>>> 601b0c7 (webpack фadvanced)
