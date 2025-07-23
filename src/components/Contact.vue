<template>
  <section
    id="contact"
    class="w-screen min-h-full flex flex-col items-center justify-center bg-white py-24"
  >
    <div
      v-observe
      class="w-full py-14 md:py-10 px-10 md:px-10 max-w-7xl opacity-0"
    >
      <h2 class="text-gray-600 text-2xl mb-4">Contact Me !</h2>
      <p class="font-bold text-gray-900 mb-2 text-5xl md:text-6xl">
        Let's connect! I'd love to hear about your project ideas or
        opportunities to work together.
      </p>
      <br />
      <br />
      <div
        v-observe
        class="flex flex-col md:flex-row text-lg space-y-10 md:space-y-0 space-x-0 md:space-x-10"
      >
        <a
          href="tel:+6285858767113"
          class="flex-1 bg-white/50 rounded-lg shadow-md p-10"
        >
          <p>Kontak</p>
          <p>ryankurniantara@gmail.com</p>
          <p>+6285858767113</p>
        </a>

        <a class="flex-1 bg-white/50 rounded-lg shadow-md p-10">
          <p>Social Media</p>
          <p>Instagram: @ryankurniantara</p>
          <p>LinkedIn: Ryan Kurniantara</p>
        </a>

        <a
          href="https://www.google.com/maps/place//@-8.8018741,115.2012018,15z?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener"
          class="flex-1 bg-white/50 rounded-lg shadow-md p-10"
        >
          <p>Location</p>
          <p>Bali, Indonesia</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
  animation: fadeInUp 0.8s ease-out forwards;
}

.opacity-0 {
  opacity: 0;
}
</style>
