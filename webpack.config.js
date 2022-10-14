const path = require('path');

module.exports ={
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
};