<template>
  <section id="contact-us">
    <!-- <v-sheet id="contact" color="#333333" dark tag="section" tile> -->
    <v-sheet id="contact" class="grey darken-4" dark tag="section" tile>
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-center text-uppercase">
          {{ $t('contactUs.title') }}
        </h2>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col cols="12" md="5" class="px-10 pa-md-5 mt-5 mb-5 mb-md-0">
            <h2 class="headline font-weight-bold mb-5 text-uppercase">
              {{ $t('contactUs.companyName') }}
            </h2>

            <p
              class="subtitle-1  mb-5"
              v-html="$t('contactUs.companyAddress')"
            ></p>

            <p class="subtitle-1 mb-0">
              <img class="mr-3" :src="require('@/assets/ic_email.svg')" />
              <a
                @click="emailTo('contact@superdev.tech')"
                class="white--text text-decoration-none"
              >
                contact@superdev.tech
              </a>
            </p>

            <p class="subtitle-1 mb-3">
              <img class="mr-3" :src="require('@/assets/ic_tel.svg')" />
              <a href="tel:+0858091536" class="white--text text-decoration-none"
                >085-809-1536</a
              >,<a
                href="tel:+0959568171"
                class="white--text text-decoration-none"
                >095-956-8171</a
              >
            </p>

            <v-btn class="green darken-1 mb-8" @click="openLine" rounded>
              {{ $t('contactUs.line') }}
            </v-btn>

            <v-btn
              class="blue darken-3 ml-3 mb-8"
              @click="openFacebook"
              rounded
            >
              {{ $t('contactUs.facebook') }}
            </v-btn>

            <v-btn
              @click="openTrustmarkthai"
              width="150"
              height="70"
              class="d-block grey darken-4"
              tile
              icon
            >
              <img
                alt="trustmarkthai"
                width="120"
                :src="require('@/assets/dbd_logo.svg')"
              />
            </v-btn>
          </v-col>
          <v-col class="pa-5">
            <v-card class="py-5 px-10 pa-md-5 grey darken-3">
              <h2 class="headline font-weight-bold mb-3 text-uppercase">
                {{ $t('contactUs.subTitle') }}
              </h2>

              <v-theme-provider light>
                <v-form v-model="formValid">
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        flat
                        solo
                        :label="$t('contactUs.name')"
                        :rules="rules.name"
                        v-model="params.name"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        flat
                        solo
                        :label="$t('contactUs.email')"
                        :rules="rules.email"
                        v-model="params.email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        flat
                        solo
                        :label="$t('contactUs.phone')"
                        :rules="rules.phone"
                        v-model="params.phone"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        flat
                        solo
                        :label="$t('contactUs.message')"
                        :rules="rules.message"
                        v-model="params.message"
                      ></v-textarea>
                    </v-col>

                    <v-col class="mx-auto" cols="auto">
                      <v-btn
                        x-large
                        rounded
                        color="blue white--text"
                        :disabled="!this.formValid"
                        @click="submitMessage()"
                      >
                        {{ $t('contactUs.submit') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-theme-provider>
            </v-card>
          </v-col>
        </v-row>
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
      formValid: false,
      rules: {
        name: [(v) => !!v || this.$t('contactUs.formError.name')],
        email: [
          (v) => !!v || this.$t('contactUs.formError.email1'),
          (v) => /.+@.+/.test(v) || this.$t('contactUs.formError.email2'),
        ],
        phone: [(v) => !!v || this.$t('contactUs.formError.phone')],
        message: [(v) => !!v || this.$t('contactUs.formError.message')],
      },
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
    openTrustmarkthai() {
      const url =
        'https://www.trustmarkthai.com/callbackData/popup.php?data=d9c9d8ab47-20-5-065f0c412686551ef98efeb61e4272ab6ac';
      window.open(url, 'popup', 'width=700,height=800');
    },
    openLine() {
      const url = 'https://contact-card-gateway.superdev.tech/';
      window.open(url, '_blank');
    },
    openFacebook() {
      const url = 'https://www.facebook.com/superdev.tech/';
      window.open(url, '_blank');
    },
    emailTo(email) {
      window.open(`mailto:${email}`);
    },
  },
};
</script>
<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
