<template>
  <div>
    <h2 class="headline font-weight-bold mb-5 text-uppercase">
      {{ $t('contactUs.companyName') }}
    </h2>

    <p class="subtitle-1  mb-5" v-html="$t('contactUs.companyAddress')"></p>

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
      >,<a href="tel:+0959568171" class="white--text text-decoration-none"
        >095-956-8171</a
      >
    </p>

    <v-btn class="green darken-1 mb-8" @click="openLine" rounded>
      {{ $t('contactUs.line') }}
    </v-btn>

    <v-btn class="blue darken-3 ml-3 mb-8" @click="openFacebook" rounded>
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
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data() {
    return {};
  },
  methods: {
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
