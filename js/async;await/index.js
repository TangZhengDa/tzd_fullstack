function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaaa')
            resolve()
        }, 1000)
    })
}
function b() {
    console.log('bbbb')
}
a()
    .then((resolve) => {
        //console.log(resolve)
        b()
    })


