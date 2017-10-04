import commonjs from 'rollup-plugin-commonjs';
import npm from 'rollup-plugin-node-resolve';

export default {
    input: 'src/app.js',
    name: 'git-docs',
    output: [{
        file: 'dist/app.js',
        format: 'umd',
        exports: 'named',
    }],
    plugins: [
        npm({
            main: true,
            jsnext: true,
            browser: true,
        }),
        commonjs(),
    ],
};