<script lang="ts">
  import Hero from '../components/Hero.svelte';
  import Hobbies from '../components/Hobbies.svelte';
  import Avoids from '../components/Avoids.svelte';
  import Experience from '../components/Experience.svelte';
  import Projects from '../components/Projects.svelte';
  import Gallery from '../components/Gallery.svelte';
  import Footer from '../components/Footer.svelte';

  import { galleryImages, projects, experiences } from '../data/data';
</script>

<main>
  <Hero />
  <!-- <i class="fa-regular fa-lightbulb"></i> -->
  <Hobbies />
  <Avoids />
  <Experience {experiences} />
  <Projects {projects} />
  <Gallery {galleryImages} />
  <Footer />
</main>

<style lang="postcss">
  /* :global(html) {
    background-color: theme(colors.purple.100);
  } */
</style>
