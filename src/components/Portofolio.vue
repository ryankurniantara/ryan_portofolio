<template>
  <section
    id="projects"
    class="w-screen flex justify-center min-h-full items-center flex-col py-24"
  >
    <div
      v-observe
      class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto opacity-0 transition-opacity duration-700"
    >
      <p
        class="text-4xl md:text-5xl text-gray-900 font-bold mb-2 self-center px-12 md:px-12"
      >
        Portofolio
      </p>
      <br />
      <p class="text-gray-900 text-lg text-justify px-12 md:px-12 py-2">
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
            @click="openModal(project)"
            class="relative group overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out rounded-3xl"
          >
            <!-- Background Image -->
            <div
              class="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-100"
              :style="{ backgroundImage: `url(${project.image[0]})` }"
            ></div>

            <!-- Overlay Layer -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-3xl z-0"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 p-6 flex flex-col justify-end h-full text-white"
            >
              <h3 class="text-2xl font-bold mb-2 drop-shadow-md">
                {{ project.name }}
              </h3>
              <p class="text-sm mb-4 line-clamp-2 opacity-90">
                {{ project.description }}
              </p>

              <!-- CTA Button -->
              <button
                class="self-start bg-white text-black px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white border border-white/30"
              >
                Lihat Detail
              </button>
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

    <Modal v-model="showModal" v-if="selectedProject">
      <template #title>
        <span class="text-3xl font-bold mb-3">{{ selectedProject.name }}</span>
      </template>

      <template #content>
        <div class="text-lg">
          <span class="text-lg font-bold">Description:</span>
          <span class="text-lg">{{ selectedProject.description }}</span>
        </div>
      </template>

      <template #techStack>
        <div class="flex gap-2 flex-wrap">
          <span class="text-lg font-bold">Tech Stack:</span>
          <span class="text-lg">
            {{ selectedProject.tech_stack || "Not specified" }}
          </span>
        </div>
      </template>

      <template #jobDescription>
        <span class="text-lg font-bold whitespace-nowrap"
          >Job Description:</span
        >
        <span>
          <li
            class="text-lg"
            v-for="(line, i) in selectedProject.job_description"
            :key="i"
          >
            {{ line }}
          </li>
        </span>
      </template>

      <br />

      <div class="flex flex-wrap gap-3">
        <img
          v-for="(img, index) in selectedProject.image"
          :key="index"
          :src="img"
          alt="Project Image"
          @click="openPreview(img)"
          class="w-[160px] md:w-[350px] h-full rounded-lg object-cover mb-4"
        />
      </div>
    </Modal>

    <!-- Image Preview -->
    <div
      v-if="previewImage"
      class="fixed inset-0 z-[999] bg-black bg-opacity-90 flex items-center justify-center px-4"
      @click.self="closePreview"
    >
      >
      <div class="relative w-full max-w-4xl">
        <!-- Tombol Close -->
        <button
          @click.stop="closePreview"
          class="absolute top-2 right-2 z-50 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Gambar Preview -->
        <img
          :src="previewImage"
          alt="Preview"
          class="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
          @click.stop
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-vue";
import Modal from "@/components/modal/modall.vue";

import gofeeBanner from "@/assets/images/Gofee_Banner.jpg";
import gofee1 from "@/assets/images/Gofee.png";
import gofee2 from "@/assets/images/Gofee_2.png";
import gofee3 from "@/assets/images/Gofee_3.png";

import oneAppsWeb from "@/assets/images/oneApps_Web.jpg";
import oneAppsWeb2 from "@/assets/images/oneApps_Web2.jpg";
import oneAppsWeb3 from "@/assets/images/oneApps_Web3.jpg";
import oneAppsWeb4 from "@/assets/images/oneApps_Web4.jpg";

import oneAppsMobileApp from "@/assets/images/OneAppsMobile1.jpg";
import oneAppsMobileApp2 from "@/assets/images/OneAppsMobile2.jpg";
import oneAppsMobileApp3 from "@/assets/images/OneAppsMobile3.jpg";
import oneAppsMobileApp4 from "@/assets/images/OneAppsMobile4.jpg";
import oneAppsMobileApp5 from "@/assets/images/OneAppsMobile5.jpg";

import baliWalker from "@/assets/images/bali_walker.jpg";
import baliWalker2 from "@/assets/images/bali_walker2.jpg";
import baliWalker3 from "@/assets/images/bali_walker3.jpg";
import baliWalker4 from "@/assets/images/bali_walker4.jpg";

import varashApps from "@/assets/images/varash_apps.webp";
import varashApps2 from "@/assets/images/VarashApps1.jpg";
import varashApps3 from "@/assets/images/VarashApps2.jpg";
import varashApps4 from "@/assets/images/VarashApps3.jpg";
import varashApps5 from "@/assets/images/VarashApps5.jpg";

import gaposAppsBanner from "@/assets/images/GaposApps1.jpg";
import gaposApps from "@/assets/images/gapos_apps.webp";
import gaposApps1 from "@/assets/images/gapos_apps2.webp";
import gaposApps2 from "@/assets/images/gapos_apps3.webp";
import gaposApps3 from "@/assets/images/gapos_apps4.webp";

const showModal = ref(false);
const selectedProject = ref(null);
const previewImage = ref(null);

// Fungsi untuk buka modal saat project diklik
const openModal = (project) => {
  selectedProject.value = project;
  showModal.value = true;
};

// Fungsi Untuk open preview image
const openPreview = (imgUrl) => {
  previewImage.value = imgUrl;
};

const closePreview = (imgUrl) => {
  previewImage.value = null;
};

export default {
  name: "Portofolio",
  components: {
    Swiper,
    SwiperSlide,
    IconCaretLeftFilled,
    IconCaretRightFilled,
    Modal,
  },
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              el.classList.remove("opacity-0", "animate-fade-in-up");
              void el.offsetWidth; // trigger reflow for animation
              el.classList.add("animate-fade-in-up");
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
      },
    },
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const swiperActiveGroup = ref(0);
    const swiperInstance = ref(null);
    const projects = ref([
      {
        name: "One Apps Mobile App",
        description:
          "An app for helping members of One Apps community, to improve their sales and marketing skills for multi level marketing.",
        image: [
          oneAppsMobileApp,
          oneAppsMobileApp2,
          oneAppsMobileApp3,
          oneAppsMobileApp4,
          oneAppsMobileApp5,
        ],
        tech_stack: "Flutter",
        job_description: [
          "Developed the mobile app using Flutter framework.",
          "Integrated backend APIs for learning modules, sales tracking, and member communication.",
          "Designed intuitive UI/UX for a wide range of user demographics.",
        ],
        link_to_project: "",
      },
      {
        name: "Varash Apps",
        description:
          "Apps for member to see their sales and marketing performance only for Varash Member",
        image: [varashApps, varashApps2, varashApps3, varashApps4, varashApps5],
        tech_stack: "Flutter",
        job_description: [
          "Built a user-friendly interface for monitoring sales performance.",
          "Implemented authentication and secure member-only access.",
          "Focused on performance analytics and progress visualization.",
        ],
        link_to_project: "",
      },
      {
        name: "Gofee Apps",
        description:
          "An PPOB like Dana Apps, for UMKM in Indonesia especially in Bali",
        image: [gofeeBanner, gofee1, gofee2, gofee3],
        tech_stack: "React Native",
        job_description: [
          "Developed a cross-platform mobile app using React Native.",
          "Integrated payment gateway and digital transaction features.",
          "Ensured transactional security and ease of use for small business owners.",
        ],
        link_to_project: "",
      },
      {
        name: "Bali Walker Tour Website",
        description: "Travel and tour company website",
        image: [baliWalker, baliWalker2, baliWalker3, baliWalker4],
        tech_stack: "Wordpress (Content Management System)",
        job_description: [
          "Developed a responsive website for travel & tour services.",
          "Showcased packages, testimonials, and booking forms.",
          "Optimized for SEO and mobile devices.",
        ],
        link_to_project: "https://baliwalkertour.com",
      },
      {
        name: "Gapos Apps (Galkasoft POS System)",
        description:
          "A POS System called Galkasoft POS System, for UMKM in Indonesia",
        image: [gaposAppsBanner, gaposApps, gaposApps1, gaposApps2, gaposApps3],
        tech_stack: "Flutter",
        job_description: [
          "Build responsive UI using Flutter widgets.",
          "Integrate with RESTful API for product and transaction data.",
          "Implement login and role-based access (admin/cashier).",
          "Handle local storage for offline mode (e.g. Hive or sqflite).",
          "Maintain and update the app regularly.",
        ],
        link_to_project: "https://galkasoft.com",
      },
      {
        name: "One Apps Web Application",
        description:
          "A web platform for the Varash member, to improve their sales and marketing skills for multi level marketing.",
        tech_stack: "Next.js, SCSS, Node.js",
        image: [oneAppsWeb, oneAppsWeb2, oneAppsWeb3, oneAppsWeb4],
        job_description: [
          "Built a scalable web app using Next.js and Node.js.",
          "Integrated user roles, dashboards, and learning modules.",
          "Implemented secure login, session handling, and responsive design.",
        ],
        link_to_project: " https://oneapps.id",
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
      openModal,
      showModal,
      selectedProject,
      openPreview,
      closePreview,
      previewImage,
    };
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

.swiper-slide {
  opacity: 1;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

/* Custom Swiper Pagination */
:deep(.custom-swiper-pagination) {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.custom-swiper-pagination .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #d1d5db;
  opacity: 1;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
:deep(.custom-swiper-pagination .swiper-pagination-bullet-active) {
  background: #111827;
  width: 24px;
  border-radius: 9999px;
}
</style>
