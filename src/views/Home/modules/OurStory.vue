<template>
  <section id="our-story">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">
        {{ $t('ourStory.title') }}
      </h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        {{ $t('ourStory.description') }}
      </v-responsive>
      <v-row>
        <v-col cols="12" sm="6">
          <v-avatar size="150px">
            <img src="@/assets/supanut_avatar.jpg" alt="Supanut" />
          </v-avatar>
          <div>Supanut Dokmaithong</div>
          <div>Co-Founder, CEO</div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-avatar size="150px">
            <img src="@/assets/tanapat_avatar.jpg" alt="Tanapat" />
          </v-avatar>
          <div>Tanapat chantarangkoon</div>
          <div>Co-Founder, COO</div>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: 'OurStory',
  components: {},
  data() {
    return {};
  },
};
</script>
