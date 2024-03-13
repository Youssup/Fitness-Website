import data from "../data/users.json";

export interface User {
  id: number
  firstName: string
  lastName: string
  admin: boolean
  caloriesBurned: number
  distance: number
  profileImage: string
  activities: Activity[]
}

export interface Activity {
  activityID: number
  date: string
  caloriesBurned: number
  distance: number
  activityImage: string
  activityDescription: string
}


  export function getUsers(): User[] {
    return data.users;
}