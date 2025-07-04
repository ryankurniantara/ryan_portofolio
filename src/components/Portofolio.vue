<template>
  <section
    class="w-screen bg-white flex justify-center min-h-screen items-center relative"
  >
    <div
      class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto p-12 md:px-16 overflow-hidden"
    >
      <p
        class="font-poppins text-4xl md:text-5xl text-gray-900 font-bold mb-2 self-center"
      >
        Portofolio
      </p>
      <br />
      <p class="text-gray-900 text-lg font-poppins text-justify mb-4">
        Here are some of my projects that I have worked on. I am always eager to
        learn and explore new technologies, so feel free to check out my GitHub
        for more projects and contributions.
      </p>
      <br />
      <div class="flex flex-row w-full items-center justify-center">
        <!-- Tombol kiri -->
        <button
          @click="goPrev"
          class="bg-gray-900 text-white rounded-full hover:bg-gray-700 p-2 transition-colors mr-5 md:visible hidden lg:block"
        >
          <IconCaretLeftFilled class="w-6 h-6" />
        </button>

        <!-- Swiper -->
        <swiper
          :modules="[Pagination]"
          :slides-per-view="slidesPerView"
          centered-slides="centeredSlides"
          :space-between="spaceBetween"
          :allow-touch-move="true"
          :loop="true"
          round-lengths="true"
          :speed="600"
          :pagination="{
            el: '.custom-swiper-pagination',
            clickable: true,
          }"
          class="w-full h-[30rem] md:h-96 lg:h-96"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(project, index) in projects"
            :key="index"
            class="relative group bg-white shadow-lg overflow-visible cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            <div
              class="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              :style="{
                backgroundImage: `url(${
                  'https://cdn.pixabay.com/photo/2022/08/24/21/01/western-honey-bee-7408771_960_720.jpg' ||
                  'https://via.placeholder.com/300'
                })`,
              }"
            ></div>
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>

            <div class="relative z-10 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">{{ project.name }}</h3>
              <p class="text-sm">{{ project.description }}</p>
            </div>
          </swiper-slide>

          <!-- Pagination (posisi di bawah tengah) -->
        </swiper>

        <!-- Tombol kanan -->
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
import bgImage from "@/assets/images/background_portofolio.png"; // Adjust the path as necessary

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
    const spaceBetween = computed(() => (windowWidth.value < 640 ? 0 : 10));

    const projects = ref([
      {
        name: "Project 1",
        description: "Mobile app using Flutter & Firebase",
        image: "https://source.unsplash.com/featured/?app,technology",
      },
      {
        name: "Project 2",
        description: "Website for portfolio with Vue.js",
        image: "https://source.unsplash.com/featured/?website,design",
      },
      {
        name: "Project 3",
        description: "Admin dashboard with Tailwind",
        image: "https://source.unsplash.com/featured/?dashboard,ui",
      },
      {
        name: "Project 4",
        description: "E-commerce app with Laravel",
        image: "https://source.unsplash.com/featured/?ecommerce,store",
      },
      {
        name: "Project 5",
        description: "Realtime chat with Node.js",
        image: "https://source.unsplash.com/featured/?chat,technology",
      },
      {
        name: "Project 6",
        description: "Company profile website",
        image: "https://source.unsplash.com/featured/?company,profile",
      },
    ]);

    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    const slidesPerView = computed(() => (windowWidth.value < 640 ? 1 : 3));

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
      centeredSlides,
      onSwiper,
      swiperActiveGroup,
      totalGroups,
      goToGroup,
      goNext,
      goPrev,
      bgImage,
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  opacity: 1;
  transform: scale(0.9);
  transition: all 0.3s ease;
  margin-right: 0 !important;
  margin-left: 0 !important;
}

/* PAGINATION STYLING */
:deep(.custom-swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-wrapper) {
  margin-left: 0 !important;
  margin-right: 0 !important;
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
