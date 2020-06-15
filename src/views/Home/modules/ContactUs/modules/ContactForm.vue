<template>
  <div>
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

            <v-col cols="12">
              <v-row justify="center">
                <vue-recaptcha
                  ref="recaptcha"
                  @verify="onVerify"
                  @expired="onExpired"
                  :sitekey="sitekey"
                  :loadRecaptchaScript="true"
                >
                </vue-recaptcha>
              </v-row>
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
    <ThanksMessageModal ref="ThanksMessageModal" />
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import ThanksMessageModal from './ThanksMessageModal';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'ContactForm',
  components: { ThanksMessageModal, VueRecaptcha },
  data() {
    return {
      sitekey: process.env.VUE_APP_GOOGLE_RECAPTCHA_KEY,
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
      const url = process.env.VUE_APP_CONTACTUS_API;
      const params = _.clone(this.params);

      try {
        this.openThanksMessage();
        this.clearAllParam();

        const response = await axios.get(url, { params });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    openThanksMessage() {
      this.$refs.ThanksMessageModal.openDialog();
    },
    clearAllParam() {
      for (let k of Object.keys(this.params)) {
        this.params[k] = null;
      }
    },
    onVerify: function(response) {
      console.log('Verify: ' + response);
    },
    onExpired: function() {
      console.log('Expired');
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>
<style scoped></style>
