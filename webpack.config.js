const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = ['./src/index.js'];
const plugins = [new HtmlWebpackPlugin()];

module.exports = {
    entry,
    plugins,
}

if (process.argv.includes('--mode=development')) {
    entry.unshift('./support/rewiremock.js');
    
    const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');

    const RewireMockPlugin = require('rewiremock/webpack/plugin');

    plugins.push(
        new NamedModulesPlugin(),
        new HotModuleReplacementPlugin(),
        new RewireMockPlugin(),
    );
}