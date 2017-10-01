const path = require('path');
const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  devtool: PROD ? '' : 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};