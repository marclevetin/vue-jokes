<template>
  <div>
    <h1>Random Joke</h1>
    <v-btn color="success" @click="getJokes()">Get a joke</v-btn>
    <single-joke 
      :text="joke"
    >
    </single-joke>
  </div>
</template>

<script>
import SingleJoke from '@/components/SingleJoke';

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
  },
  components: {
    SingleJoke
  }
};
</script>

<style scoped></style>
