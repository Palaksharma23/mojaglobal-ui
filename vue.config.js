const { defineConfig } = require("@vue/cli-service");
const NodePolyfillplugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("polyfills").use(NodePolyfillplugin);
  },
});
