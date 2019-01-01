<template>
  <div>
    <h1>Random Joke</h1>
    <v-btn color="success" @click="getJokes()">Get a joke</v-btn>
    <h2>{{ joke }}</h2>
  </div>
</template>

<script>
export default {
  name: "Joke",
  methods: {
    getJokes() {
      this.$store.dispatch("getSingleJoke");
    }
  },
  mounted: function() {
    this.getJokes();
  },
  computed: {
    joke() {
      return this.$store.state.joke;
    }
  }
};
</script>

<style scoped></style>
