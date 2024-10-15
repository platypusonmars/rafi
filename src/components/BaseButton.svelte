<script lang="ts">
  export let onClick: () => void;
  export let additionalClasses: string = '';
</script>

<button
  class={`flex items-center justify-center px-10 py-4 transition-all duration-300 rounded-full shadow-lg outline-none
          hover:scale-105 hover:shadow-amber-500 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50 
          ${additionalClasses}`}
  on:click={onClick}
>
  <slot></slot>
</button>
