<template>
  <section id="landing-page">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/landing_page.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  class="font-weight-light"
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                  ]"
                >
                  {{ $t('landingPage.welcome') }}
                </span>

                <br />

                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                  ]"
                  class="font-weight-black"
                >
                  {{ $t('landingPage.superdev') }}
                </span>
              </v-col>

              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#our-service')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'LandingPage',
  components: {},
  data() {
    return {};
  },
};
</script>
