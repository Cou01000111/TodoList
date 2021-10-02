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

<style scoped>
.v-application {
  color: aquamarine;
  overflow-y: scroll;
}

/* スクロールの幅の設定 */
.v-application::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* スクロールの背景の設定 */
.v-application::-webkit-scrollbar-track {
  border-radius: 5px;
  background: rgba(110, 108, 108, 0.2);
}

/* ドラックできるスクロール部の設定 */
.v-application::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #ff0000;
}
</style>
