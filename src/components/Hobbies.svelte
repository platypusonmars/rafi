<script lang="ts">
  import { hobbies } from '../data/data';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="hobbies">
  <h2>My Hobbies</h2>
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
</SectionWrapper>
