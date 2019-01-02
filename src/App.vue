<template>
  <v-app>
    <div>
      <navbar></navbar>
      <v-content transition="slide-x-transition">
        <v-container align-center>
          <router-view></router-view>
        </v-container>
      </v-content>
      <custom-footer></custom-footer>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import CustomFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    CustomFooter
  }
};
</script>

<style></style>
