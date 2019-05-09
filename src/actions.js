const FOO_TYPE = 'FOO';

const foo = () => {
  return {
    type: FOO_TYPE,
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Completed');
      }, 3000);
    })
  }
}

export {
  FOO_TYPE,
  foo
}