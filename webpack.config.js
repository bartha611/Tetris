module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  devtool: "source-map",
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
      }
    ]
  }
};
