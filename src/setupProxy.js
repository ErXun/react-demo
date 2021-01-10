// react 脚手架代理配置
/**
 * setupProxy.js
 * 优点:可以配置多个代理，灵活控制请求是否走代理;配置繁琐，前端请求资源时必须添加前缀。
 */

const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/proxy1', { // 所有带有 proxy1 前缀的请求都会转发给 target
      target: 'http://localhost:8000', // 配置转发的目标地址
      changeOrigin: true, // 配置服务器接收请求头中的 host 字段值
      /*
        changeOrigin: true, 服务器接受请求头中 host 为 localhost:8000
        changeOrigin: false, 服务器接受请求头中 host 为 localhost:xx00(前端项目本地接口地址)
        changeOrigin 的默认值为 false,但一般情况下都设为 true
      */
      pathRewrite: { '^/proxy1': '' }  // 取出请求前缀，保证交给后台服务器的地址是正常请求地址
    }),
    proxy('/proxy2', {
      target: 'http://localhost:7000',
      changeOrigin: true,
      pathRewrite: { '^/proxy2': '' }
    })
  )
}