<script lang="ts">
  import { openModal } from '../stores/index';
  import { onMount } from 'svelte';
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

<header
  class="relative z-20 flex flex-col flex-1 max-w-[1400px] mx-auto w-full p-4 m-2"
>
  <div class="flex flex-row justify-between">
    <a
      href="/"
      class="relative inline-flex items-center px-2 tracking-wider text-white rounded-md bg-slate-800"
    >
      <h1 class="relative z-10 font-semibold">
        Rafi the <span class="text-amber-300">Fluff</span>
      </h1>
    </a>

    <button
      on:click={() => ($openModal = true)}
      class="grid md:hidden place-items-center"
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
        class={`px-4 py-2 rounded-md transition-colors duration-500 ease-in-out
            ${theme === 'dark' ? 'bg-slate-800 text-white hover:bg-white hover:text-slate-800' : 'bg-white text-slate-800 hover:bg-slate-800 hover:text-white'}
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
