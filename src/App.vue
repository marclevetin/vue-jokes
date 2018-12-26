<template>
  <div>
    <navbar></navbar>
    <v-content transition="slide-x-transition">
      <v-container fluid> <router-view></router-view> </v-container>
    </v-content>
    <v-footer app></v-footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style></style>
