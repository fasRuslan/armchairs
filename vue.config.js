// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/assets/styles/style.scss";'
            }
        }
    }
}