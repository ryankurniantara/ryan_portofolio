<template>
  <transition name="modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4"
      @click.self="close"
    >
      <div
        class="relative bg-white w-full h-full md:max-w-2xl md:max-h-[80vh] md:rounded-2xl overflow-y-auto p-6"
      >
        <!-- Tombol Close -->
        <button
          @click="close"
          class="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
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

        <!-- Konten Modal -->
        <div class="pt-10 space-y-4">
          <!-- Slot Title -->
          <slot name="title"> </slot>

          <!-- Slot Content -->
          <slot name="content"> </slot>

          <!-- Slot Tech Stack -->
          <slot name="techStack"> </slot>

          <!-- Slot Job Description -->
          <slot name="jobDescription"> </slot>

          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: Boolean,
  selectedProject: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

img {
  transition: transform 0.3s ease;
}
</style>
