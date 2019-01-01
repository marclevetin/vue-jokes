<template>
  <v-app>
    <div>
      <navbar></navbar>
      <v-content transition="slide-x-transition">
        <v-container align-center>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </div>
  </v-app>
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
