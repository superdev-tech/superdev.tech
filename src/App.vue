<template>
  <v-app>
    <TopBar />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: { TopBar, Footer },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
