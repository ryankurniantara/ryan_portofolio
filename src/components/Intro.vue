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
        <h4 class="text-yellow-600 font-['Playfair_Display']">Hello World!</h4>
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
        class="flex flex-row p-6 md:p-12 rounded-lg space-x-5 align-middle justify-center shadow-lg bg-white"
      >
        <img
          src="../assets/images/profilepng.png"
          alt="Profile"
          class="rounded-full w-40 h-40 md:w-64 md:h-64 border-4 border-white object-cover bg-slate-500 items-center"
        />

        <div
          class="flex flex-col p-6 rounded-lg w-1/2 font-serif text-gray-900"
        >
          <h1 class="text-4xl text-gray-900 font-bold">Biography</h1>
          <br />
          <p>
            I am a developer focused on mobile and web experiences. I am
            passionate about creating beautiful and functional applications that
            provide value to users. I have experience working with a variety of
            technologies and frameworks, including React, React Native, flutter
            and Node.js. I am always looking to learn new things and improve my
            skills, and I am excited about the opportunity to work on new and
            challenging projects.
          </p>
        </div>

        <div class="flex flex-col flex-grow p-6 items-end">
          <h1 class="text-2xl text-gray-900 font-sans font-bold">
            Let's Connect
          </h1>
          <br />
          <div class="flex flex-row flex-wrap gap-2">
            <IconBrandInstagram name="instagram" color="black" size="25" />
            <IconBrandFacebook name="facebook" color="black" size="25" />
            <IconBrandGithub name="github" color="black" size="25" />
            <IconBrandLinkedin name="linkedin" color="black" size="25" />
            <IconBrandTwitter name="twitter" color="black" size="25" />
          </div>
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
};
</script>
