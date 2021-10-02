<template>
  <div id="main" class="ma-5">
    <task-bar class="mt-15" />
    <task-list :task_list="task_list" :global_tag_list="global_tag_list" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskBar from '../components/TaskBar.vue'
import TaskList from '../components/TaskList.vue'
import { Task } from "../types/Task";
import { Tag } from "../types/Tag";
import { getUserData } from "../storage";

@Component({
  components: {
    TaskBar, TaskList
  },
})
export default class Home extends Vue {
  task_list = getUserData().task_list;
  global_tag_list = getUserData().global_tag_list;
}
</script>
