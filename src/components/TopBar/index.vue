<template>
  <v-app-bar app dark height="100">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="100"
      />
      <v-toolbar-title class="font-weight-black headline">
        SUPERDEV
      </v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style scoped></style>
