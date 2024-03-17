import data from "../data/users.json";

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

  export function getUsers(): User[] {
    return data.users;
}

export function editUser(user: User) {
  const index = data.users.findIndex(u => u.id === user.id);
  data.users[index] = user;
}

export function addActivity(user : User | null, activity : Activity)
{
  const index = data.users.findIndex(u => u.id === user?.id);
  data.users[index].activities.push({...activity});
}

/*
export function deleteActivity(user : User | null, activity : Activity)
{
  const index = data.users.findIndex(u => u.id === user?.id);
  const activityIndex = data.users[index].activities.findIndex(a => a.activityID === activity.activityID);
  data.users[index].activities.splice(activityIndex, 1);
}
Doesn't work because the user doesn't get updated when the activity is deleted I'm guessing not really sure why.
*/

export function editActivity(user : User | null, activity : Activity)
{
  const index = data.users.findIndex(u => u.id === user?.id);
  const activityIndex = data.users[index].activities.findIndex(a => a.activityID === activity.activityID);
  data.users[index].activities[activityIndex] = activity;
}

export function createUser(user: User) {
  user.id = data.users.length + 1;
  data.users.push(user);
}

export function checkUserProfileImage(user: User){
  if(user.profileImage==null) {
      user.profileImage = "https://robohash.org/bob.png?set=set4";
  }
}