<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let experiences;
  export let currentSection: string;
</script>

<!-- TODO: add links for each experience detail page, create detail page -->

<SectionWrapper id="experiences" {currentSection}>
  <h2
    class="mt-20 mb-10 text-4xl font-bold text-center text-red-600 uppercase sm:text-5xl md:text-8xl dark:text-red-400"
  >
    Experience
  </h2>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each experiences as experience}
      <div
        class="p-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg experience hover:scale-105 hover:shadow-amber-500 dark:bg-gray-900 dark:shadow-md"
      >
        <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-sky-100">
          {experience.title}
        </h3>
        <p class="text-gray-600 dark:text-yellow-100">
          {experience.description}
        </p>
      </div>
    {/each}
  </div>
</SectionWrapper>
