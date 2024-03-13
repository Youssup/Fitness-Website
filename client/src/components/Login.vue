<script setup lang="ts">
import { type User, getUsers } from "../model/users";
import { getSession } from '../model/session'
import { ref } from "vue";

let isActiveLogin = ref(false);
function toggleMenuLogin() {
    isActiveLogin.value = !isActiveLogin.value;
    console.log({ isActiveLogin: isActiveLogin.value });
}

const modal = ref(false);
function toggleModal() {
    modal.value = !modal.value;
    console.log({ modal: modal.value });
}

const session = getSession()

const users = getUsers()


</script>

<template>
    <div class="navbar-item">
        <div class="buttons">
            <a @click="toggleModal" v-if="session.user == null" class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <div @click="toggleMenuLogin" :class="{ 'dropdown is-active': isActiveLogin }" class="is-right">
                <div class="dropdown-trigger">
                    <button v-if="session.user == null" class="button is-primary" aria-haspopup="true"
                        aria-controls="dropdown-menu">
                        <span>
                            <strong>Login</strong>
                        </span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <div v-for="user in users" class="dropdown-item" style="display: inline-flex;">
                            <img :src="user.profileImage" alt="Placeholder image" class="dropdown-item">
                            <a @click.prevent="session.user = user" class="dropdown-item">
                                {{ user.firstName + " " + user.lastName }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a v-if="session.user != null" class="navbar-item">
            <strong>{{ session.user.firstName + " " + session.user.lastName }}</strong>
        </a>
        <img v-if="session.user != null" :src="session.user.profileImage" class="profile-image" />
        <button @click.prevent="session.user = null" v-if="session.user != null" class="button is-primary">
            <strong>Logout</strong>
        </button>
    </div>
    <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h1 class="title">Sign Up</h1>
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
                        <button @click="toggleModal" class="button is-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="toggleModal" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<style scoped>
</style>