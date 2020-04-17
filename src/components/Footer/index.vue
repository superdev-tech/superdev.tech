<template>
  <v-footer class="justify-center" color="#292929" height="100">
    <div class="title font-weight-light grey--text text--lighten-1 text-center">
      &copy; {{ new Date().getFullYear() }} — SUPERDEV CO., LTD. —
      <a href="https://github.com/superdev-tech/superdev.tech" target="_blank">
        Github
      </a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped></style>
