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
        name: 'description',
        content: `Description_En: We're a software development company in Bangkok Thailand, Description_Th: พวกเราคือบริษัทสัญชาติไทยที่รับพัฒนาเว็บไซต์และแอพพลิเคชั่นสำหรับองค์กรและธุรกิจแบบครบวงจร, Slogan: Software and Data work to serve, Name_En: Superdev, Name_Th: ซูเปอร์เดฟ`,
      },
      {
        name: 'robots',
        content: `all`,
      },
      {
        name: 'googlebot',
        content: `all`,
      },
    ],
  },
};
</script>
