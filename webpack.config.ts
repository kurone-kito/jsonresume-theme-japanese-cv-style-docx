import path from 'path';
import 'ts-polyfill/lib/es2019-object';
import webpack from 'webpack';
import { dependencies, name } from './package.json';
import { compilerOptions } from './tsconfig.json';

const DtsBundleWebpack = require('dts-bundle-webpack');

const createAliases = () => {
  const baseUrl = path.resolve(__dirname, compilerOptions.baseUrl || '.');

  return Object.fromEntries(
    Object.entries(compilerOptions.paths || {}).map(([key, [value]]) => [
      key.replace('*', ''),
      path.resolve(baseUrl, value.replace('*', ''))
    ])
  );
};

export default (source: webpack.Configuration): webpack.Configuration => ({
  ...source,
  cache: true,
  devtool: false,
  externals: Object.keys(dependencies || {}),
  mode: 'production',
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { configFile: '.eslintrc.yml' }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: __dirname,
    library: name,
    libraryTarget: 'umd'
  },
  plugins: [
    new DtsBundleWebpack({
      indent: '  ',
      main: 'src/index.d.ts',
      name,
      out: '../index.d.ts'
    })
  ],
  resolve: {
    alias: createAliases(),
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  target: 'node'
});
