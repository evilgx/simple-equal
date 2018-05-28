const babel =  require('rollup-plugin-babel');

module.exports = {
    entry:'./index.js',
    format:'umd',
    dest:'./dist/index.js',
    name:'simpleEqual',
    plugins:[
        babel({
            exclude:"node_modules/*"
        })
    ]
}