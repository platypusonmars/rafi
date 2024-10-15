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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<main>
  <Hero {currentSection} />
  <Hobbies {currentSection} />
  <Avoids {currentSection} />
  <Experience {experiences} {currentSection} />
  <Projects {projects} {currentSection} />
  <Gallery {galleryImages} {currentSection} />
</main>
