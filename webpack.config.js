var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: isProduction ? 'webpack.min.js' : 'webpack.js'
    },
    module: {
        loaders: [
            {
              test: /.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
};
