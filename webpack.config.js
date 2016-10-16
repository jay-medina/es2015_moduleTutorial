module.exports = {
    entry: "./app/run.js",
    output: {
        path: (__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: ['es2015']
            }
          }
        ]
    }
};