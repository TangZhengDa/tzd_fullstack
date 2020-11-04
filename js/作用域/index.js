function doSomething(a) {
    b = a + doSomethingElse(a * 2)
    console.log(b * 3)
}
function doSomethingElse(c) {
    return c - 1
}
var b;
doSomething(2)