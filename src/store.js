import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'default',
    allJokes: []
  },
  mutations: {
    setSingleJoke(state, payload) {
      state.joke = payload;
    },
    setAllJokes(state, payload) {
      state.allJokes = payload;
    }
  },
  actions: {
    async getSingleJoke({ commit }) {
      try {
        let response = await fetch("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        }).then(data => data.json()).then(myObject => myObject.joke);
        commit("setSingleJoke", response);
      } catch (error) {
        commit("setSingleJoke", "Oops.  Problem with API.");
      }
    },
    async getAllJokes({ commit }, term) {
      try {
        let response = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
          headers: { Accept: "application/json"} 
        }).then(data => data.json()).then(response => response.results);
        commit("setAllJokes", response)
      } catch {
        commit("setAllJokes", [])
      }
    }
  }
});
