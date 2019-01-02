<template>
  <v-footer app dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="green lighten-2">
        <strong class="subheading">Find me online</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>

        <v-btn v-for="link in links" :key="link.icon" class="mx-3" dark icon>
          <v-icon size="24px">web</v-icon>
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
    icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
    ],
    links: [
    { icon:"fab fa-twitter", url: "" },
    { icon:"fab fa-linkedin", url: "" },
    { icon: "fas fa-hat-wizard", url: ""}
    ]
  })
};
</script>

<style scoped></style>