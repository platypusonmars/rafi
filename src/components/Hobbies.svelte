<script lang="ts">
  import { hobbies } from '../data/data';
  import SectionWrapper from './SectionWrapper.svelte';
  export let currentSection: string;
</script>

<SectionWrapper id="hobbies" {currentSection}>
  <h2>My Hobbies</h2>
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
</SectionWrapper>
