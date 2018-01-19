const path = require('path');

const PATHS = {
  DIST: path.resolve(__dirname, "dist")
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: PATHS.DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    contentBase: PATHS.DIST
  },
  devtool: "source-map"
};
