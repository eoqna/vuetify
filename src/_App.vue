<template>
  <v-app>
    <v-app-bar
      app
      v-if="$vuetify.breakpoint.xsOnly"
    >
    </v-app-bar>

    <v-navigation-drawer app />

    <v-main>
      <v-container fluid>
        컨텐츠 영역
      </v-container>
    </v-main>

    <v-footer app />
  </v-app>
</template>

<script>
export default {

};
</script>
