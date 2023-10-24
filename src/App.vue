<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item link to="/artists">
          <v-list-item-title>Artistas</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/discos">
          <v-list-item-title>Discos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Música App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
