<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let projects;
  export let currentSection: string;
</script>

<SectionWrapper id="projects" {currentSection}>
  <h2
    class="mt-20 mb-10 font-bold text-center text-red-600 uppercase text-8xl dark:text-red-400"
  >
    My Projects
  </h2>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <div
        class="flex flex-col p-6 transition-transform duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-sky-400 dark:bg-gray-800 dark:shadow-md dark:hover:shadow-amber-500"
      >
        <!-- Image container with overflow-hidden -->
        <div class="overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            class="object-cover w-full transition-all duration-500 ease-in-out transform h-96 hover:scale-110 filter blur-sm hover:blur-0"
          />
        </div>
        <div class="p-4 project-content">
          <h3
            class="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200"
          >
            {project.title}
          </h3>
          <p class="mb-2 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <p class="italic text-gray-500 dark:text-gray-300">
            {project.status}
          </p>
          <div class="flex flex-wrap gap-2 my-2 tags">
            <!-- TODO: create a reusable tag component -->
            <!-- Conditional tags -->
            {#if project.title === 'Cat Costume Fashion Show'}
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full tag"
                >Runway Walk</span
              >
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-200 rounded-full tag"
                >Photo Posing</span
              >
            {/if}
            {#if project.title === 'Cat Tech Product Reviews'}
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-purple-700 bg-purple-200 rounded-full tag"
                >Testing Tech Products</span
              >
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-200 rounded-full tag"
                >Enjoying New Stuff</span
              >
            {/if}
            {#if project.title === 'Bird Watching Vlogs'}
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-red-700 bg-red-200 rounded-full tag"
                >Stalking</span
              >
              <span
                class="inline-block px-2 py-1 text-xs font-medium text-teal-700 bg-teal-200 rounded-full tag"
                >Observing</span
              >
            {/if}
          </div>
          <div class="flex justify-between mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 cursor-pointer hover:underline">GitHub</a
            >
            <span class="mx-1">|</span>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 cursor-pointer hover:underline">Live Demo</a
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</SectionWrapper>
