function myPerson(name, age) {
    var that = {}
    that.name = name
    that.age = age
    return that
}
var person1 = myPerson('wn', 18)
var person2 = myPerson('woniu', 18)
// console.log(person1);
// console.log(person2);

function Car(color) {
    this.color = color
    this.name = 'BMW'
    return function () { }
}
var car = new Car('red')
console.log(car)