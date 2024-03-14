import { type User } from "../model/users";
import { reactive } from "vue";


const session = reactive({
    user: null as User | null
})

export function getSession(){
    return session;
}

export function login(user: User | null){
    session.user = user;
}