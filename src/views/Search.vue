<template>
  <div>
    <h1>Search the API</h1>

    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
      <v-text-field
        v-model="searchTerm"
        :rules="searchRules"
        label="Search term"
        @keyup.enter="getJokes(searchTerm)"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" @click="getJokes(searchTerm)" color="success">Submit</v-btn>
      <v-btn small flat @click="clear">Clear</v-btn>
    </v-form>

    <v-list v-if="allJokes.length">
      <v-list-tile v-for="(joke, index) in allJokes" :key="index" @click>
        <v-list-tile-content>
          <v-list-tile-title class="list__tile__override">{{joke.joke}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list v-else="!allJokes.length">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>No results found.</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => {
    return {
      searchTerm: "",
      searchRules: [v => !!v || "Search term is required"],
      valid: true
    };
  },
  methods: {
    getJokes(term) {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("getAllJokes", term);
        this.clear();
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  computed: {
    allJokes() {
      return this.$store.state.allJokes;
    }
  }
};
</script>

<style scoped>
  .list__tile__override {
    overflow: visible;
    white-space: normal;
    min-height: fit-content;
  }
</style>