const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./bundle")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
