<template >
  <v-switch label="降順/昇順" v-model="isOrder"></v-switch>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      isOrder: true
    }
  }
})
</script>
