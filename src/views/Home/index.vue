<template>
  <div class="home">
    <LandingPage />
    <OurService />
    <TechStack />
    <OurStory />
    <ContactUs />
  </div>
</template>

<script>
import LandingPage from './modules/LandingPage';
import OurService from './modules/OurService';
import TechStack from './modules/TechStack';
import OurStory from './modules/OurStory';
import ContactUs from './modules/ContactUs';

export default {
  name: 'Home',
  components: { LandingPage, OurService, TechStack, OurStory, ContactUs },
  data() {
    return {};
  },
};
</script>
