const path = require('path');

module.exports = {
  entry: './webview-src/main.ts',
  mode: "development",
  externals: {
    },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          configFile: 'webview-src/tsconfig.json'
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
        options: {
          outputPath: "out/assets"
        }
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 500,
    ignored: /node_modules/
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'html')
  },
};