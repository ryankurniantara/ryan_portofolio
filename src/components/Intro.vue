<template>
  <section
    class="relative w-screen min-h-screen flex flex-col items-center justify-center mx-auto p-12 md:px-16 overflow-hidden bg-subtle"
  >
    <div
      class="absolute flex items-center justify-center -right-10 top-80 -translate-y-1/2 z-10 md:overflow-visible overflow-hidden"
    >
      <div
        class="absolute w-[200px] h-[200px] border-[0.5px] border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[400px] h-[400px] border-[0.5px] border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[600px] h-[600px] border-[0.5px] border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[800px] h-[800px] border-[0.5px] border-gray-300 rounded-full opacity-75"
      ></div>
      <div
        class="absolute w-[1000px] h-[1000px] border-[0.5px] border-gray-300 rounded-full opacity-50"
      ></div>
      <div
        class="absolute w-[1200px] h-[1200px] border-[0.5px] border-gray-300 rounded-full"
      ></div>
    </div>

    <!-- Intro -->
    <div
      class="flex flex-col items-center md:items-start w-full max-w-7xl justify-start text-center md:text-left z-10"
    >
      <div class="p-10">
        <h4 class="text-yellow-600 font-serif tracking-[0.2em]">
          - Hello World!
        </h4>
        <div
          class="text-gray-700 leading-tight text-5xl sm:text-6xl md:text-7xl font-['Playfair_Display']"
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
          on
          <span class="text-gray-900 font-bold">mobile</span> <br />
          and <span class="text-gray-900 font-bold">web</span> experiences.
        </div>
      </div>

      <!-- Biography and Image -->

      <div
        class="flex flex-col md:flex-row rounded-lg shadow-lg md:bg-white items-center md:p-10 p-0"
      >
        <img
          src="../assets/images/my-cartoon.png"
          alt="ProfileReal"
          class="rounded-full md:w-60 md:h-60 w-[200px] h-[200px] size-24 bg-black object-cover object-[center_10%] mt-10"
        />

        <div
          class="flex flex-col rounded-lg font-serif text-gray-900 md:pl-10 p-8"
        >
          <h1 class="text-4xl text-gray-900 font-bold">Biography</h1>
          <br />
          <p class="align-text-top">
            I am a developer focused on mobile and web experiences. I am
            passionate about creating beautiful and functional applications that
            provide value to users. I have experience working with a variety of
            technologies and frameworks, including React, React Native, flutter
            and Node.js. I am always looking to learn new things and improve my
            skills, and I am excited about the opportunity to work on new and
            challenging projects.
          </p>
        </div>

        <div class="flex flex-col p-0 md:p6">
          <h1 class="text-2xl text-gray-900 font-sans font-bold">
            Let's Connect
          </h1>
          <br />
          <div class="flex flex-row flex-wrap gap-2">
            <span class="group transition-transform hover:scale-125">
              <IconBrandInstagram
                name="instagram"
                :color="hovered === 'instagram' ? '#E1306C' : 'black'"
                size="25"
                @mouseenter="hovered = 'instagram'"
                @mouseleave="hovered = ''"
              />
            </span>
            <span class="group transition-transform hover:scale-125">
              <IconBrandFacebook
                name="facebook"
                :color="hovered === 'facebook' ? '#1877F3' : 'black'"
                size="25"
                @mouseenter="hovered = 'facebook'"
                @mouseleave="hovered = ''"
              />
            </span>
            <span class="group transition-transform hover:scale-125">
              <IconBrandGithub
                name="github"
                :color="hovered === 'github' ? '#6e5494' : 'black'"
                size="25"
                @mouseenter="hovered = 'github'"
                @mouseleave="hovered = ''"
              />
            </span>
            <span class="group transition-transform hover:scale-125">
              <IconBrandLinkedin
                name="linkedin"
                :color="hovered === 'linkedin' ? '#0A66C2' : 'black'"
                size="25"
                @mouseenter="hovered = 'linkedin'"
                @mouseleave="hovered = ''"
              />
            </span>
            <span class="group transition-transform hover:scale-125">
              <IconBrandTwitter
                name="twitter"
                :color="hovered === 'twitter' ? '#1DA1F2' : 'black'"
                size="25"
                @mouseenter="hovered = 'twitter'"
                @mouseleave="hovered = ''"
              />
            </span>
          </div>
        </div>
        <br />
        <br />
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
};
</script>
