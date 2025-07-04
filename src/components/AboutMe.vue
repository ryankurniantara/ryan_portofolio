<template>
  <section
    class="w-screen bg-white flex justify-center min-h-screen items-center relative bg-subtle"
  >
    <div
      class="flex flex-col w-full items-center z-10 md:max-w-7xl px-10 md:py-0 py-10 md:px4 mx-10 md:mx-0"
    >
      <!-- Title Section -->
      <div class="flex flex-col items-center text-center">
        <p class="font-poppins text-4xl text-gray-900 font-bold mb-2">
          About Me
        </p>
        <br />
        <p class="text-gray-900 text-lg font-poppins break-words">
          I'm a programmer with a strong creative side, always striving to blend
          technical skills with design. I focus on developing software that not
          only functions well but also delivers a visually appealing and
          intuitive experience—especially in Visual Programming, UI Design,
          Product Design, and Prototyping. Additionally, I have a passion for
          illustration, which further enriches my perspective in creating
          aesthetic and functional designs. Beyond technology, music is also a
          significant part of my life. I play the guitar, and music deeply
          influences the way I approach creativity and expression.
        </p>
        <br />
        <button
          class="text-white rounded-lg font-semibold tracking-[0.3em] bg-gradient-to-r from-sky-400 to-indigo-500 shadow-md hover:shadow-xl p-3 mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:from-indigo-400 hover:to-sky-500"
        >
          DOWNLOAD CV
        </button>
      </div>

      <div
        class="flex flex-col md:flex-row w-full space-x-0 md:space-x-10 justify-center pt-16 md:pt-16"
      >
        <div class="flex flex-col w-full">
          <h4
            class="text-yellow-500 font-serif tracking-[0.2em] text-xl font-bold mb-4"
          >
            EXPERIENCE
          </h4>

          <ul
            class="w-full custom-list list-disc text-gray-900 font-poppins gap-6 text-lg font-semibold break-words"
          >
            <li
              v-for="(project, index) in projects"
              :key="index"
              class="font-poppins font-semibold"
            >
              <p class="block text-black text-2xl font-semibold mt-5 md:mt-10">
                {{ project.name }}
                <span class="block text-gray-800 text-xl">
                  {{ project.position }}
                </span>
                <span class="block text-gray-600 text-lg">
                  {{ project.date }}
                </span>
              </p>
              <br />
              <p class="text-gray-900 font-poppins text-lg font-normal mt-1">
                {{ project.description }}
              </p>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <div class="flex flex-col w-full">
          <h4
            class="text-yellow-500 font-serif tracking-[0.2em] text-xl font-bold mb-4"
          >
            EDUCATION
          </h4>

          <ul
            class="w-full custom-list list-disc grid grid-cols-1 sm:grid-cols-1 gap-6 text-gray-900 font-poppins text-lg font-semibold break-words"
          >
            <li
              v-for="(education, index) in educations"
              :key="index"
              class="font-poppins font-semibold"
            >
              <p class="block text-black text-2xl font-semibold mt-5 md:mt-10">
                {{ education.name }}
                <span class="block text-gray-800 text-xl">
                  {{ education.position }}
                </span>
                <span class="block text-gray-600 text-lg">
                  {{ education.date }}
                </span>
              </p>
              <br />
              <p class="text-gray-900 font-poppins text-lg font-normal mt-1">
                {{ education.description }}
              </p>
            </li>
          </ul>
        </div>

        <!-- Ended Space -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    const projects = [
      {
        name: "Varash Group",
        position: "Mobile Developer Hybrid",
        description:
          "Serving as mobile app staf with a focus on developing mobile applications for Android and iOS.",
        date: "September 2020 - Present",
      },
      {
        name: "PT Global Lintas Solusi",
        position: "Mobile Developer Hybrid",
        description:
          "Make applications for Android and iOS using react native, focusing on user experience and performance optimization.",
        date: "January 2019 - August 2020",
      },
    ];

    const educations = [
      {
        name: "ITB Stikom Bali",
        position: "Bachelor's Degree in Information Systems",
        description:
          "Completed a comprehensive program emphasizing programming, software development, and systems analysis. Developed core skills in web and mobile application development, collaborating on projects to build functional, user-friendly solutions. Gained experience in databases, UI/UX principles, and team-based project work.",
        date: "2018 - 2021",
      },
    ];

    return {
      projects,
      educations,
    };
  },
};
</script>

<style scoped>
.custom-list {
  list-style-type: disc;
}

.custom-list li {
  position: relative;
  margin-right: 20px;
}

.custom-list li::marker {
  color: #ff6347;
  font-size: 1.8rem;
}
</style>
