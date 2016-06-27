const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: "./main.coffee",
    output: {
        path: __dirname + '/public',
        filename: "all.js"
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: "coffee"
        }],
        noParse: [
            /lodash/, /jquery/
        ]
    },
    resolve: {
        extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //     _: __dirname + '/node_modules/lodash/lodash.min.js',
        //     $: __dirname + '/node_modules/jquery/dist/jquery.min.js',
        //     // Mousetrap: __dirname + '/node_modules/mousetrap/mousetrap.min.js'
        // })
    ],

    devtool: 'inline-source-map',

};