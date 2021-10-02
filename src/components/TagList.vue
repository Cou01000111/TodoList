<template>
  <div id="tag_list">
    <v-chip
      v-for="tag in tag_list"
      :key="tag_list.indexOf(tag)"
      class="mr-1 mb-2"
      close
      small
      :color="tag.color"
      text-color="white"
      @click:close="chip2 = false"
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tag } from "../types/Tag";

@Component
export default class extends Vue {
  @Prop() public tag_list!: Tag[]
}
</script>
