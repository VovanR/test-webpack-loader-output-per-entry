const path = require("path");

const publicPath = "./dist";

module.exports = {
  entry: {
    "about/index": "./src/a/index.js",
    "home/index": "./src/h/index.js"
  },
  output: {
    path: path.join(__dirname, publicPath),
    filename: "[name].js",
    // chunkFilename: "chunk-[id]/[chunkhash:8].chunk.js",
    // make sure that publicPath end up with /
    // publicPath: (publicPath + "/").replace(/\/\/$/, "/")
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name]-[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vendor: path.resolve(__dirname, "vendor")
    }
  }
};
