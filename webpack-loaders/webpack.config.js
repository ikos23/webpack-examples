const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "my.bundle.js",
    path: path.resolve(__dirname, "dist"),
    /* https://webpack.js.org/configuration/output/#outputpublicpath */
    publicPath: "./dist/",
  },

  module: {
    rules: [
      /* in order to import xml files we need xml-loader */
      {
        test: /\.xml$/,
        loader: "xml-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
    ],
  },
};
