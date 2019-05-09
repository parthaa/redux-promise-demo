export default function () {
  return {
    type: 'FOO',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('foo');
      }, 3000);
    })
  }
}