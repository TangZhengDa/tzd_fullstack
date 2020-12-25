function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      reject('err')
    }, 1000)
  })
}

function b() {
  setTimeout(() => {
    console.log('bbb');
  })
}

a().catch(b)