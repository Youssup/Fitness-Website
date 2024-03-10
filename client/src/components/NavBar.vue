<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
  console.log({isActive: isActive.value});
}

let isActiveLogin = ref(false);
function toggleMenuLogin() {
  isActiveLogin.value = !isActiveLogin.value;
  console.log({isActiveLogin: isActiveLogin.value});
}
</script>


<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/home">
          Fitness App
        </a>
      <a role="button" @click="toggleMenu" :class="{'is-active': isActive}" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
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

        <RouterLink to="friends" class="navbar-item">
          Friends Activities
        </RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <div @click="toggleMenuLogin" :class="{'dropdown is-active': isActiveLogin}">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>
        Login
      </span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        User 1
      </a>
      <a class="dropdown-item">
        User 2
      </a>
      <a href="#" class="dropdown-item">
        User 3
      </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        Yousup
      </a>
    </div>
  </div>
</div>
          </div>
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