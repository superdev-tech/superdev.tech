<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">
          {{ $t('contactUs.thanksMessage.title') }}
        </v-card-title>

        <v-card-text>
          {{ $t('contactUs.thanksMessage.detail') }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ThanksMessageModal',
  data() {
    return { dialog: false };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>
<style scoped></style>
