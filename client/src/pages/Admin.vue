<script setup lang="ts">
import { IndexKind } from 'typescript';
import { type User, getUsers } from '../model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
users.value = getUsers();

function deleteUser (index: number)
{
    users.value.splice(index, 1);
}
</script>

<template>
    <div>
        <h1>Admin</h1>
    </div>
    <div v-for="(user, index) in users" :key="user.id" class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="user.profileImage" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ user.firstName + " " + user.lastName }}</p>
                    <p class="subtitle is-6">UserID: {{ user.id }}</p>
                </div>
                <div class="button-container">
                    <button @click="deleteUser(index)" class="button is-danger is-focused">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>