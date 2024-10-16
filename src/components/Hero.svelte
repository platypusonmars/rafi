<script lang="ts">
  import { onMount } from 'svelte';
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import SectionWrapper from './SectionWrapper.svelte';

  export let currentSection: string;

  const scrollToHobbies = () => {
    const hobbiesSection = document.getElementById('hobbies');
    if (hobbiesSection) {
      hobbiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let paragraph = 'specializing in food, toys, and luxury kitty lifestyle';
  let displayedTitle = ''; // For displaying the typed text

  onMount(() => {
    const typingSpeed = 75;
    let index = 0;

    const interval = setInterval(() => {
      if (index < paragraph.length) {
        displayedTitle += paragraph[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
  });
</script>

<SectionWrapper id="hero" {currentSection}>
  <div class="flex flex-col items-center justify-center flex-1 gap-5">
    <h1
      class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl max-w-[1200px] mx-auto text-center font-semibold uppercase
      bg-gradient-to-r from-blue-700 via-green-600 to-indigo-400 bg-clip-text text-transparent
      dark:bg-gradient-to-r dark:from-amber-500 dark:via-white dark:to-indigo-500"
    >
      Rafi
    </h1>
    <h2
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[1200px] mx-auto w-full text-center"
    >
      <span class="text-indigo-400">fluff</span> portfolio 🐾
    </h2>
    <p
      class="text-lg sm:text-xl md:text-2xl text-center max-w-[1000px] mx-auto w-full italic min-h-[2rem]"
    >
      {displayedTitle}
    </p>

    <!-- TODO: replace with own hand-drawn animation -->
    <div class="h-96" id="hero-image">
      <DotLottieSvelte src="/lottie/fluff.lottie" loop autoplay speed={0.8} />
    </div>

    <div class="flex items-center gap-4">
      <button
        aria-label="View Projects"
        class="flex items-center px-4 py-2 text-4xl text-indigo-500 bg-transparent border-none rounded-md outline-none sm:text-5xl md:text-6xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50 swing"
        on:click={scrollToHobbies}
      >
        <i class="fa-solid fa-chevron-down dark:text-white"></i>
      </button>
    </div>
  </div>
</SectionWrapper>

<style>
  .swing {
    transform-origin: top center;
    animation: swing 2s ease-in-out infinite;
  }

  @keyframes swing {
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(5deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
