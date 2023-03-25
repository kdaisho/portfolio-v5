<script lang="ts">
	import { filterItems, projects } from "./data"
	import type { Project } from "$lib/types"

	let selectedProject: Project | null
	let activeCardId: number | null

	const handleDisplayProject = (project: Project) => {
		activeCardId = project.id
		selectedProject = project
	}
</script>

<div class="content-wrap is-side-by-side">
	<div class="right-side">
		<div class="title-group has-filters">
			<h2 class="title">Side Projects</h2>
			<p class="subtitle font-large">
				Getting my hands dirty with technologies I don't have a chance to work within my day job
				helps me stay up to date.
			</p>
		</div>
		<fieldset class="filter-section">
			<button class="toggle-filter outline-button">Filters</button>
			<legend>(AND) Filters</legend>
			<div class="filters">
				{#each filterItems as { name, key }}
					<label class="tag">
						<input type="checkbox" name={key} />
						<span class="dummy" />
						{name}
					</label>
				{/each}
			</div>
		</fieldset>
	</div>
	<div class="cards left-side">
		{#each projects as project}
			<div
				class="card"
				class:active={activeCardId === project.id}
				on:click={() => handleDisplayProject(project)}
				on:keypress
				role="button"
				tabindex="0"
			>
				<div
					class="top"
					style="background: #444 url({project.thumb}) center center / cover no-repeat"
				>
					<div class="glass" />
				</div>
				<div class="bottom">
					<div class="text-group">
						<h2 class="title">{project.title}</h2>
						<span class="separator" />
						<p class="desc">{project.subtitle}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if selectedProject}
		<div>
			Modal {selectedProject.title} !
		</div>
	{/if}
</div>

<style src="./styles.css"></style>
