module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  mode: "production",
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
