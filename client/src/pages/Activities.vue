<script setup lang="ts">
import { IndexKind } from 'typescript';
import { type User, getUsers } from '../model/users';
import { ref } from 'vue';
const users = ref([] as User[]);
users.value = getUsers();

</script>

<template>
    <div class="columns is-centered">
  <div class="column is-half">
    <div v-for="user in users" class="card">
      <header class="card-header">
        <p class="card-header-title">
            <img :src="user.profileImage" alt="Placeholder image" class="image is-16x16">
            Statistics for {{ user.firstName + " " + user.lastName }}
        </p>
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
</template>

<style scoped>
</style>