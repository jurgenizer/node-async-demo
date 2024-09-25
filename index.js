//Patterns to  deal with asynchronous code
// Callbacks
// Promises
// Async/Await

console.log('Before');

// Original Promised-based approach
getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('Commits', commits))
.catch(err => console.log('Error:', err.message));

// Modified Async and Await approach
// Whenever you use the Await operator in a function, you have to decorate that function with the Async modifier
// And the way we get the errors is using the Try..Catch block
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos  = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log('Commits from the syntactical suger async/await function:', commits);
    } 
    catch (err) {
         console.log('Error:', err.message)
    }
   
}

// Look at the return type of the functiion (hint: Promise<void>)
displayCommits();



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
            //resolve({ username, repositories: ['repo1', 'repo2', 'repo3'] });
            reject(new Error('Could not get the repos'));
        }, 2000)
    })
}