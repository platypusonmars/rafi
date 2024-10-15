<script>
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<div
  class="relative z-20 flex flex-col flex-1 max-w-[1400px] mx-auto w-full p-4 m-2"
>
  <p>&copy; {new Date().getFullYear()} Rafael Purr Inc. All rights reserved.</p>
  <div>
    <a
      href="https://github.com/yourusername"
      target="_blank"
      aria-label="GitHub">GitHub</a
    >
    <a
      href="https://instagram.com/yourprofile"
      target="_blank"
      aria-label="Instagram">Instagram</a
    >
    <a
      href="https://twitter.com/yourusername"
      target="_blank"
      aria-label="Twitter">Twitter</a
    >
  </div>
</div>
