module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    debug: true,
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders:  ['babel-loader', 'jsx-loader']
                // exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
       contentBase: './'
    }
};
