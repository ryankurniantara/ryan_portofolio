<template>
  <section
    id="home"
    class="relative min-h-full flex flex-col items-center justify-center mx-auto p-12 md:px-16 overflow-hidden"
  >
    <!-- Background Lingkaran -->
    <div
      class="absolute flex items-center justify-center -right-10 top-80 -translate-y-1/2 z-0 pointer-events-none"
    >
      <div
        class="absolute w-[200px] h-[200px] border border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[400px] h-[400px] border border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[600px] h-[600px] border border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[800px] h-[800px] border border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[1000px] h-[1000px] border border-gray-300 rounded-full opacity-50"
      ></div>
      <div
        class="absolute w-[1200px] h-[1200px] border border-gray-300 rounded-full"
      ></div>
    </div>

    <!-- Konten -->
    <div
      v-observe
      class="flex flex-col items-center md:items-start w-full max-w-7xl justify-start text-center md:text-left z-10 opacity-0"
    >
      <!-- Intro -->
      <div class="p-10">
        <h4 class="text-yellow-600 tracking-[0.2em]">- Hello World!</h4>
        <div
          class="text-gray-700 leading-tight text-5xl sm:text-6xl md:text-7xl"
        >
          Hi, I'm
          <span class="text-gray-900 font-bold">Ryan</span>, a developer
          <span class="block">
            <span class="relative inline-block">
              <span
                class="absolute inset-0 bg-yellow-400 opacity-80 rounded-lg px-2"
              ></span>
              <span class="relative text-yellow-900 font-bold">focused</span>
            </span>
          </span>
          on <span class="text-gray-900 font-bold">mobile</span>
          <br />
          and
          <span class="text-gray-900 font-bold">web</span>
          experiences.
        </div>
      </div>
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
} from "@tabler/icons-vue";

export default {
  components: {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
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
