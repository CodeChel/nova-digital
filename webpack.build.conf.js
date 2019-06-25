const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');


const buildWebpackConfig = merge(baseWebpackConfig,{
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /node_modules/,
                loader: 'babel-loader',

                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                use:[
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            pngquant: {
                                quality: '75-80',
                                speed: 4
                            }
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
       
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
})