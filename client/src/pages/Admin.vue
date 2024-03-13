<script setup lang="ts">
import { IndexKind } from 'typescript';
import { type User, getUsers } from '../model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
users.value = getUsers();

const modal = ref(false);
function toggleModal() {
    modal.value = !modal.value;
    console.log({ modal: modal.value });
}

function deleteUser(index: number) {
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
                    <button @click="toggleModal" class="button is-warning is-focused">Edit</button>
                    <button @click="deleteUser(index)" class="button is-danger is-focused">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h1 class="title">Edit User</h1>
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="First Name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Last Name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button @click="toggleModal" class="button is-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="toggleModal" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>