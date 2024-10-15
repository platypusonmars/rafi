<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let experiences;

  export let currentSection: string;
</script>

<SectionWrapper id="experiences" {currentSection}>
  <h2>Experience</h2>
  <div class="experiences-grid">
    {#each experiences as experience}
      <div class="experience">
        <h3>{experience.title}</h3>
        <p>{experience.description}</p>
      </div>
    {/each}
  </div>
</SectionWrapper>
