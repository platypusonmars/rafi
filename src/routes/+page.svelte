<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Hobbies from '../components/Hobbies.svelte';
  import Avoids from '../components/Avoids.svelte';
  import Experience from '../components/Experience.svelte';
  import Projects from '../components/Projects.svelte';
  import Gallery from '../components/Gallery.svelte';

  import { galleryImages, projects, experiences } from '../data/data';
  import { onMount } from 'svelte';

  let currentSection = 'hero'; // Default to the hero section
  const sections = [
    'hero',
    'hobbies',
    'avoids',
    'experiences',
    'projects',
    'gallery',
  ];

  let isLoading = true;

  // Scroll event listener
  const handleScroll = () => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        // Check if the section is in the viewport
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          currentSection = section; // Set current section
        }
      }
    });
  };

  onMount(() => {
    // Simulate loading
    // TODO: remove
    setTimeout(() => {
      isLoading = false; // Set loading to false after 1.5 seconds
    }, 500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<main>
  {#if isLoading}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-800"
    >
      <div
        class="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"
      ></div>
    </div>
  {:else}
    <Hero {currentSection} />
    <Hobbies {currentSection} />
    <Avoids {currentSection} />
    <Experience {experiences} {currentSection} />
    <Projects {projects} {currentSection} />
    <!-- <Gallery {galleryImages} {currentSection} /> -->
  {/if}
</main>
