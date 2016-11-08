import path from 'path';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const config = {
  entry: path.resolve(__dirname, '../components', 'index.js'),
  sourceMap: false,
  useStrict: false,
  plugins: [
    vue(),
    babel({
      compact: false,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ],
};
export default config;
