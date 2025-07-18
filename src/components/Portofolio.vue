<template>
  <section
    class="w-screen bg-white flex justify-center min-h-screen items-center relative"
  >
    <div
      class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto overflow-hidden py-10 md:py-10"
    >
      <p
        class="font-poppins text-4xl md:text-5xl text-gray-900 font-bold mb-2 self-center px-12 md:px-12"
      >
        Portofolio
      </p>
      <br />
      <p
        class="text-gray-900 text-lg font-poppins text-justify px-12 md:px-12 py-2"
      >
        Here are some of my projects that I have worked on. I am always eager to
        learn and explore new technologies, so feel free to check out my GitHub
        for more projects and contributions.
      </p>

      <div class="flex flex-row w-full items-center px-6 md:px-6">
        <button
          @click="goPrev"
          class="bg-gray-900 text-white rounded-full hover:bg-gray-700 p-2 transition-colors mr-5 md:visible hidden lg:block"
        >
          <IconCaretLeftFilled class="w-6 h-6" />
        </button>

        <swiper
          :modules="[Pagination]"
          :slides-per-view="slidesPerView"
          :space-between="spaceBetween"
          :loop="true"
          class="w-full h-[30rem] md:h-96 lg:h-96 rounded-3xl overflow-hidden"
          :pagination="{
            el: '.custom-swiper-pagination',
            clickable: true,
          }"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(project, index) in projects"
            :key="index"
            class="relative group overflow-hidden bg-white shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            <div
              class="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              :style="{
                backgroundImage: `url(${project.image})`,
              }"
            ></div>
            <div
              class="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"
            ></div>

            <div class="relative z-10 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">{{ project.name }}</h3>
              <p class="text-sm">{{ project.description }}</p>
            </div>
          </swiper-slide>
        </swiper>

        <button
          @click="goNext"
          class="z-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 p-2 transition-colors ml-5 md:visible hidden lg:block"
        >
          <IconCaretRightFilled class="w-6 h-6" />
        </button>
      </div>

      <div class="custom-swiper-pagination mt-4 space-x-3"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-vue";

export default {
  name: "Portofolio",
  components: {
    Swiper,
    SwiperSlide,
    IconCaretLeftFilled,
    IconCaretRightFilled,
  },

  setup() {
    const windowWidth = ref(window.innerWidth);
    const swiperActiveGroup = ref(0);
    const swiperInstance = ref(null);
    const totalGroups = ref(0);

    const projects = ref([
      {
        name: "One Apps Mobile App",
        description:
          "An app for helping members of One Apps community, to improve their sales and marketing skills for multi level marketing.",
        image: "/src/assets/one-apps.png",
      },
      {
        name: "Varash Apps",
        description: "Website for portfolio with Vue.js",
        image: "https://source.unsplash.com/featured/?website,design",
      },
      {
        name: "Gofee Apps",
        description: "Admin dashboard with Tailwind",
        image: "https://source.unsplash.com/featured/?dashboard,ui",
      },
      {
        name: "Bali Walker Tour Website",
        description: "E-commerce app with Laravel",
        image: "https://source.unsplash.com/featured/?ecommerce,store",
      },
      {
        name: "Prospect Apps",
        description: "Realtime chat with Node.js",
        image: "https://source.unsplash.com/featured/?chat,technology",
      },
      {
        name: "Gapos Apps (Galkasoft POS System)",
        description: "Company profile website",
        image: "https://source.unsplash.com/featured/?company,profile",
      },
    ]);

    const spaceBetween = computed(() => (windowWidth.value < 640 ? 0 : 10));
    const slidesPerView = computed(() => (windowWidth.value < 640 ? 1 : 3));

    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    const onSwiper = (swiper) => {
      nextTick(() => {
        swiperInstance.value = swiper;
        totalGroups.value = Math.ceil(
          projects.value.length / slidesPerView.value
        );
        swiper.on("slideChange", () => {
          swiperActiveGroup.value = Math.floor(
            swiper.realIndex / slidesPerView.value
          );
        });
      });
    };

    const goToGroup = (index) => {
      const targetIndex = index * slidesPerView.value;
      swiperInstance.value?.slideTo(targetIndex);
    };

    const goNext = () => {
      swiperInstance.value?.slideNext();
    };

    const goPrev = () => {
      swiperInstance.value?.slidePrev();
    };

    onMounted(() => {
      window.addEventListener("resize", updateWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
    });

    watch(slidesPerView, (newVal) => {
      totalGroups.value = Math.ceil(projects.value.length / newVal);
    });

    return {
      Pagination,
      projects,
      slidesPerView,
      spaceBetween,
      onSwiper,
      swiperActiveGroup,
      goToGroup,
      goNext,
      goPrev,
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  opacity: 1;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

/* Custom Pagination Styling */
:deep(.custom-swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.custom-swiper-pagination .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #d1d5db; /* gray-300 */
  opacity: 1;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

:deep(.custom-swiper-pagination .swiper-pagination-bullet-active) {
  background: #111827; /* gray-900 */
  width: 24px;
  border-radius: 9999px;
}
</style>
