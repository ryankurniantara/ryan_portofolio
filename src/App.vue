<template>
  <Navbar :sections="sections" />

  <Intro />
  <AboutMe />
  <Portofolio />
  <Testimonials />
  <Contact />

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Intro from "./components/Intro.vue";
import AboutMe from "./components/AboutMe.vue";
import Portofolio from "./components/Portofolio.vue";
import Testimonials from "./components/Testimonials.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

export default {
  components: {
    Navbar,
    Intro,
    AboutMe,
    Portofolio,
    Testimonials,
    Contact,
    Footer,
  },
  setup() {
    const sections = ref(["Home", "About", "Projects", "Contact"]);
    const currentSection = ref("Home");

    return { sections, currentSection };
  },

  watch: {
    currentSection(newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style></style>
