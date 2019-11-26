const path = require("path");
const webpack = require("webpack");

module.exports = () => {
  var port = process.env.PORT || 3000;
  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", 'sass-loader']
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      globalObject: typeof self !== 'undefined' ? self : this,
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: port,
      hotOnly: true,
      historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };
};