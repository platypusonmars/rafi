<script lang="ts">
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import SectionWrapper from './SectionWrapper.svelte';

  export let currentSection: string;

  import { onMount } from 'svelte';
  let isBouncing = false;

  onMount(() => {
    const interval = setInterval(() => {
      isBouncing = !isBouncing;
    }, 1500);

    return () => clearInterval(interval);
  });
</script>

<SectionWrapper id="hero" {currentSection}>
  <div class="flex flex-col items-center justify-center flex-1 gap-5">
    <h1
      class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl max-w-[1200px] mx-auto text-center font-semibold uppercase
      bg-gradient-to-r from-blue-700 via-green-600 to-indigo-400 bg-clip-text text-transparent
      dark:bg-gradient-to-r dark:from-amber-500 dark:via-white dark:to-indigo-500
      "
    >
      Rafi
    </h1>
    <h2
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[1200px] mx-auto w-full text-center"
    >
      <span class="text-indigo-400">fluff</span> portfolio 🐾
    </h2>
    <p
      class="text-lg sm:text-xl md:text-2xl text-center max-w-[1000px] mx-auto w-full italic"
    >
      specializing in food, toys, and luxury kitty lifestyle
    </p>

    <div class=" h-96" id="hero-image">
      <DotLottieSvelte src="src/routes/fluff.lottie" autoplay />
    </div>

    <div class="flex items-center gap-4">
      <button
        aria-label="View Projects"
        class={`flex items-center px-4 py-2 text-4xl text-indigo-500 rounded-md sm:text-5xl md:text-6xl dark:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50 ${isBouncing ? 'bounce' : ''}`}
      >
        <i class="fa-solid fa-chevron-down dark:text-white"></i>
      </button>
    </div>
  </div>
</SectionWrapper>

<style>
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) rotate(0deg); /* Start with no rotation */
    }
    40% {
      transform: translateY(-10px) rotate(5deg); /* Slight upward movement with rotation */
    }
    60% {
      transform: translateY(-5px) rotate(-5deg); /* Slight downward movement with opposite rotation */
    }
  }

  .bounce {
    animation: bounce 1s infinite;
  }
</style>
