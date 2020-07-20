/*大于0小于100数字*/
export function validateNumber(val) {
  console.log(val)
  const reg = /^\d\.([1-9]{1,2}|[0-9][1-9])$|^[1-9]\d{0,1}(\.\d{1,2}){0,1}$|^100(\.0{1,2}){0,1}$/;
  return reg.test(val)
}

export function validdateMobile(val) {
  const length = val.length;
  var mobile = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  return length == 11 && mobile.test(val)
}
// 字母加数字
export function validPassword(val) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
  return reg.test(val)
}
// 大小写加数字
export function validPassword2(val) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,21}$/;
  return reg.test(val)
}

export function validEmail(val) {
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  return reg.test(val)
}
//验证数字包括浮点数
export function validFloatNumber(val) {
  var reg = /^[0-9]+\.?[0-9]*$/;
  return reg.test(val);
}
// 如 1 、19、 119、 1110、等等等
export function validPlusNumber(val) {
  const reg = /^[1-9]\d*$/;
  return reg.test(val)
}
// 数字加小数点
export function validNumber(val) {
  const reg = /^[\d\.\,]*$/;
  return reg.test(val)
}
// 数字加小数点
export function validIDCard(val) {
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  return reg.test(val)
}
