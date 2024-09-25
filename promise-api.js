// Create a Promise that is already resolved
// const promiseResolved = Promise.resolve({ id: 1 });
// promiseResolved.then(result => console.log(result));

// Create a Promise that is already rejected
// const promiseRejected = Promise.reject(new Error('reason for rejection'));
// promiseRejected.catch(error => console.log(error));

// Running Promises in Parallel
// Exclude 'reject' so we only have new Promise((resolve)...
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Asynchronous operation 1 ...');
        resolve(1);
    }, 900);
}); 

// Include 'reject' so we have new Promise((resolve, reject)...
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asynchronous operation 1 ...');
        reject(new Error('because something failed'));
    }, 1000);
}); */

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Asynchronous operation 2 ...');
        resolve(2);
    }, 1000);
});

// Promise.all
/* Promise.all([p1,p2])
.then(result => console.log(result))
.catch(err => console.log('Error: ', err.message)); */

//See also Promise.race
Promise.race([p1,p2])
.then(result => console.log(result))
.catch(err => console.log('Error: ', err.message));