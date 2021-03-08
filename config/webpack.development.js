const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  watch: true,
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
    host: "0.0.0.0", // 可以使用手机访问
    port: 8080,
    historyApiFallback: true // 该选项的作用所有的404都连接到index.html
    // proxy: {
    //   // 代理到后端的服务地址，会拦截所有以api开头的请求地址
    //   "/api": "http://localhost:3000",
    // },
  }
});
