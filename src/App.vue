<template>
  <div class="w-screen">
    <Navbar :sections="sections" />
    <div class="flex flex-col flex-1">
      <Intro />
      <AboutMe />
    </div>
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import Navbar from "./components/Navbar.vue";
import Intro from "./components/Intro.vue";
import AboutMe from "./components/AboutMe.vue";
import { ref } from "vue";

export default {
  components: { Navbar, MainContent, Intro, AboutMe },
  setup() {
    const sections = ref(["Home", "About", "Projects", "Contact"]);
    const currentSection = ref("Home");

    console.log(sections, currentSection);

    return { sections, currentSection };
  },

  watch: {
    currentSection(newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style lang="scss" scoped></style>
