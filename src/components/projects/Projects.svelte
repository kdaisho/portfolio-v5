<script lang="ts">
	import { fly } from "svelte/transition"
	import { flip } from "svelte/animate"
	import { filterItems, projects } from "./data"
	import type { Project } from "$lib/types"
	import Modal from "../modal/Modal.svelte"
	import DesktopIcon from "$assets/projects/desktop-icon.svelte"
	import GithubIcon from "$assets/projects/github-icon.svelte"
	import { menu } from "$lib/stores"

	let selectedProject: Project | null
	let activeCardId: number | null
	const filterTerms = new Set<string>()
	let _projects = projects
	let open = false

	menu.name.subscribe(name => {
		open = name === "projects"
	})

	const toggle = () => {
		menu.name.update(val => (val === "projects" ? "" : "projects"))
		menu.backdrop.update(val => !val)
	}

	const showProject = (project: Project) => {
		activeCardId = project.id
		selectedProject = project
	}

	const hideProject = () => {
		activeCardId = null
		selectedProject = null
	}

	const handleFilterChange = (checked: boolean, value: string) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value)

		if (!filterTerms.size) {
			_projects = projects
			return
		}

		_projects = projects.filter(project => project.stack.some(st => filterTerms.has(st)))
	}
</script>

<section id="side-projects" class="section is-projects">
	<div class="content-wrap is-side-by-side">
		<div class="right-side">
			<div class="title-group has-filters">
				<h2 class="title">Side Projects</h2>
				<p class="subtitle font-large">
					I believe in the importance of continuous learning and development, and experimenting with
					new technologies outside of my day job is a great way to achieve that.
				</p>
			</div>
			<fieldset class="filter-section" class:active={open}>
				<button class="toggle-filter outline-button" on:click={toggle}>Filters</button>
				<legend>Filters</legend>
				<div class="filters">
					{#each filterItems as { name, checked, key }}
						<label
							class="tag"
							class:active={filterTerms.has(key)}
							on:keydown
							on:click={() => handleFilterChange(checked, key)}
						>
							<input type="checkbox" name={key} bind:checked />
							<span class="dummy" />
							{name}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>
		<div class="cards left-side">
			{#each _projects as project (project.id)}
				<div
					class="card"
					class:active={activeCardId === project.id}
					animate:flip={{ duration: 250 }}
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
					tabindex="0"
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
							<p class="year">Year {selectedProject.year}</p>
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
									>
										<DesktopIcon /> Visit The Website
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
										<GithubIcon /> View Source Code
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
