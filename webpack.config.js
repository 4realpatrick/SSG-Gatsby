module.exports = require("@talentui/webpack-config")({
  entry: "./src/index.tsx",
  useCommonChunk: false,
  devServer: {
    port: 3001,
  },
});
