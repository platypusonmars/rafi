<script>
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="footer">
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
</SectionWrapper>
