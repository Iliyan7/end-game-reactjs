const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// require('@babel/polyfill')

module.exports = {
  entry: ['@babel/polyfill', './src/index'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: './'
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ],
};