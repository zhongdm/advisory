
import {phoneReg} from './regex'

/**
 * 验证11位手机号码
 * @param {*} rules 
 * @param {*} value 
 * @param {*} callback 
 */
export const validatePhone = (rule, value, callback) => {
  console.log(!!value && !(phoneReg.test(value)), phoneReg.test(value))
  setTimeout(() => {
    if (!!value && !(phoneReg.test(value))) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
  }, 0)
  
}
