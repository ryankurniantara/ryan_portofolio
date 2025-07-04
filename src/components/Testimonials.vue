<template>
  <section
    class="w-screen bg-white flex justify-center min-h-screen items-center relative"
  >
    <div
      class="w-full px-4 text-center items-center justify-center flex flex-col"
    >
      <h2
        class="font-bold font-poppins text-gray-900 mb-2 text-4xl md:text-5xl"
      >
        Testimonials
      </h2>
      <p
        class="text-gray-600 text-lg mb-4 max-w-7xl items-center align-middle text-center"
      >
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium , Lorem ipsum
        dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus
        in. Aliquet donec morbi convallis pretium.
      </p>

      <br />
      <br />
      <!-- <swiper
        :modules="[Pagination]"
        :slides-per-view="1.5"
        :centered-slides="true"
        :space-between="30"
        :pagination="{
          el: '.custom-swiper-testimonials',
          clickable: true,
        }"
        class="w-full h-full overflow-hidden"
      >
        <swiper-slide
          v-for="(testimonial, index) in testimonials"
          s
          :key="index"
          class="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-300"
        >
          <img
            :src="testimonial.image"
            alt="Profile"
            class="w-100 h-100 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div class="text-left">
            <p class="text-gray-700 mb-3 text-xl font-serif leading-relaxed">
              <span class="text-3xl text-orange-400 leading-none mb-1">“</span>
              {{ testimonial.text }}
              <span class="text-3xl text-orange-400 leading-none mb-1">"</span>
            </p>

            <p class="font-bold text-gray-800 text-lg">
              {{ testimonial.name }}
            </p>
            <p class="text-gray-500 text-lg">{{ testimonial.role }}</p>
          </div>
        </swiper-slide>
      </swiper>

       -->
      <br />
      <div class="custom-swiper-testimonials mt-4"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonials = [
      {
        name: "John Doe",
        role: "CEO",
        text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Jane Smith",
        role: "Marketing Manager",
        text: "Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Alex Johnson",
        role: "Developer",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
      },
    ];

    return {
      testimonials,
      Pagination,
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  opacity: 0.5;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}

.swiper-slide:hover {
  transform: scale(1.05);
  transition: all 0.3s ease;
}

/* PAGINATION STYLING */
:deep(.custom-swiper-testimonials) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.custom-swiper-testimonials .swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #d1d5db; /* gray-300 */
  opacity: 1;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

:deep(.custom-swiper-testimonials .swiper-pagination-bullet-active) {
  background: #111827; /* gray-900 */
  width: 24px;
  border-radius: 9999px;
}
</style>
