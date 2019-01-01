<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="green lighten-2"
      disable-resize-watcher
      temporary
    >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link :to="item.url">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
    class="green lighten-2"
    >
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-toolbar-side-icon>
      <router-link to="/">
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="white--text" flat v-for="item in items" :key="item.title" :to="item.url">{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      appTitle: "Jokes",
      drawer: false,
      items: [
        { title: "Random Joke", url: "/joke" },
        { title: "Search", url: "/search" },
        { title: "About", url: "/about" }
      ]
    };
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none; 
}
</style>
