const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    // 输出目录
    path: path.join(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/, //不解析node_modules
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      // 自动修复
      fix: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", // 最终创建的文件名
      template: path.join(__dirname, "../public/index.html") // 指定模板路径
    })
  ]
};
