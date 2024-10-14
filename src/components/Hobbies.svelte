<script lang="ts">
  import { hobbies } from '../data/data';
</script>

<section class="hobbies" id="hobbies">
  <h2>My Hobbies</h2>
  <ul>
    {#each hobbies as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
</section>
