<script setup lang="ts">
import { IndexKind } from 'typescript';
import { type User, getUsers, addActivity, type Activity } from '../model/users';
import { ref } from 'vue';
import Login from '../components/Login.vue';
import { getSession } from '@/model/session';
const session = getSession();

const modal = ref(false);
function toggleModal() {
    modal.value = !modal.value;
    console.log({ modal: modal.value });
}

const newActivity = ref({} as Activity);

//addActivity(session.user, activity.value);
</script>

<template>
  <button @click="toggleModal()"class="button is-primary" style="display: block; margin: auto;">
    Add Activity
  </button>
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
      <div v-for="activity in session.user?.activities" :key="activity.activityID" class="card" style="margin-top: 20px;">
        <div class="card-content">
          <div class="content">
            <p><strong>Date:</strong> {{ activity.date }}</p>
            <p><strong>Calories Burned:</strong> {{ activity.caloriesBurned }}</p>
            <p><strong>Distance:</strong> {{ activity.distance }}</p>
            <p><strong>Description:</strong> {{ activity.description }} </p>
            <img :src="activity.image" alt="Activity image">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h1 class="title">Add Activity</h1>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="date" placeholder="Date" v-model="newActivity.date">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Calories Burned</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Calories Burned" v-model="newActivity.caloriesBurned">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Distance Ran</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Distance Ran" v-model="newActivity.distance">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Description" v-model="newActivity.description">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Image</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Image url" v-model="newActivity.image">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button @click="addActivity(session.user, newActivity); toggleModal()" class="button is-primary">Create Activity</button>
                    </div>
                </div>
            </div>
        </div>
        <button @click="toggleModal()" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<style scoped></style>