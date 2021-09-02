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
        data: [],
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
export function teach() {
    return service({
        url: request_ul.teach,
        data: [],
        method: 'get'
    })
}
//课程进详情
export function teacher(arg) {
    return service({
        url: request_ul.teacher + arg,
        method: 'get'
    })
}
export function mainCourse(arg) {
    return service({
        url: request_ul.mainCourse,
        data: arg,
        method: 'post'
    })
}
export function nav() {
    return service({
        url: request_ul.nav,
        data: [],
        method: 'get'
    })
}

export function signRecord() {
    return service({
        url: request_ul.signRecord,
        data: [],
        method: 'get'
    })
}
// 大威天龙

export function courseBasis() {
    return service({
        url: request_ul.courseBasis,
        data: [],
        method: 'get'
    })
}
// 详情进详情
export function courseInfo(arg) {
    return service({
        url: request_ul.courseInfo + arg,
        method: 'get'
    })
}
// 咨询头部
export function classify() {
    return service({
        url: request_ul.classify,
        data: [],
        method: 'get'
    })
}
export function index(arg) {
    return service({
        url: request_ul.index,
        data: arg,
        method: 'post'
    })
}
// 咨询进详情

export function detail(arg) {
    return service({
        url: request_ul.detail,
        data: arg,
        method: 'post'
    })
}
