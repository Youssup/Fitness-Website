<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { type User, getUsers } from '../model/users';
import Login from './Login.vue';
import { getSession } from '@/model/session';

let isActive = ref(false);
function toggleMenu() {
  isActive.value = !isActive.value;
  console.log({ isActive: isActive.value });
}

const users = ref([] as User[]);
users.value = getUsers();

const session = getSession();
function setCurrentUser(user: User | null) {
  session.user = user
  console.log({ currentUser: session.user });
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

        <RouterLink to="activities" v-if="session.user" class="navbar-item">
          Activities
        </RouterLink>

        <RouterLink to="Friends" v-if="session.user" class="navbar-item">
          Friends Activities
        </RouterLink>

        <RouterLink v-if="session.user?.admin" to="admin" class="navbar-item">
          Admin
        </RouterLink>

      </div>
      <div class="navbar-end">
      </div>
    </div>
    <Login />
  </nav>
</template>
<style scoped>
.router-link-active {
  border-bottom: 2px solid rgb(107, 230, 204);
}

.navbar {
  height: 25px;
}
</style>