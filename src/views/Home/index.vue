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
  metaInfo: {
    meta: [
      {
        name: 'robots',
        content: `all`,
      },
      {
        name: 'googlebot',
        content: `all`,
      },
      {
        name: 'title',
        content: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
      },
      {
        name: 'description',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://superdev.tech/',
      },
      {
        property: 'og:title',
        content: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
      },
      {
        property: 'og:description',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        property: 'og:image',
        content: '/superdev_cover.png',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://superdev.tech/',
      },
      {
        property: 'twitter:title',
        content: `Superdev — Build Web/Mobile Apps and Data science works for your business`,
      },
      {
        property: 'twitter:description',
        content: `We're a software development company in Bangkok, Thailand`,
      },
      {
        property: 'twitter:image',
        content: '/superdev_cover.png',
      },
    ],
  },
};
</script>
