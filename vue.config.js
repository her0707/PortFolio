const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/")
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  outputDir: "docs"
};
