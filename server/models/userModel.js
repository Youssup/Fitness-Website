const fs = require('fs/promises');

const fileName = __dirname + '/../data/users.json';

async function getData() {
    try {
        const content = await fs.readFile(fileName, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Error reading data:', error);
        throw error;
    }
}

async function save(data) {
    try {
        await fs.writeFile(fileName, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data:', error);
        throw error; 
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

async function editUser(user) {
    const data = await getData();
    const index = data.users.findIndex(u => u.id === user.id);
    data.users[index] = user;
    await save(data);
    return user;
}

async function deleteUser(id) {
    const data = await getData();
    const index = data.users.findIndex(user => user.id === id);
    data.users.splice(index, 1);
    await save(data);
    return "success";
}

async function addActivity(userID, activity) {
    const data = await getData();
    const user = data.users.find(user => user.id === userID);
    user.activities.push(activity);
    await save(data);
    return activity;
}

async function editActivity(user, activity) {
    const data = await getData();
    const currentUser = data.users.find(u => u.id === user.id);
    const index = currentUser.activities.findIndex(a => a.activityID === activity.activityID);
    currentUser.activities[index] = activity;
    await save(data);
    return activity;
}


async function deleteActivity(userID, activityID) {
    const data = await getData();
    const user = data.users.find(user => user.id === userID);
    const index = user.activities.findIndex(activity => activity.activityID === activityID);
    user.activities.splice(index, 1);
    await save(data);
    return "success";
}
async function createUser(user) {
    const data = await getData();
    user.id = data.users.length + 1;
    data.users.push(user);
    await save(data);
    return user;
}


module.exports = {
    getUsers,
    getUserById,
    searchUsers,
    editUser,
    deleteUser,
    addActivity,
    editActivity,
    deleteActivity,
    createUser
}