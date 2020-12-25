const RENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  
  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  function reject() {
    if (that.state === PENDING) {
      that.state = REJECTED
    }

  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}



MyPromise.prototype.then = function (onFulFilled, onRejected) {
  const that = this
  onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r}

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulFilled)
    that.resolvedCallbacks.push(onRejected)

  }
  if (that.state === RESOLVED) {
    onFulFilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }

}