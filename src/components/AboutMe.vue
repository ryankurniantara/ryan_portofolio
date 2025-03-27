<template>
  <section
    class="flex flex-col mx-auto w-screen min-h-screen items-center md:items-center justify-center max-w-7xl"
  >
    <div
      class="flex flex-col w-full p-12 md:text-left space-x-5 items-center z-10 bg-red-100"
    >
      <div class="flex flex-row">
        <div class="w-[60%]">
          <img
            src="../assets/images/RyankReal.png"
            alt="ProfileReal"
            class="items-center"
          />
        </div>
        <div
          class="flex flex-col p-2 h-full md:p-5 space-y-5 justify-center items-center"
        >
          <p
            class="font-poppins text-4xl text-gray-900 font-bold mb-2 self-center font"
          >
            About Me
          </p>
          <p class="text-gray-900 text-lg font-poppins text-center">
            I'm a programmer with a strong creative side, so I'm always looking
            to bring together technical skill and design. I focus on building
            software that doesn't just work well but also looks and feels
            right—whether it's in UI/UX design, branding, or product
            prototyping. Besides programming, I'm also into music; I play
            guitar, and music really shapes how I think about creativity and
            expression.
          </p>
          <button
            class="text-slate-100 rounded-lg font-semibold text-1xl bg-slate-500 shadow-lg flex flex-row hover:bg-slate-900 p-2 justify-center items-center mt-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <IconFile3d class="w-8 h-8 mr-2 size-5" color="white" />
            DOWNLOAD CV
          </button>
        </div>
      </div>

      <br />
      <br />
      <div class="flex flex-col">
        <h4 class="text-yellow-600 font-serif">Expertise</h4>
        <div class="leading-tight text-4xl font-serif font-semibold">
          Programming Visual, Design UI, Design Product, Design Prototyping,
          Illustration
        </div>
        <br />
        <div class="flex flex-grow">
          <div class="flex flex-col">
            <h4 class="text-white font-serif tracking-[0.2em] text-xl">
              EXPERIENCE
            </h4>

            <br />
            <ul>
              <li class="font-poppins font-semibold list-disc">
                <p
                  class="flex-col block text-black font-poppins text-lg font-semibold"
                >
                  Varash Group
                  <span class="block text-gray-800 text-"
                    >Mobile App Developer
                  </span>
                  <span class="block">September 2020 - Present</span>
                </p>

                <br />
                <p class="text-gray-900 font-poppins text-sm font-normal">
                  Description of project 1
                </p>
              </li>

              <li class="text-gray-900 font-poppins text-lg font-semibold">
                <a href="https://example.com/project2" target="_blank"
                  >Project 2</a
                >
                <p class="text-gray-900 font-poppins text-sm font-normal">
                  Description of project 2
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { IconFile3d } from "@tabler/icons-vue";

export default {
  name: "AboutMe",
  components: {
    IconFile3d,
  },
  setup() {},
  data() {
    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "Figma",
    ];

    const projects = [
      {
        name: "Project 1",
        description: "Description of project 1",
        link: "https://example.com/project1",
      },
      {
        name: "Project 2",
        description: "Description of project 2",
        link: "https://example.com/project2",
      },
    ];

    return {
      skills,
      projects,
    };
  },
};
</script>

<style lang="scss" scoped></style>
