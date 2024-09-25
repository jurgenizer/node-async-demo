// Create a Promise that is already resolved

const promiseResolved = Promise.resolve({id:1});
promiseResolved.then(result => console.log(result));

// Create a Promise that is already rejected

const promiseRejected =  Promise.reject(new Error('reason for rejection'));
promiseRejected.catch(error => console.log(error));