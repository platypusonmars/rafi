<script lang="ts">
  export let experiences;
</script>

<div class="experiences" id="experiences">
  <h2>Experience</h2>
  <div class="experiences-grid">
    {#each experiences as experience}
      <div class="experience">
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
      </div>
    {/each}
  </div>
</div>
