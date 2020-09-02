const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = ['./src/index.js'];
const plugins = [new HtmlWebpackPlugin()];

module.exports = {
    entry,
    plugins,
}
