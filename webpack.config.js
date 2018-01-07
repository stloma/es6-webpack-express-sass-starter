const path = require('path')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/client/scripts/index.js', './src/client/styles/index.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/app.bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, './dist'),
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3000'
      }
    },
    hot: true,
    inline: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-2']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
