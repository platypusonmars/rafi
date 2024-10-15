<script lang="ts">
  import { avoids } from '../data/data';
  import SectionWrapper from './SectionWrapper.svelte';

  export let currentSection: string;
</script>

<SectionWrapper id="avoids" {currentSection}>
  <h2>Not in a Million Years</h2>
  <ul>
    {#each avoids as avoid}
      <li>{avoid}</li>
    {/each}
  </ul>
</SectionWrapper>
