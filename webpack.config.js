const path = require(`path`);
const publicDirectory = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: publicDirectory
  },
  devServer: {
    contentBase: publicDirectory,
    open: true,
    inline: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};
