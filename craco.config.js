/* craco.config.js */
const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir);

module.exports = {
    webpack: {
        alias: {
            'src': resolve('src')
        }
    }
}