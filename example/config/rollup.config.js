import path from 'path';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const config = {
  entry: path.resolve(__dirname, '../app', 'index.js'),
  sourceMap: false,
  useStrict: false,
  format: 'es',
  dest: path.resolve(__dirname, '../dist/assets', 'index.js'),
  plugins: [
    vue(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    serve({
      contentBase: 'example',
      historyApiFallback: true,
      host: 'localhost',
      port: 8088
    }),
  ],
};
export default config;
