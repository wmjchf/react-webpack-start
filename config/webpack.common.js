const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: ["./example/index.tsx"],
  output: {
    // 输出目录
    path: path.join(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "bufang-ui": path.resolve(__dirname, "../components")
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/, // 不解析node_modules
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: [".tsx", ".ts", ".js"]
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", // 最终创建的文件名
      template: path.join(__dirname, "../public/index.html") // 指定模板路径
    })
  ]
};
