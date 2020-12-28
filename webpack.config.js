const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = async (env, options) => {
    const isDevelopment = options.mode === "development";

    const config = {
        devtool: isDevelopment ? "inline-source-map" : "source-map",
        entry: "./src/index.ts",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                  },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use: "assets/resource",
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: isDevelopment ? "website development" : "Website",
                template: "./src/index.html",
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        to: "index.css",
                        from: "./src/index.css"
                      },
                ]}),
        ],
    };

    return config;
};
