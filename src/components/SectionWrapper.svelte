<script lang="ts">
  import { fade } from 'svelte/transition';
  export let id: string;
  export let currentSection: string;

  let lastColorIndex = -1; // store the last color index
  let currentColor = '';

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500',
    'bg-cyan-500',
  ];

  const getRandomColor = () => {
    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * colors.length);
    } while (newIndex === lastColorIndex); // Avoid repetition

    lastColorIndex = newIndex;
    return colors[newIndex];
  };

  $: isActive = currentSection === id;
  $: if (isActive) {
    currentColor = getRandomColor(); // Set the color when section is active
  }
</script>

<section
  {id}
  class="relative z-10 flex flex-col min-h-[calc(100vh-100px)] p-4 m-2"
>
  {#if isActive}
    <div
      in:fade={{ duration: 500 }}
      out:fade={{ duration: 500 }}
      class={`fixed bottom-auto left-auto right-0 top-0 h-[1000px] w-[1000px] 
      -translate-x-[30%] translate-y-[20%] rounded-full ${currentColor} opacity-30 blur-[80px] animate-blob`}
    ></div>
  {/if}
  <div
    class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full z-10 h-full my-10"
  >
    <slot />
  </div>
</section>

<style>
  .animate-blob {
    animation: moveAndPulse 8s infinite; /* Smooth animation duration */
    transform: translate(-50%, -50%) scale(1); /* Centered position */
  }

  @keyframes moveAndPulse {
    0% {
      transform: translate(-50%, -50%) scale(1); /* Start at center */
    }
    20% {
      transform: translate(40%, -20%) scale(1.05);
    }
    40% {
      transform: translate(30%, 40%) scale(1);
    }
    60% {
      transform: translate(-30%, 40%) scale(1.05);
    }
    80% {
      transform: translate(-50%, -30%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1); /* Reset to the start */
    }
  }
</style>
