import webpack from 'webpack';
import packageJson from './package.json';

const DtsBundleWebpack = require('dts-bundle-webpack');

export default (source: webpack.Configuration): webpack.Configuration => ({
  ...source,
  cache: true,
  devtool: false,
  externals: Object.keys(packageJson.dependencies || {}),
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
  plugins: [
    new DtsBundleWebpack({
      indent: '  ',
      main: 'src/index.d.ts',
      name: packageJson.name,
      out: '../index.d.ts'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  target: 'node'
});
