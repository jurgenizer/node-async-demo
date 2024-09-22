//Patterns to  deal with asynchronous code
// Callbacks
// Promises
// Async/Await

console.log('Before');
getUser(1, (user) => {
    //console.log('The user: ', user);
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('The repos: ', repos);
    })
});
console.log('After');

function getUser(id, callback) {
    //simulate a long-running operation
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'jurgen' });
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        callback({ username, repositories: ['repo1', 'repo2', 'repo3'] });
    }, 2000)
}