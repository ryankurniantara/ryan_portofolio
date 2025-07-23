<template>
  <!-- Biography & Image -->
  <section
    id="about"
    class="w-screen min-h-full flex flex-col items-center justify-center bg-white md:bg-white"
  >
    <div
      v-observe
      class="flex flex-col md:flex-row rounded-lg items-center md:p-10 p-0 opacity-0 max-w-7xl"
    >
      <!-- Gambar -->
      <img
        v-observe
        src="../assets/images/RyankReal.png"
        alt="ProfileReal"
        class="w-[200px] h-[250px] object-[center_10%] mt-10 transform transition duration-700 ease-out hover:scale-105"
      />

      <!-- Bio -->
      <div
        v-observe
        class="flex flex-col rounded-lgtext-gray-900 md:pl-10 p-8 opacity-0"
      >
        <h1 class="text-4xl text-gray-900">Biography</h1>
        <br />
        <p>
          I am a developer focused on mobile and web experiences. I am
          passionate about creating beautiful and functional applications that
          provide value to users. I have experience working with a variety of
          technologies and frameworks, including React, React Native, Flutter
          and Node.js. I am always looking to learn new things and improve my
          skills, and I am excited about the opportunity to work on new and
          challenging projects.
        </p>
        <br />
        <!-- Button Click to url resume -->
        <a
          href="https://drive.google.com/file/d/1SVecpkVysB3UYp1UkYmf9VuQ-wahGzxG/view?usp=sharing"
          target="_blank"
          rel="noopener"
          class="border border-black rounded-md hover:bg-black hover:text-white transition py-2 px-4 flex flex-row items-center justify-center gap-2 w-full md:w-40 mx-auto md:mx-0"
        >
          <IconFile size="25" />
          Resume
        </a>
      </div>

      <!-- Connect -->
      <div v-observe class="flex flex-col p-0 md:p-6 opacity-0">
        <h1 class="text-2xl text-gray-900 font-bold">Let's Connect</h1>
        <br />
        <div class="flex flex-row flex-wrap gap-2">
          <a
            href="https://www.instagram.com/ryan_kurniantara/"
            target="_blank"
            rel="noopener"
            class="group transition-transform hover:scale-125"
          >
            <IconBrandInstagram
              :color="hovered === 'instagram' ? '#E1306C' : 'black'"
              size="25"
              @mouseenter="hovered = 'instagram'"
              @mouseleave="hovered = ''"
            />
          </a>
          <a
            href="https://www.facebook.com/terwaqwrew/"
            target="_blank"
            rel="noopener"
            class="group transition-transform hover:scale-125"
          >
            <IconBrandFacebook
              :color="hovered === 'facebook' ? '#1877F3' : 'black'"
              size="25"
              @mouseenter="hovered = 'facebook'"
              @mouseleave="hovered = ''"
            />
          </a>
          <a
            href="https://github.com/ryankurniantara"
            class="group transition-transform hover:scale-125"
            target="_blank"
            rel="noopener"
          >
            <IconBrandGithub
              :color="hovered === 'github' ? '#6e5494' : 'black'"
              size="25"
              @mouseenter="hovered = 'github'"
              @mouseleave="hovered = ''"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/i-gd-agus-ryan-kurniantara-5843501b3/"
            target="_blank"
            class="group transition-transform hover:scale-125"
            rel="noopener"
          >
            <IconBrandLinkedin
              :color="hovered === 'linkedin' ? '#0A66C2' : 'black'"
              size="25"
              @mouseenter="hovered = 'linkedin'"
              @mouseleave="hovered = ''"
            />
          </a>
        </div>
      </div>

      <br />
      <br />
    </div>
  </section>
</template>
<script>
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFile,
} from "@tabler/icons-vue";

export default {
  components: {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconFile,
  },
  data() {
    return {
      hovered: "",
    };
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.remove("opacity-0", "animate-fade-in-up");
              void el.offsetWidth; // force reflow
              el.classList.add("animate-fade-in-up");
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out both;
}
</style>
