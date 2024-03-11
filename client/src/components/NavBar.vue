<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { type User, getUsers } from '../model/users';

let isActive = ref(false);
function toggleMenu() {
  isActive.value = !isActive.value;
  console.log({ isActive: isActive.value });
}

let isActiveLogin = ref(false);
function toggleMenuLogin() {
  isActiveLogin.value = !isActiveLogin.value;
  console.log({ isActiveLogin: isActiveLogin.value });
}

const users = ref([] as User[]);
users.value = getUsers();

const currentUser = ref();
currentUser.value = null;
function setCurrentUser(user: User | null) {
  currentUser.value = user;
  console.log({ currentUser: currentUser.value });
}

const modal = ref(false);
function toggleModal() {
  modal.value = !modal.value;
  console.log({ modal: modal.value });
}
</script>


<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        Fitness App
      </RouterLink>
      <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive }" class="navbar-burger" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">
          Home
        </RouterLink>

        <RouterLink to="activities" v-if="currentUser" class="navbar-item">
          Activities
        </RouterLink>

        <RouterLink to="Friends" v-if="currentUser" class="navbar-item">
          Friends Activities
        </RouterLink>

        <RouterLink v-if="currentUser?.admin" to="admin" class="navbar-item">
          Admin
        </RouterLink>

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a @click="toggleModal" v-if="currentUser == null" class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <div @click="toggleMenuLogin" :class="{ 'dropdown is-active': isActiveLogin }" class="is-right">
              <div class="dropdown-trigger">
                <button v-if="currentUser == null" class="button is-primary" aria-haspopup="true"
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
                  <a @click="setCurrentUser(user)" v-for="user in users" class="dropdown-item">
                    <img :src="user.profileImage" alt="Placeholder image">
                    {{ user.firstName + " " + user.lastName }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a v-if="currentUser != null" class="navbar-item">
            <strong>{{ currentUser.firstName + " " + currentUser.lastName }}</strong>
          </a>
          <img v-if="currentUser != null" :src="currentUser.profileImage" class="profile-image" />
          <button @click="setCurrentUser(null)" v-if="currentUser != null" class="button is-primary">
            <strong>Logout</strong>
          </button>
        </div>
      </div>
    </div>
  </nav>
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
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password">
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
.router-link-active {
  border-bottom: 2px solid rgb(107, 230, 204);
}

.profile-image {
  padding-right: 10px;
  width: auto;
}

.navbar {
  height: 25px;
}
</style>