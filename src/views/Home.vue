<template>
  <TaskBar />
  <TaskList />
</template>

<script lang="ts">
import Vue from 'vue'
import TaskBar from '../components/TaskBar.vue'
import TaskList from '../components/TaskList.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    TaskBar, TaskList
  }
})
</script>
