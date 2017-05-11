var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./js/app.jsx",
  output: { filename: "./js/out.js" },
  watch: true,
  module: {
  loaders: [
      {
      test: /\.jsx$/, exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'stage-2', 'react'] }
      },
      {
      test: /\.scss$/, exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin( { filename: 'stylesheet/css/style.css', disable: false, allChunks: true } )
    ]
}
