import Vue from "vue";
import Router from "vue-router";
import Search from "./views/Search.vue";
import About from "./views/About.vue";
import Joke from "./views/Joke.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: About
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/joke",
      name: "joke",
      component: Joke
    }
  ]
});
