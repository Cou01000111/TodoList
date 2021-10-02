<template>
  <v-app>
    <global-header />
    <router-view class="mx-5" />
    <!-- <global-footer /> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GlobalHeader from "./components/Header.vue";
/* import GlobalFooter from "./components/Footer.vue"; */


@Component({ components: { GlobalHeader, /* GlobalFooter */ } })
export default class App extends Vue {

}
</script>
