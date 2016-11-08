import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import { argv } from 'yargs';
import path from 'path';
import config from './common.config';

const combinConfig = {
  iife: function iife() {
    config.moduleName = 'rollupVue';
    config.format = 'iife';
    config.dest = path.resolve(__dirname, '../dist/iife', 'rollupVue.min.js');
    config.plugins.push(uglify({}, minify));
  },
  es: function es() {
    config.format = 'es';
    config.dest = path.resolve(__dirname, '../dist/es', 'rollupVue.js');
  },
  cjs: function cjs() {
    config.format = 'cjs';
    config.dest = path.resolve(__dirname, '../dist/cjs', 'index.js');
  },
};
combinConfig[argv.env]();
export default config;
