<script lang="ts">
	import { fly } from "svelte/transition"
	import { filterItems, projects } from "./data"
	import type { Project } from "$lib/types"
	import Modal from "../modal/Modal.svelte"

	let selectedProject: Project | null
	let activeCardId: number | null

	const showProject = (project: Project) => {
		activeCardId = project.id
		selectedProject = project
	}

	const hideProject = () => {
		activeCardId = null
		selectedProject = null
	}
</script>

<section id="toSideProjects" class="section is-projects">
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
					on:click={() => showProject(project)}
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
			<Modal {hideProject}>
				<div
					class="project-details bit-style active"
					on:click={event => event.stopPropagation()}
					on:keypress
					role="button"
					tabIndex={0}
					in:fly={{ y: 200, duration: 200 }}
				>
					<div
						class="top"
						style="background: #666 url({selectedProject.hero}) no-repeat center top; background-size: cover"
					/>
					<div class="bottom">
						<div class="text-group">
							<h2 class="title">{selectedProject.title}</h2>
							<p class="subtitle">{selectedProject.subtitle}</p>
							<p class="description">
								{selectedProject.description}
							</p>
							<div class="links">
								{#if selectedProject.url}
									<a
										href={selectedProject.url}
										title={selectedProject.title}
										class="link is-desktop-icon"
										target="_blank"
										rel="noopener noreferrer"
										>{"icon: Desktop()"} Visit The Website
									</a>
								{/if}
								{#if selectedProject.githubUrl}
									<a
										href={selectedProject.githubUrl}
										title={`${selectedProject.title} github repository`}
										class="link is-github-icon"
										target="_blank"
										rel="noopener noreferrer"
									>
										{"icon: Github()"}View Github Repo
									</a>
								{/if}
							</div>
						</div>
						<div class="tech-stack">
							{#each selectedProject.stack as tech}
								{#if tech !== "live"}
									<span class="tech">
										{tech}
									</span>
								{/if}
							{/each}
						</div>
						<button class="close" on:click={hideProject}>&#10005;</button>
					</div>
				</div>
			</Modal>
		{/if}
	</div>
</section>

<style src="./styles.css"></style>
