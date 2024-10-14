<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let galleryImages;
</script>

<SectionWrapper id="gallery">
  <h2>Gallery</h2>
  <div class="gallery-grid">
    {#each galleryImages as image}
      <div class="gallery-item">
        <img src={image} alt="Rafi's portfolio image" />
      </div>
    {/each}
  </div>
</SectionWrapper>
