<template >
  <v-list>
    <task-item
      v-for="task in task_list"
      :key="task.id"
      :task="task"
      :global_tag_list="global_tag_list"
    />
  </v-list>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from "../types/Task";
import { Tag } from "../types/Tag";
import TaskItem from "./TaskItem.vue";

@Component({
  components: {
    TaskItem
  }
})
export default class TaskList extends Vue {
  @Prop() public task_list!: Task[];
  @Prop() public global_tag_list!: Tag[];
}
</script>
