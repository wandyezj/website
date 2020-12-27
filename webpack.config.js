const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".html"],
    },
    module: {
        rules: [

                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: "html-loader"
                  },
                  {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: "assets/resource"
                  }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            
        }),
        new HtmlWebpackPlugin( {
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"],
        }),
        // new CopyWebpackPlugin([
        //     {
        //         to: "index.css",
        //         from: "./src/index.css"
        //       },
        // ])
    ],
};
