<script setup lang="ts">
import { getUsers, getUserByID, type User, type Activity } from '../model/users';
import { onMounted, ref } from 'vue';
import { getSession } from '@/viewModel/session';

const activities = ref([] as Activity[]);
const friends = ref([] as User[]);
onMounted(async () => {
  const friendsList = session.user?.friends;
  if (friendsList) {
    friendsList.forEach(async (id) => {
      const user = await getUserByID(id);
      activities.value.push(user.activities)
      friends.value.push(user);
      console.log({ friends: friends.value[0] });
      console.log({ activities: activities.value[0] });
    });
  }
});

const modal = ref(false);
function toggleModal() {
  modal.value = !modal.value;
  console.log({ modal: modal.value });
}
const users = getUsers();
const session = getSession();

const refUser = ref(null);
</script>

<template>
  <div class="container" style="display: flex; justify-content: center; align-items: center; margin-bottom: 30px;">
    <p class="title is-1">Activities Page</p>
  </div>
  <div class="columns is-centered">
    <div class="column is-half">
      <div v-for="friend in friends">
        <div v-for="activity in activities" :key="activity.activityID">
            <div class="card-image">
              <figure class="image is-3by2">
                <img :src=activity.image alt="Activity image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="friend?.profileImage" alt="Profile image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ friend?.firstName }} {{ friend?.lastName }}</p>
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