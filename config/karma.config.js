const babel = require('rollup-plugin-babel');
const vue = require('rollup-plugin-vue2');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './../test/**/*.spec.js',
    ],
    preprocessors: {
      './../test/**/*.spec.js': ['rollup'],
    },
    singleRun: true,
    browsers: ['PhantomJS'],
    rollupPreprocessor: {
      plugins: [
        vue(),
        babel({
          exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
      ],
      // will help to prevent conflicts between different tests entries
      sourceMap: false,
      format: 'cjs',
    },
  });
};
