<template>
  <section id="our-service" class="grey lighten-3">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3 preline">
        {{ $t('ourService.title') }}
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            min-height="500"
            flat
          >
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase preline"
              v-text="title"
            ></v-card-title>

            <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'OurService',
  components: {},
  data() {
    return {};
  },
  computed: {
    features() {
      return [
        {
          icon: 'mdi-web',
          title: this.$t('ourService.web.title'),
          text: this.$t('ourService.web.description'),
        },
        {
          icon: 'mdi-cellphone-android',
          title: this.$t('ourService.mobile.title'),
          text: this.$t('ourService.mobile.description'),
        },
        {
          icon: 'mdi-chart-areaspline',
          title: this.$t('ourService.data.title'),
          text: this.$t('ourService.data.description'),
        },
      ];
    },
  },
};
</script>
<style scoped>
.preline {
  white-space: pre-line;
}
</style>
