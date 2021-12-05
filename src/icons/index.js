import SvgIcon from '@/components/SvgIcon'
// 1.导入所有的svg图标
// 2. 完成SvgIcon的全局注册
const svgRequire = require.context('./svg', false, /\.svg$/)
// 返回了一个Require函数， 可以接收一个request参数， 用于require的导入
// 该函数提供了三个属性， 可以通过svgRequire.keys()获得所有的svg图标
// 遍历图标， 把图标作为request参娄传入到svgRequire导入函数中， 完成本地svg图标注册

svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}
