<script setup lang="ts">
import { IndexKind } from 'typescript';
import { type User, getUsers } from '../model/users';
import { ref } from 'vue';
import Login from '../components/Login.vue';
import { getSession } from '@/model/session';
const session = getSession();
</script>

<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="card" style="margin-top: 20px;">
        <header class="card-header">
          <p class="card-header-title">
            <img :src="session.user?.profileImage" alt="Placeholder image" class="image is-16x16">
            Statistics for {{ session.user?.firstName + " " + session.user?.lastName }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p><strong>Calories Burned:</strong> {{ session.user?.activities.reduce((total, activity) => total + activity.caloriesBurned, 0) }}</p>
            <p><strong>Distance:</strong> {{ session.user?.activities.reduce((total, activity) => total + activity.distance, 0) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>