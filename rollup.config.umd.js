import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/rollup.umd.js';
config.moduleName = 'DEMO';
config.sourceMap = true;

export default config;
