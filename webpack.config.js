const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js"
    }
}

