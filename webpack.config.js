// This config is for building dist files
const webpack = require('webpack');

// 通过antd-tools/lib/getWebpackConfig获取webpack配置
const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');

// noParse still leave `require('./locale' + name)` in dist files
// ignore is better
// http://stackoverflow.com/q/25384360
function ignoreMomentLocale(webpackConfig) {
    delete webpackConfig.module.noParse;
    webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
}

function addLocales(webpackConfig) {
    let packageName = 'antd-with-locales';
    if (webpackConfig.entry['antd.min']) {
        packageName += '.min';
    }
    webpackConfig.entry[packageName] = './index-with-locales.js';
    webpackConfig.output.filename = '[name].js';
}

/**
 * 在antd-tools/lib/getWebpackConfig获取webpack配置基础上
 * 生产环境下去掉忽略MomentLocale，并进行代码最小化处理见addLocales()
 * */
module.exports = function (webpackConfig) {
    webpackConfig = getWebpackConfig(webpackConfig, true);
    if (process.env.RUN_ENV === 'PRODUCTION') {
        webpackConfig.forEach((config) => {
            ignoreMomentLocale(config);
        addLocales(config);
    });
    }
    return webpackConfig;
};
