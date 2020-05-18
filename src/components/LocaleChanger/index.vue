<template>
  <div>
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang.toUpperCase() }}
      </option>
    </select> -->

    <v-btn color="grey darken-2 white--text" rounded @click="changeLang">
      {{ displayText }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {};
    // return { langs: ['en', 'th'] };
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale == 'th' ? 'en' : 'th';
    },
  },
  computed: {
    displayText() {
      return this.$i18n.locale == 'th' ? 'English' : 'ภาษาไทย';
    },
  },
};
</script>
