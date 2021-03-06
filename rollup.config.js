import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
const pkg = require('./package.json');

export default {
    entry: './src/index.js',
    format: 'iife',
    dest: 'dist/' + pkg.name + '.js',
    moduleName:'test', //rename into you own project namespace
    plugins: [
        resolve(),
        babel({
            //exclude: 'node_modules/**'
        })]
};