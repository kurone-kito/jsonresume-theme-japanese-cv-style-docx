import ESLintPlugin from 'eslint-webpack-plugin';
import path from 'path';
import type webpack from 'webpack';
import { dependencies, name } from './package.json';
import { compilerOptions } from './tsconfig.json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DtsBundleWebpack = require('dts-bundle-webpack');

const createAliases = () => {
  const baseUrl = path.resolve(__dirname, compilerOptions.baseUrl || '.');
  return Object.fromEntries(
    Object.entries(compilerOptions.paths || {}).map(([key, [value]]) => [
      key.replace('*', ''),
      path.resolve(baseUrl, value.replace('*', '')),
    ])
  );
};

export default <webpack.Configuration>{
  cache: true,
  devtool: false,
  externals: Object.keys(dependencies || {}),
  mode: 'production',
  module: { rules: [{ test: /\.ts$/, use: 'ts-loader' }] },
  output: {
    filename: 'index.js',
    path: __dirname,
    library: name,
    libraryTarget: 'umd',
  },
  plugins: [
    new DtsBundleWebpack({
      indent: '  ',
      main: 'src/index.d.ts',
      name,
      out: '../index.d.ts',
    }),
    new ESLintPlugin({}),
  ],
  resolve: { alias: createAliases(), extensions: ['.js', '.json', '.ts'] },
  target: 'node',
};
