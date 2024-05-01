//Object literal for now, will be replaced with mongoDB or get data from a data folder.

const users = [
    {
        "id": 1,
        "firstName": "Terry",
        "lastName": "Medhurst",
        "admin": false,
        "profileImage": "https://robohash.org/Mavis.png?set=set4",
        "activities": [
            {
                "activityID": 1,
                "date": "2019-01-01",
                "caloriesBurned": 200,
                "distance": 2.5,
                "image": "https://robohash.org/Mavis.png?set=set4",
                "description": "Morning Jog in the Park"
            },
            {
                "activityID": 2,
                "date": "2019-01-02",
                "caloriesBurned": 250,
                "distance": 3.0,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            }
        ],
        "friends": [2, 3]
    },
    {
        "id": 2,
        "firstName": "Jerry",
        "lastName": "Medhurst",
        "admin": false,
        "profileImage": "https://robohash.org/Terry.png?set=set4",
        "activities": [
            {
                "activityID": 3,
                "date": "2019-01-01",
                "caloriesBurned": 220,
                "distance": 2.7,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            },
            {
                "activityID": 4,
                "date": "2019-01-02",
                "caloriesBurned": 240,
                "distance": 2.9,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            }
        ],
        "friends": [1, 3]
    },
    {
        "id": 3,
        "firstName": "Barry",
        "lastName": "Medhurst",
        "admin": false,
        "profileImage": "https://robohash.org/Terrill.png?set=set4",
        "activities": [
            {
                "activityID": 5,
                "date": "2019-01-01",
                "caloriesBurned": 180,
                "distance": 2.2,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            },
            {
                "activityID": 6,
                "date": "2019-01-02",
                "caloriesBurned": 200,
                "distance": 2.5,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            }
        ],
        "friends": [2, 1]
    },
    {
        "id": 4,
        "firstName": "Yousup",
        "lastName": "Song",
        "admin": true,
        "profileImage": "https://robohash.org/jum.png?set=set4",
        "activities": [
            {
                "activityID": 7,
                "date": "2019-01-01",
                "caloriesBurned": 250,
                "distance": 3.0,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            },
            {
                "activityID": 8,
                "date": "2019-01-02",
                "caloriesBurned": 270,
                "distance": 3.3,
                "image": "https://example.com/activity1.jpg",
                "description": "Morning Jog in the Park"
            }
        ],
        "friends": []
    }
]

async function getUsers() {
    return  users;
}

async function getUserById(id) {
    return users.find(user => user.id === id);
}

async function searchUsers(keyword) {
    return users.filter(user => user.firstName.toLowerCase().includes(keyword.toLowerCase()));
}

async function editUser(userID) {
    return users.find(user => user.id === userID);
}

async function addActivity(userID, activity) {
    const user = users.find(user => user.id === userID);
    user.activities.push(activity);
}

async function editActivity(userID, activityID, activity) {
    const user = users.find(user => user.id === userID);
    const index = user.activities.findIndex(activity => activity.activityID === activityID);
    user.activities[index] = activity;
}

async function createUser(user) {
    user.id = users.length + 1;
    users.push(user);
}

async function login(username, password) {
    const user = users.find(user => user.firstName.toLowerCase() === username.toLowerCase());
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