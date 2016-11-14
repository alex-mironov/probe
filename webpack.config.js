const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');

const PATHS = {
  src: path.join(__dirname, 'src'),
  // style: path.join(__dirname, 'src/styles/main.scss'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    src: PATHS.src + '/index.jsx',
    // style: PATHS.style,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
      }
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.src
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        include: PATHS.src
      },
      {
        test: /\.(png|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'start':
    config = merge(
      common,
      { entry: { vendor: ['react'] } },
      parts.clean(PATHS.build),
      parts.extractCSS(),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
    break;
  default:
    config = merge(
      common,
      parts.clean(PATHS.build),
      parts.extractCSS(),
      {
        // devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.minify()
    );
}

module.exports = validate(config);
