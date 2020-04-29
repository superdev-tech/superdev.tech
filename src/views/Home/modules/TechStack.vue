<template>
  <section id="tech-stack">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? '' : 500"
      src="@/assets/tech_stack_bg.jpeg"
    >
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col>
            <div class="text-center">
              <div class="display-3 font-weight-black mb-4">
                {{ $t('techStack.title') }}
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mx-auto">
          <v-col v-for="[value, title] of stacks" :key="title" cols="12" md="3">
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: 'TechStack',
  components: {},
  data() {
    return {
      stacks: [
        ['Vue.js', 'Beautiful Website'],
        ['Node.js', 'Fastest API'],
        ['Flutter', 'Mobile App (Android & IOS)'],
        ['Python', 'Data science & Data engineering'],
      ],
    };
  },
};
</script>
