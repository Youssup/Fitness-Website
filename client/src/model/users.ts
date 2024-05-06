import { rest } from "./myFetch"

export interface User {
  id: number
  firstName: string
  lastName: string
  admin: boolean
  profileImage: string
  activities: Activity[]
  friends: number[]
}

export interface Activity {
  activityID: number
  date: string
  caloriesBurned: number
  distance: number
  image: string
  description: string
}

export async function getUsers(): Promise<User[]> {
  const users = await rest("/users/")
  return users
}

// export async function editUser(user: User) {
//   const index = data.users.findIndex(u => u.id === user.id);
//   data.users[index] = user;
// }

export async function editUser(user: User) {
  const response = await rest("/users/editUser", { user }, "PUT")
  return response
}

export async function addActivity(user: User | null, activity: Activity) {

  const userID = user?.id
  const response = await rest("/users/addActivity", { userID, activity }, "POST")
  return response
}
  // const index = data.users.findIndex(u => u.id === user?.id);
  // data.users[index].activities.push({ ...activity });

/*
export function deleteActivity(user : User | null, activity : Activity)
{
  const index = data.users.findIndex(u => u.id === user?.id);
  const activityIndex = data.users[index].activities.findIndex(a => a.activityID === activity.activityID);
  data.users[index].activities.splice(activityIndex, 1);
}
Doesn't work because the user doesn't get updated when the activity is deleted I'm guessing not really sure why.
*/


export async function editActivity(user: User | null, activity: Activity) {
  const response = await rest("/users/editActivity", { user, activity }, "PUT")
  return response
}

export async function deleteUser(user: User | null) {
  const userID = user?.id
  const response = await rest("/users/deleteUser", { userID }, "DELETE")
  return response

}
export async function deleteActivity(user: User | null, activity: Activity) {
  const userID = user?.id
  const activityID = activity.activityID
  const response = await rest("/users/deleteActivity", { userID, activityID }, "DELETE")
  return response
}


export async function createUser(user: User) {
  const response = await rest("/users/createUser", { user }, "POST")
  return response
}
// export function createUser(user: User) {
//   user.id = data.users.length + 1;
//   user.activities = [];
//   user.friends = [];
//   user.admin = false;
//   if (user.firstName == null) {
//     user.firstName = "Anonymous";
//   }
//   if (user.lastName == null) {
//     user.lastName = "Anonymous";
//   }
//   data.users.push(user);
// }

// export function checkUserProfileImage(user: User) {
//   if (user.profileImage == null) {
//     user.profileImage = "https://robohash.org/bob.png?set=set4";
//   }
// }

// export function getUserByID(id: number) {
//   return data.users.find(u => u.id === id);
// }

export async function getUserByID(id: number | any) {
  const response = await rest("/users/getUserByID", { id }, "POST")
  return response
}
