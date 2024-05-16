<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { getUserByFirstName } from "@/model/users";
const name = ref("");
const selected = ref();
const data = ref([]);

const setData = async (firstName: string) => {
    data.value = await getUserByFirstName(firstName);
};
watch(name, (newName: string) => {
    setData(newName);
});

const filteredDataArray = computed(() => data.value);

const showData = () => {
    
};
</script>

<template>
  <main class="hero is-primary is-large main">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Fitness</h1>
        <h2 class="subtitle">No pain, no gain. Workout, don't be lame</h2>
        <section>
          <o-field label="Find a user!">
            <o-autocomplete
                v-model="name"
                rounded
                expanded
                placeholder="First Name"
                icon="search"
                clearable
                open-on-focus
                :data="filteredDataArray"
            @select="(option: any) => (selected = option)">
            <template #empty>No results found</template>
            </o-autocomplete>
          </o-field>
          <p><b>Selected:</b> {{ selected?.firstName }}</p>
          <div v-if="selected">
            <h1 class="title">Activities</h1>
            <div v-for="activity in selected.activities" :key="activity.activityID" class="card"
                style="margin-top: 20px;">
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

        </section>

      </div>
    </div>
  </main>
</template>

<style>
.title {
  width: 100%;
  text-align: center;
}
</style>
