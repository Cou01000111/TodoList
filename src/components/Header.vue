<template>
  <v-app-bar app color="primary">
    <div class="d-flex align-center">
      <span style="color: white">Todo List +</span>
    </div>

    <v-spacer></v-spacer>
    <v-btn @click="changeColor" class="mx-2" icon small color="white">
      <v-icon> mdi-invert-colors </v-icon>
    </v-btn>
  </v-app-bar>
</template>
