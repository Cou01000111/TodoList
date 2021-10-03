<template>
  <v-list-item class="pr-0">
    <v-list-item-content>
      <v-row class="">
        <v-col class="col-1 mt-1 pl-5">
          <v-checkbox
            class="ma-0"
            v-model="task.done"
            value="value"
          ></v-checkbox
        ></v-col>

        <v-col class="col-2 mt-3">
          <v-row>
            <v-col class="pb-0 pr-0">{{ task.priority }}</v-col>
            <v-col class="pb-0 pr-0">{{ text_deadline }}</v-col>
          </v-row>
        </v-col>

        <v-col>
          <v-row>
            <v-col class="mt-3">{{ task.name }} </v-col>
            <v-col><tag-list :tag_list="tag_used_in_task_list" /></v-col>
          </v-row>
        </v-col>

        <v-col class="col-2 text-right pl-0 mr-3">
          <v-icon-btn iconName="mdi-pencil" />
          <v-icon-btn class="mr-2" iconName="mdi-delete" />
          <v-btn
            icon
            v-if="task.child_list.length != 0"
            @click="child_shown = !child_shown"
          >
            <v-icon>{{ show_icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div v-show="child_shown">
          <v-list>
            <task-item
              v-for="task in task.child_list"
              :key="task.id"
              :task="task"
              :global_tag_list="global_tag_list"
            />
          </v-list>
        </div>
      </v-expand-transition>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
/* eslint-disable no-console */
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from "../types/Task";
import { Tag } from "../types/Tag";
import VIconBtn from "./VIconBtn.vue";
import TagList from "./TagList.vue";

@Component({ name: 'TaskItem', components: { VIconBtn, TagList, TaskItem } })
export default class TaskItem extends Vue {
  @Prop() public task!: Task;
  @Prop() public global_tag_list!: Tag[];

  child_shown = true;

  get tag_used_in_task_list(): Tag[] {
    return this.global_tag_list.filter(tag => this.task.tag_id_list.includes(tag.id))
  }

  get text_deadline(): string {
    if (this.task.deadline.length < 8)
      return "";
    var year: string = this.task.deadline.slice(0, 4);
    var month: string = this.task.deadline.slice(4, 6);
    var day: string = this.task.deadline.slice(6, 8);
    return `${year}/${month}/${day}`;
  }

  get show_icon() {
    return this.child_shown ? "mdi-minus" : "mdi-plus"
  }
  /*   childOpen() {

    } */
}
</script>

<style scoped>
.v-messages {
  height: 0;
}
</style>
