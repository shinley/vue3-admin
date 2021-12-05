/**
 * 判断是否为外部资源
 * @param {*} path
 */
export function isExternal (path) {
  const reg = /^(https?:|mailto:|tel:)/
  const result = reg.test(path)
  console.log('检测结果', result)
  return result
}
