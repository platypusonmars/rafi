<script lang="ts">
  import { fade } from 'svelte/transition';
  export let id: string;
  export let currentSection: string;

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

  let lastColorIndex = -1; // store the last color index
  let currentColor = '';

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
  class="relative z-10 flex flex-col p-4 m-2 min-h-screen-with-navbar"
>
  {#if isActive}
    <div
      in:fade={{ duration: 500 }}
      out:fade={{ duration: 500 }}
      class={`absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full ${currentColor} opacity-50 blur-[80px]`}
    ></div>
  {/if}
  <div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full z-10">
    <slot />
  </div>
</section>
