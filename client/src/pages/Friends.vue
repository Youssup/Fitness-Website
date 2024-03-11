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

</script>

<template>
    <div class="columns is-centered">
  <div class="column is-half">
    <div v-for="user in users" class="card">
      <header class="card-header" style="display: flex; align-items: center; justify-content: space-between;">
        <p class="card-header-title">
            <img :src="user.profileImage" alt="Placeholder image" class="image is-16x16">
            Statistics for {{ user.firstName + " " + user.lastName }}
        </p>
        <a @click="toggleModal" class="button is-primary">
              <strong>View Activities</strong>
            </a>
      </header>
      <div class="card-content">
        <div class="content">
          <p><strong>Calories Burned:</strong> {{ user.caloriesBurned }}</p>
          <p><strong>Distance:</strong> {{ user.distance }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal" :class="{ 'is-active': modal }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title">Statistics</h1>
      </div>
    </div>
    <button @click="toggleModal" class="modal-close is-large" aria-label="close"></button>
</div>
</template>

<style scoped>
</style>