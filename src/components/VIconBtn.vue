<template>
  <v-btn icon :color="iconColor">
    <v-icon>{{ iconName }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VIconBtn extends Vue {
  @Prop() public iconName!: string;
  @Prop({ default: "white" }) public iconColor!: string;
}
</script>
