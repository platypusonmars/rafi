<script lang="ts">
  import { avoids } from '../data/data';
</script>

<section class="avoids" id="avoids">
  <h2>Not in a Million Years</h2>
  <ul>
    {#each avoids as avoid}
      <li>{avoid}</li>
    {/each}
  </ul>
</section>
