<template>
  <v-row class="">
    <v-col class="col-1 mt-2 pl-10">{{ task.priority }}</v-col>
    <v-col class="col-1 mt-2">{{ task.deadline }}</v-col>
    <v-col class="mt-2">
      <v-row>
        <v-col>{{ task.name }} </v-col>
        <v-col><tag-list :tag_list="tag_used_in_task_list" /></v-col>
      </v-row>
    </v-col>
    <v-col class="col-1 text-right pa-0 pt-3">
      <v-icon-btn iconName="mdi-pencil" />
      <v-icon-btn iconName="mdi-delete" />
    </v-col>
    <v-col class="col-1 text-right pr-6">
      <v-icon-btn iconName="mdi-plus" />
    </v-col>
  </v-row>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from "../types/Task";
import { Tag } from "../types/Tag";
import VIconBtn from "./VIconBtn.vue";
import TagList from "./TagList.vue";

@Component({ components: { VIconBtn, TagList } })
export default class TaskItem extends Vue {
  @Prop() public task!: Task;
  @Prop() public global_tag_list!: Tag[];

  get tag_used_in_task_list(): Tag[] {
    return this.global_tag_list.filter(tag => this.task.tag_id_list.includes(tag.id))
  }
}
</script>
