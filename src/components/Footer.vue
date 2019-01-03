<template>
  <v-footer app dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="green lighten-2">
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link.icon" class="mx-3" dark icon :href="link.url" target="blank">
          <v-icon size="24px">{{link.icon}}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="green darken-3 justify-center">
        &copy;2019 —
        <strong>Marc Levetin</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "CustomFooter",
  data: () => ({
    links: [
    { icon: "fas fa-hat-wizard", url: "http://www.derbyhat.org"},
    { icon:"fab fa-linkedin", url: "https://www.linkedin.com/in/marclevetin" },
    { icon:"fab fa-twitter", url: "https://twitter.com/_derbyhat" },
    ]
  })
};
</script>

<style scoped></style>