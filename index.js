//Patterns to  deal with asynchronous code
// Callbacks
// Promises
// Async/Await

console.log('Before');
//getUser(1, getRepositories);
console.log('After');

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000)
    })
}


function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'jurgen' });
        }, 2000)
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve({ username, repositories: ['repo1', 'repo2', 'repo3'] });
        }, 2000)
    })
}