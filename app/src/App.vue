<template>
  <v-app>
    <v-app-bar
        app
        dark
    >
      <div class="d-flex align-center">
        <h1>Deed Generator</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <home-view></home-view>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "@/components/HomeView"

export default {
  name: 'App',

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
};
</script>
