let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    //*输入个格式
      .set('@',resolve('src'))
      //*给图片路径设置别名
      .set('assets',resolve('@/assets'))
  }
}