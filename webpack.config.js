module.exports = {
    entry: "./app/run.js",
    output: {
        path: (__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: ['es2015']
            }
          },
          {
            test: /\.css$/,
            loader: "style!css"
          }
        ]
    }
};