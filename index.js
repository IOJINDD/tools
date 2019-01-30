/**
 * 字符串循环复制
 * @param {String} str - 需要复制的 字符串
 * @param {Number} count - 复制的数量
 */
function repeatStr (str, count) {
  var text = ''
  for (var i = 0; i < count; i++) {
    text += str
  }
  return text
}

/**
 *
 * @param {String} str - 需要判断的字符串
 * @param {String} type - 判断的类型
 */
function checkType (str, type) {

}

function checkPwd (str) {
  var nowLv = 0
  if (str.length < 6) {
    return nowLv
  }
  if (/[0-9]/.test(str)) {
    nowLv++
  }
  if (/[a-z]/.test(str)) {
    nowLv++
  }
  if (/[A-Z]/.test(str)) {
    nowLv++
  }
}
