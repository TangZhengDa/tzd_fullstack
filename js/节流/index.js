//在规定的时间内，只触发一次

function throttle(fn, delay) {
    let prev = Date.now() - delay//上一次点击
    return function () {
        let now = Date.now()//这一次点击
        let context = this
        let arg = arguments
        if (now - prev >= delay) {
            fn.apply(context, arg)
            prev = Date.now()
        }
    }
}