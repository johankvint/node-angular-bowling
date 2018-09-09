const path = require('path');
const webpack = require('webpack');

const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const config = {
  entry: { 'server': './src/server.ts' },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  target: 'node',

  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsConfigPathsPlugin()],
    modules: [
      "node_modules"
    ]
  },

  module: {
    rules: [{
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      }
    ]
  }
};

module.exports = config;