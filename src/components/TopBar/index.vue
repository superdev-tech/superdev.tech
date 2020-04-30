<template>
  <v-app-bar app dark height="80">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="80"
      />
      <v-toolbar-title class="font-weight-black headline">
        SUPERDEV
      </v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <LocaleChanger />
  </v-app-bar>
</template>

<script>
import LocaleChanger from '@/components/LocaleChanger';
export default {
  name: 'TopBar',
  components: { LocaleChanger },
};
</script>

<style scoped></style>
