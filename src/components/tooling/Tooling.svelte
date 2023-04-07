<script lang="ts">
	import { flip } from "svelte/animate"
	import { filterItems, devIcons } from "./data"
	import { menu } from "$lib/stores"

	const themeColor = "#2962ff"
	const white = "#fff"
	const filterTerms = new Set<number>()
	let _devIcons = devIcons
	let open = false

	menu.name.subscribe(name => {
		open = name === "tooling"
	})

	const toggle = () => {
		menu.name.update(val => (val === "tooling" ? "" : "tooling"))
		menu.backdrop.update(val => !val)
	}

	const getStars = (num: number) => Array(num).fill("★").join("")

	const handleFilterChange = (checked: boolean, value: number) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value)

		if (!filterTerms.size) {
			_devIcons = devIcons
			return
		}

		_devIcons = devIcons.filter(icon => filterTerms.has(icon.stars))
	}
</script>

<section id="tooling" class="section is-tooling">
	<div class="content-wrap is-side-by-side">
		<div class="left">
			<div class="title-group has-filters">
				<h2 class="title">Tooling</h2>
				<p class="subtitle font-large">
					I'm passionate about JavaScript, TypeScript, Node.js, and unit testing, and take great
					pleasure in both writing and reviewing code related to these technologies.
				</p>
			</div>
			<fieldset class="filter-section" class:active={open}>
				<button class="toggle-filter outline-button" on:click={toggle}>Filters</button>
				<legend>Filters</legend>
				<div class="filters">
					{#each filterItems as { name, checked, stars }}
						<label
							class="tag"
							class:active={filterTerms.has(stars)}
							on:keydown
							on:click={() => handleFilterChange(checked, stars)}
						>
							<input type="checkbox" {name} bind:checked />
							<span class="dummy" />
							{name}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>
		<div class="tooling right">
			{#each _devIcons as icon (icon.name)}
				<div
					class="tool"
					animate:flip={{ duration: 250 }}
					on:mouseenter={() => (icon.color = white)}
					on:mouseleave={() => (icon.color = themeColor)}
				>
					<svg viewBox="0 0 128 128">
						{@html icon.path(icon.color)}
					</svg>
					<span class="separator" />
					<span class="stars">{getStars(icon.stars)}</span>
					<p class="tool-name">{icon.name}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style src="./styles.css"></style>
