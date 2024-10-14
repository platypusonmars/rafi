<script>
  export let id;
</script>

<section {id} class="flex flex-col p-4 m-2">
  <div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
    <slot />
  </div>
</section>
