<template>
  <section id="contact-us">
    <v-sheet id="contact" class="grey darken-4" dark tag="section" tile>
      <div class="py-6"></div>
      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-center text-uppercase">
          {{ $t('contactUs.title') }}
        </h2>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col
            cols="12"
            md="5"
            class="px-10 pa-md-5 mt-5 mb-5 mb-md-0 text-md-left text-center"
          >
            <ContactInfo />
          </v-col>
          <v-col class="pa-5">
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>

      <div class="py-6"></div>
    </v-sheet>
  </section>
</template>

<script>
import ContactInfo from './modules/ContactInfo';
import ContactForm from './modules/ContactForm';

export default {
  name: 'ContactUs',
  components: { ContactInfo, ContactForm },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
