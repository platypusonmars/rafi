<script lang="ts">
  import { slide, fade } from 'svelte/transition';
  import { hobbies } from '../data/data';
  import SectionWrapper from './SectionWrapper.svelte';

  export let currentSection: string;

  let i = 0; // Start with 0 to show no cards initially
  let max = hobbies.length;

  // TODO: add more sound effects
  // Sound file paths
  const sounds = ['src/assets/sounds/cat1.mp3', 'src/assets/sounds/cat2.mp3'];

  let audioElement: HTMLAudioElement;
  let isPlaying = false;
  let currentSoundIndex = 0;
  let volume = 1; // Initial volume (range: 0.0 to 1.0)
  let currentlyPlayingIndex: number | null = null; // Track which card is playing

  const toggleSound = (index: number) => {
    if (currentlyPlayingIndex === index) {
      audioElement.pause();
      isPlaying = false;
      currentlyPlayingIndex = null; // Stop playing
    } else {
      currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
      audioElement.src = sounds[currentSoundIndex];
      audioElement
        .play()
        .then(() => {
          isPlaying = true;
          currentlyPlayingIndex = index; // Set the currently playing index
        })
        .catch((error) => {
          console.error('Error playing sound:', error);
        });
    }
  };

  const adjustVolume = (event: Event) => {
    const target = event.target as HTMLInputElement;
    volume = parseFloat(target.value); // Get the value from the range input
    audioElement.volume = volume; // Set the audio volume
  };

  const toggleMute = () => {
    if (volume > 0) {
      volume = 0;
    } else {
      volume = 1;
    }
    audioElement.volume = volume;
  };
</script>

<SectionWrapper id="hobbies" {currentSection}>
  <div class="flex flex-col items-center justify-center flex-1 gap-5">
    <h2
      class="mb-8 text-4xl font-bold tracking-wider text-center text-indigo-600 uppercase sm:text-5xl dark:text-amber-400"
    >
      My Hobbies
    </h2>

    <!-- Label and range slider -->
    <label class="flex flex-col items-center my-2 space-y-4">
      <span
        class="text-2xl font-semibold tracking-wide uppercase text-slate-800 dark:text-sky-100"
        >drag me</span
      >
      <input
        type="range"
        bind:value={i}
        {max}
        class="w-64 h-2 bg-gray-300 rounded-lg cursor-pointer accent-indigo-500 dark:accent-sky-100"
      />
    </label>

    {#if i >= 1}
      <p
        transition:fade
        class="text-lg italic tracking-widest text-gray-600 dark:text-gray-300"
      >
        Click on the hobbies below for a purring experience! 🎶
      </p>
    {/if}

    <!-- Dynamic cards -->
    <div class="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each hobbies.slice(0, i) as item, index}
        <button
          class="flex items-center justify-center p-6 transition-all duration-300 rounded-lg shadow-lg outline-none
            {currentlyPlayingIndex === index
            ? 'bg-yellow-200 dark:bg-emerald-600 animate-pulse'
            : 'bg-white dark:bg-slate-600'} 
            hover:scale-105 hover:shadow-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50"
          transition:slide
          on:click={() => toggleSound(index)}
          aria-label={`Play or stop sound for ${item}`}
        >
          <p
            class="text-lg font-semibold text-center text-gray-800 dark:text-sky-100"
          >
            {item}
          </p>
        </button>
      {/each}
    </div>

    <!-- Hidden audio element for playback -->
    <audio bind:this={audioElement} preload="auto"></audio>

    {#if i >= 1}
      <div class="flex flex-col gap-4 sm:gap-10 sm:flex-row" transition:fade>
        <!-- Volume Control -->
        <div class="flex items-center mt-4">
          <label for="volume-control" class="mr-2 text-lg font-semibold">
            <span
              class="text-xl font-semibold tracking-wide text-amber-500 dark:text-sky-100"
              >Volume</span
            >
          </label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="1"
            step="0.1"
            bind:value={volume}
            on:input={adjustVolume}
            class="w-64 h-2 bg-gray-300 rounded-lg cursor-pointer accent-indigo-500 dark:accent-sky-100"
          />
        </div>

        <!-- Mute/Unmute Button -->
        <button
          class="w-auto px-4 py-2 mt-4 text-white transition-all duration-500 border-none rounded-full shadow-lg outline-none bg-amber-500 sm:px-10 hover:bg-indigo-700 hover:shadow-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50"
          on:click={toggleMute}
        >
          {volume > 0 ? 'Mute' : 'Unmute'}
        </button>
      </div>
    {/if}
  </div>
</SectionWrapper>
