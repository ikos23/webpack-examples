// https://v4.webpack.js.org/configuration/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/* https://v4.webpack.js.org/plugins/copy-webpack-plugin/ */
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  /* https://v4.webpack.js.org/concepts/#mode */
  mode: "development",
  /* https://v4.webpack.js.org/configuration/entry-context/#context */
  context: path.resolve(__dirname, "src"),

  entry: {
    app: "./index.js",
  },

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      /* https://v4.webpack.js.org/guides/asset-management/#loading-css */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      /* https://v4.webpack.js.org/guides/asset-management/#loading-images */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "../index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
