const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 9000,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ico$/,
        use: [
          'file-loader?name=[name].[ext]'
        ]
      },
      {
        test: /\.ttf$/,
        use: [
          'url-loader?name=[name].[ext]'
        ]
      }
    ]
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Redux: path.resolve(__dirname, 'src/redux'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Decorators: path.resolve(__dirname, 'src/decorators'),
      constants$: path.resolve(__dirname, 'src/constants/index.js')
    }
  }
};
