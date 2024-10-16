<script lang="ts">
  import { openModal } from '../stores/index';
  import { onMount } from 'svelte';
  let theme: string;
  let isScrolled = false;

  onMount(() => {
    theme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', theme === 'dark');

    const handleScroll = () => {
      isScrolled = window.scrollY > 0; // Update state based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };
</script>

<header
  class={`fixed top-0 left-0 right-0 z-20 flex flex-col max-w-[1400px] mx-auto w-full p-4 transition-all duration-1000 ease-in-out ${isScrolled ? 'bg-yellow-100 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 shadow' : 'bg-transparent'}`}
>
  <div class="flex flex-row justify-between">
    <a
      href="/"
      class="relative inline-flex items-center px-2 tracking-wider transition-all duration-300 rounded-md text-slate-800 dark:text-white dark:bg-slate-800 hover:scale-110 hover:text-amber-500 dark:hover:text-amber-300"
    >
      <h1 class="relative z-10 font-semibold">
        Rafi the <span class="dark:text-amber-300 text-amber-500">Fluff</span>
      </h1>
    </a>

    <!-- TODO: fix the nav bar on mobile -->
    <button
      on:click={() => ($openModal = true)}
      class="grid bg-transparent md:hidden place-items-center"
    >
      <i class="fa-solid fa-burger"></i>
    </button>

    <nav class="items-center justify-between hidden gap-4 md:flex lg:gap-6">
      <div class="flex items-center justify-center gap-4 px-2">
        <a href="/" class="duration-200 cursor-pointer hover:text-indigo-400"
          >home</a
        >
        <a
          href="/projects"
          class="duration-200 cursor-pointer hover:text-indigo-400">projects</a
        >
        <a
          href="/gallery"
          class="duration-200 cursor-pointer hover:text-indigo-400">gallery</a
        >
      </div>

      <button
        on:click={toggleTheme}
        class={`px-4 py-2 rounded-md transition-colors duration-500 ease-in-out bg-transparent
            ${theme === 'dark' ? ' text-white ' : 'text-slate-800 '}
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-50
            `}
        aria-label={theme === 'dark'
          ? 'Switch to Light Mode'
          : 'Switch to Dark Mode'}
      >
        <i
          class={theme === 'dark'
            ? 'fa-regular fa-lightbulb'
            : 'fa-solid fa-lightbulb'}
        ></i>
      </button>
    </nav>
  </div>
</header>
