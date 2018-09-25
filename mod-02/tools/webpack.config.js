module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main-bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
