<script lang="ts">
  export let galleryImages;
</script>

<section class="gallery" id="gallery">
  <h2>Gallery</h2>
  <div class="gallery-grid">
    {#each galleryImages as image}
      <div class="gallery-item">
        <img src={image} alt="Rafi's portfolio image" />
      </div>
    {/each}
  </div>
</section>
