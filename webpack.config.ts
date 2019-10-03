import webpack from 'webpack';
import packageJson from './package.json';

export default (source: webpack.Configuration): webpack.Configuration => ({
  ...source,
  cache: true,
  devtool: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc.yml'
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: __dirname,
    library: packageJson.name,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  target: 'node'
});
