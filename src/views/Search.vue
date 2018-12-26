<template>
  <div>
  <h1>Search the API</h1>
  <input placeholder="Enter search term" v-model="searchTerm"/> 
  <button @click="getJokes(searchTerm)">Submit</button>
  <ul>
    <li v-for="(joke, index) in allJokes" :key="index">{{joke.joke}}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    getJokes(term) {
      this.$store.dispatch("getAllJokes", term)
    }
  },
  computed: {
    allJokes() {
      return this.$store.state.allJokes;
    }
  }
}
</script>