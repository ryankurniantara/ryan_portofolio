<template>
  <nav
    class="text-black text-center shadow-md sticky md:sticky md:top-0 top-0 bg-white z-50 font-poppins py-6 md:py-0 px-10 md:px-12 lg:px-20 xl:px-32"
  >
    <div class="flex items-center justify-between md:justify-center">
      <!-- Logo (Mobile Only) -->
      <div class="text-gray-700 md:hidden"></div>

      <!-- Desktop Menu (Centered) -->
      <ul class="hidden md:flex text-base tracking-[0.2em]">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="border-b-2 border-transparent hover:border-b-blue-500 transition duration-300 py-6"
        >
          <a
            href="#"
            class="text-gray-700 hover:text-blue-500 transition px-2 sm:px-4 md:px-6 lg:px-8 xl:px-20"
          >
            {{ section.toUpperCase() }} 
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = true" class="md:hidden focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-opacity-50 z-50 transition-opacity"
    @click="isOpen = false"
  ></div>

  <!-- Drawer dari Kanan -->
  <transition name="slide">
    <aside
      v-if="isOpen"
      class="fixed top-0 right-0 w-64 h-full bg-slate-50 text-white transform transition-transform duration-300 z-50 shadow-lg"
    >
      <div class="p-6 flex justify-between items-center">
        <span class="text-lg font-semibold">Menu</span>
        <button @click="isOpen = false" class="focus:outline-none">✖</button>
      </div>
      <ul class="flex flex-col p-4">
        <li v-for="(section, index) in sections" :key="index" class="mb-2">
          <button
            @click="isOpen = false"
            class="block text-left p-3 hover:bg-gray-700 transition text-black"
          >
            {{ section }}
          </button>
        </li>
      </ul>
    </aside>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const sections = ref(["RK.", "Home", "Projects", "About", "Contact"]);

sections.value.shift();
</script>

<style>
/* Animasi Slide dari Kanan */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
