/* craco.config.js */
const path = require('path');
const resolve = dir => path.join(__dirname, './', dir);

/* support antd and less */
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    webpack: {
        alias: {
            'src': resolve('src')
        }
    },
    plugins: [{
        plugin: CracoAntDesignPlugin,
        options: {
            customizeTheme: {
                "@primary-color": "#1DA57A",
                "@link-color": "#1DA57A"
            }
        }
    }]
}