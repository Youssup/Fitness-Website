<script setup lang="ts">
import { getUsers, getUserByID } from '../model/users';
import { ref } from 'vue';
import { getSession } from '@/viewModel/session';

const modal = ref(false);
function toggleModal() {
  modal.value = !modal.value;
  console.log({ modal: modal.value });
}
const users = getUsers();
const session = getSession();
</script>

<template>
  <div class="container" style="display: flex; justify-content: center; align-items: center; margin-bottom: 30px;">
    <p class="title is-1">Activities Page</p>
  </div>
  <div class="columns is-centered">
    <div class="column is-half">
      <div v-for="id in session.user?.friends" :key="id">
        <div v-for="activity in getUserByID(id)?.activities" :key="activity.activityID">
            <div class="card-image">
              <figure class="image is-3by2">
                <img :src=activity.image alt="Activity image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="getUserByID(id)?.profileImage" alt="Profile image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ getUserByID(id)?.firstName }} {{ getUserByID(id)?.lastName }}</p>
                </div>
              </div>

              <div class="content">
                {{ activity.description }}
                <time datetime="2016-1-1">{{ activity.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>