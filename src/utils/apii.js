import service from './service'
import request_ul from './request_ul'

export function smsCode(arg) {
    return service({
        url: request_ul.smsCode,
        data: arg,
        method: 'post'
    })
}
// 登录
export function login(arg) {
    return service({
        url: request_ul.login,
        data: arg,
        method: 'post'
    })
}
// 密码验证
export function password(arg) {
    return service({
        url: request_ul.password,
        data: arg,
        method: 'post'
    })
}
// tabber
export function bottom() {
    return service({
        url: request_ul.bottom,
        data:[],
        method: 'get'
    })
}
// 首页轮播
export function banner() {
    return service({
        url: request_ul.banner,
        data: [],
        method: 'get'
    })
}
// 首页数据
export function appIndex() {
    return service({
        url: request_ul.appIndex,
        data: [],
        method: 'get'
    })
}