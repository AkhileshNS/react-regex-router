var path = require('path');

module.exports = {
  zmode: 'production',
  entry: './src/Router.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'Router.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
};
