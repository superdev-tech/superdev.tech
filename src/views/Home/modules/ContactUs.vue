<template>
  <section id="contact-us">
    <v-sheet id="contact" color="#333333" dark tag="section" tile>
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
          {{ $t('contactUs.title') }}
        </h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-row>
            <v-col cols="12">
              <v-text-field
                flat
                :label="$t('contactUs.name')"
                solo
                v-model="params.name"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                flat
                :label="$t('contactUs.email')"
                solo
                v-model="params.email"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                flat
                :label="$t('contactUs.subject')"
                solo
                v-model="params.phone"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                flat
                :label="$t('contactUs.message')"
                solo
                v-model="params.message"
              ></v-textarea>
            </v-col>

            <v-col class="mx-auto" cols="auto">
              <v-btn
                color="blue white--text"
                x-large
                rounded
                @click="submitMessage()"
              >
                {{ $t('contactUs.submit') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </v-sheet>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ContactUs',
  components: {},
  data() {
    return {
      params: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },
  methods: {
    async submitMessage() {
      try {
        const url = process.env.VUE_APP_CONTACTUS_API;
        const params = this.params;
        const response = await axios.get(url, { params });
        console.log(response);
        alert('Thanks for contact us.');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
