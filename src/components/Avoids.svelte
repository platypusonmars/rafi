<script lang="ts">
  import { fly } from 'svelte/transition';
  import { avoids } from '../data/data';
  import SectionWrapper from './SectionWrapper.svelte';
  import BaseButton from './BaseButton.svelte';
  export let currentSection: string;

  let bubbleState = avoids.map(() => true);

  const colors = [
    'bg-red-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-purple-200',
  ];

  // Initialize bubbleColors with a random color for each avoid
  let bubbleColors = avoids.map(
    () => colors[Math.floor(Math.random() * colors.length)]
  );

  let audio: HTMLAudioElement;
  let isMuted = false;
  let volume = 0.5; // Initial volume set to 50%

  const burstBubble = (index: number) => {
    // Play the sound effect
    if (!isMuted) {
      audio.volume = volume; // Set volume before playing
      audio.currentTime = 0; // Reset audio to start
      audio.play();
    }

    // Change the color when the bubble is clicked
    bubbleColors[index] = colors[Math.floor(Math.random() * colors.length)];

    // Set bubble state to false to trigger the fade-out
    bubbleState[index] = false;
  };

  const toggleMute = () => {
    isMuted = !isMuted;
    audio.volume = isMuted ? 0 : volume; // Set volume to 0 if muted
  };

  const adjustVolume = (event: Event) => {
    const target = event.target as HTMLInputElement;
    volume = parseFloat(target.value);
    audio.volume = isMuted ? 0 : volume; // Adjust volume if not muted
  };

  const resetBubbles = () => {
    bubbleState = avoids.map(() => true);
    // Reset colors to new random colors
    bubbleColors = avoids.map(
      () => colors[Math.floor(Math.random() * colors.length)]
    );
  };
</script>

<SectionWrapper id="avoids" {currentSection}>
  <!-- Styled Heading -->
  <div class="flex flex-col items-center justify-between flex-1 gap-5 pb-20">
    <div class="flex flex-col items-center justify-between gap-2 mb-2">
      <h2
        class="text-4xl font-bold tracking-wider text-center text-red-600 uppercase sm:text-5xl dark:text-red-400"
      >
        Not in a Million Years
      </h2>

      <p
        class="text-lg italic tracking-widest text-gray-600 uppercase dark:text-gray-300"
      >
        Click on the avoids below to see what happens! 🎶
      </p>
    </div>

    <!-- Audio element -->
    <audio bind:this={audio}>
      <source src="/src/assets/sounds/bubble.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    <!-- Mute and Volume Controls -->
    <div
      class="flex flex-col items-center justify-between flex-1 gap-10 p-5 mb-8 sm:flex-row"
    >
      <button
        on:click={toggleMute}
        class="w-full px-4 py-2 text-white transition-all duration-500 border-none rounded-full shadow-lg outline-none sm:w-auto bg-lime-700 dark:text-white dark: sm:px-10 hover:bg-indigo-700 hover:shadow-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50"
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>

      <label
        for="volume-control"
        class="text-xl font-semibold tracking-wide text-amber-500 dark:text-sky-100"
        >Volume: {Math.round(volume * 100)}%</label
      >
      <input
        id="volume-control"
        type="range"
        min="0"
        max="1"
        step="0.01"
        bind:value={volume}
        on:input={adjustVolume}
        class="w-64 h-2 ml-2 bg-gray-300 rounded-lg cursor-pointer accent-indigo-500 dark:accent-sky-100"
      />
    </div>

    <!-- Bubble container -->
    <div class="grid items-center grid-cols-2 gap-8 m-3 sm:grid-cols-4">
      {#each avoids as avoid, index}
        {#if bubbleState[index]}
          <button
            class={`flex items-center justify-center w-32 h-32 p-6 text-center transition-all duration-30 ${
              bubbleColors[index]
            } rounded-full shadow-lg outline-none cursor-pointer md:h-40 md:w-40 hover:scale-105 hover:shadow-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50 bubble`}
            on:click={() => burstBubble(index)}
            transition:fly|local={{ x: 0, y: 50 }}
          >
            <p
              class="text-base font-semibold text-center text-gray-800 sm:text-lg md:text-xl"
            >
              {avoid}
            </p>
          </button>
        {/if}
      {/each}
    </div>

    <!-- Reset Button -->
    <BaseButton
      additionalClasses="bg-red-500 hover:bg-red-600 text-white m-6"
      onClick={resetBubbles}
    >
      <p class="text-xl tracking-wider uppercase">Reset Bubbles</p>
    </BaseButton>
  </div>
</SectionWrapper>

<style>
  .bubble {
    animation: float 6s ease-in-out infinite;
  }

  /* Floating animation to make bubbles look dynamic */
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* TODO: fix the effect */
  /* Burst effect */
  .bubble:active {
    transform: scale(0.5);
    transition: transform 0.5s ease-out;
  }
</style>
