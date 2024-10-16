<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let galleryImages;

  export let currentSection: string;
</script>

<!-- TODO: add gallery sliders, maybe create a mini-instagram window or aka-tinder experience for swiping Rafi's pics -->

<SectionWrapper id="gallery" {currentSection}>
  <h2>Gallery</h2>
  <div class="gallery-grid">
    {#each galleryImages as image}
      <div class="gallery-item">
        <img src={image} alt="Rafi's portfolio image" />
      </div>
    {/each}
  </div>
</SectionWrapper>
