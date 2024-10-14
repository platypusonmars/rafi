<script lang="ts">
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="hero">
  <h1>Rafi</h1>
  <h2>Fluff Portfolio 🐾</h2>
  <p>Specializing in food, toys, and luxury kitty lifestyle.</p>
  <a href="#projects" class="btn">View My Work</a>
  <div class="hero-image" id="hero-image">
    <DotLottieSvelte src="src/routes/fluff.lottie" autoplay />
  </div>
</SectionWrapper>
