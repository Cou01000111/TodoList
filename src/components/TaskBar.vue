<template >
  <v-switch label="降順/昇順" v-model="isOrder"></v-switch>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TaskBar extends Vue {
  private isOrder = true;
}
</script>
