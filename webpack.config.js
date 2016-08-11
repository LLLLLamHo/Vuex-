/**
 * Created by Administrator on 2016/8/11.
 */
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    // .vue的配置。需要单独出来配置。
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue']
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}