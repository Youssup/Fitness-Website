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

</script>


<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="home" class="navbar-item">
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
        <RouterLink to="home" class="navbar-item">
          Home
        </RouterLink>

        <RouterLink to="admin" class="navbar-item">
          Admin
        </RouterLink>

        <RouterLink to="activities" class="navbar-item">
          Activities
        </RouterLink>

        <RouterLink to="Friends" class="navbar-item">
          Friends Activities
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="currentUser==null" class="button is-primary">
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
                    {{ user.firstName + " " + user.lastName }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a v-if="currentUser!=null" class="navbar-item">
              <strong>{{ currentUser.firstName + " " + currentUser.lastName }}</strong>
            </a>
            <button @click="setCurrentUser(null)" v-if="currentUser!=null" class="button is-primary">
              <strong>Logout</strong>
            </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  border-bottom: 2px solid rgb(107, 230, 204);
}
</style>