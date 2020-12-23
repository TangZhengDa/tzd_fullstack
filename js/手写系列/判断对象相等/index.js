
var a = [1]
var b = [1]
console.log(eq(a, b)); // true

// +0 === -0
// (+0).toString() // '0'
// (-0).toString() // '0'

function eq(a, b) {
  // 区分+0, -0
  if (a === b) return a != 0 || 1 / a === 1 / b;
  // NaN
  if (a !== a) return b != b
  // null
  if (a == null || b == nuil) return false

  let type = typeof (a);
  if (type !== 'function' && type !== 'object' && typeof (b) != 'object') return false
  
}

console.log(eq(NaN, NaN)); // true

let toString = Object.prototype.toString
toString.call('wn')
toString.call(new String('wn'))
console.log('wn' + '' === new String('wn') + '');

