import data from "../data/users.json"
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

export async function editUser(user: User) {
  const index = data.users.findIndex(u => u.id === user.id);
  data.users[index] = user;
}

export async function addActivity(user: User | null, activity: Activity) {

  const userID = user?.id
  const response = await rest("/users/addActivity", { userID, activity }, "POST")
  console.log(response.json())
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

export function editActivity(user: User | null, activity: Activity) {
  const index = data.users.findIndex(u => u.id === user?.id);
  const activityIndex = data.users[index].activities.findIndex(a => a.activityID === activity.activityID);
  data.users[index].activities[activityIndex] = activity;
}

export function createUser(user: User) {
  user.id = data.users.length + 1;
  user.activities = [];
  user.friends = [];
  user.admin = false;
  if (user.firstName == null) {
    user.firstName = "Anonymous";
  }
  if (user.lastName == null) {
    user.lastName = "Anonymous";
  }
  data.users.push(user);
}

export function checkUserProfileImage(user: User) {
  if (user.profileImage == null) {
    user.profileImage = "https://robohash.org/bob.png?set=set4";
  }
}

export function getUserByID(id: number) {
  return data.users.find(u => u.id === id);
}