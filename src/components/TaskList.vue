<template >
  <v-list>
    <Task />
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import Task from "./Task.vue";
export default Vue.extend({
  components: { Task },
  data() {
    return {
      isOrder: true
    }
  }
})
</script>
