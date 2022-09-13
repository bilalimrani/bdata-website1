const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  webpack5: false,
  images: {
    loader: "imgix",
    path: "",
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    config.future = {
      webpack5: true,
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
});
