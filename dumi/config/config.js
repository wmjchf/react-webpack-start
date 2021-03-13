export default {
  title: "bufang-ui",
  chainWebpack(memo) {
    memo.plugins.delete("copy");
  },
  mode: "site"
};
