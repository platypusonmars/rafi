<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';

  export let projects;

  export let currentSection: string;
</script>

<SectionWrapper id="projects" {currentSection}>
  <h2>My Projects</h2>
  <div class="projects-grid">
    {#each projects as project}
      <div class="project">
        <img src={project.image} alt={project.title} />
        <div class="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.status}</p>
          <div class="tags">
            {#if project.title === 'Cat Costume Fashion Show'}
              <span class="tag">Runway Walk</span>
              <span class="tag">Photo Posing</span>
            {/if}
            {#if project.title === 'Cat Tech Product Reviews'}
              <span class="tag">Testing Tech Products</span>
              <span class="tag">Enjoying New Stuff</span>
            {/if}
            {#if project.title === 'Bird Watching Vlogs'}
              <span class="tag">Stalking</span>
              <span class="tag">Observing</span>
            {/if}
          </div>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
            >GitHub</a
          >
          |
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer">Live Demo</a
          >
        </div>
      </div>
    {/each}
  </div>
</SectionWrapper>
