<script lang="ts">
  import { onMount } from 'svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  let theme: string;

  onMount(() => {
    theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', theme === 'dark');
  });

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };
</script>

<SectionWrapper id="navigation">
  <header>
    <nav>
      <a href="/">home</a>
      <a href="/projects">projects</a>
      <a href="/gallery">gallery</a>
      <button on:click={toggleTheme} class="dark:text-slate-800">
        {theme === 'dark' ? '🌞 Light Mode' : '🌜 Dark Mode'}
      </button>
    </nav>
  </header>
</SectionWrapper>
