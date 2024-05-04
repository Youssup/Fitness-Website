const fs = require('fs/promises');

const fileName = __dirname + '/../data/users.json';

async function getData() {
    try {
        const content = await fs.readFile(fileName, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Error reading data:', error);
        throw error;  // Rethrow or handle as needed
    }
}

async function save(data) {
    try {
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
        throw error;  // Rethrow or handle as needed
    }
}

async function getUsers() {
    const data = await getData();
    return data.users
}

async function getUserById(id) {
    const data = await getData();
    return data.users.find(user => user.id === id);
}
//might need later
async function searchUsers(keyword) {
    const data = await getData();
    return data.filter(user => user.firstName.toLowerCase().includes(keyword.toLowerCase()));
}

async function editUser(userID) {
    const data = await getData();
    return data.users.find(user => user.id === userID);
}

async function addActivity(userID, activity) {
    const data = await getData();
    const user = data.users.find(user => user.id === userID);
    user.activities.push(activity);
    await save(data);
    return activity;
}

async function editActivity(userID, activityID, activity) {
    const data = await getData();
    const user = data.users.find(user => user.id === userID);
    const index = user.activities.findIndex(activity => activity.activityID === activityID);
    user.activities[index] = activity;
}

async function createUser(user) {
    const data = await getData();
    user.id = data.users.length + 1;
    users.push(user);
}

async function login(username, password) {
    const data = await getData();
    const user = data.users.find(user => user.firstName.toLowerCase() === username.toLowerCase());
    if (user && user.password === password) {
        return { ...user, password: undefined };
    }
    return null;
}

module.exports = {
    getUsers,
    getUserById,
    searchUsers,
    editUser,
    addActivity,
    editActivity,
    createUser,
    login
}