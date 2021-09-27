<template>
  <v-app>
    <global-header />
    <router-view />
    <global-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import GlobalHeader from "./components/Header.vue";
import GlobalFooter from "./components/Footer.vue";

export default Vue.extend({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data: () => ({
    //
  }),
});
</script>
