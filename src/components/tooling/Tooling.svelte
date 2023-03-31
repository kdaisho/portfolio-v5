<script lang="ts">
	import { crossfade } from "svelte/transition"
	import { flip } from "svelte/animate"
	import { filterItems, devIcons } from "./data"
	import { FLIP_DURATION } from "$lib/constatns"

	const themeColor = "#2962ff"
	const white = "#fff"
	const filterTerms = new Set<number>()
	let openPane: string
	let _devIcons = devIcons

	const getStars = (num: number) => Array(num).fill("★").join("")

	const handleFilterChange = (checked: boolean, value: number) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value)

		if (!filterTerms.size) {
			_devIcons = devIcons
			return
		}

		_devIcons = devIcons.filter(icon => filterTerms.has(icon.stars))
	}

	const [send, receive] = crossfade({})
</script>

<section id="tooling" class="section is-tooling bright">
	<div class="content-wrap is-side-by-side">
		<div class="left-side">
			<div class="title-group has-filters">
				<h2 class="title">Tooling</h2>
				<p class="subtitle font-large">
					I'm passionate about JavaScript, TypeScript, Node.js, and unit testing, and take great
					pleasure in both writing and reviewing code related to these technologies.
				</p>
			</div>
			<fieldset class="filter-section" class:active={openPane === "tool"}>
				<button class="toggle-filter outline-button">Filters</button><legend>(OR) Filters</legend>
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
		<div class="tooling right-side">
			{#each _devIcons as icon (icon.name)}
				<div
					class="tool"
					in:send={{ key: icon.name }}
					out:receive={{ key: icon.name }}
					animate:flip={{ duration: FLIP_DURATION }}
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

<style lang="scss">
	.is-tooling {
		.left-side {
			flex: 0 0 100%;

			@media (min-width: 769px) {
				flex: 0 0 35%;
			}
		}

		svg {
			height: 75px;
			width: 75px;
		}

		.tooling {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;

			&.right-side {
				flex: 0 0 100%;
				padding-top: 10px;
				@media (min-width: 769px) {
					flex: 0 0 65%;
					padding: 0 0 0 3%;
				}
			}

			.tool {
				flex: 0 0 50%;
				height: 165px;
				text-align: center;
				padding: 20px;

				@media (min-width: 600px) {
					flex: 0 0 20%;
				}

				&:hover {
					background: var(--theme-color);
					cursor: pointer;

					.separator {
						border-color: #fff;
						transform: translateY(36px);
					}

					.stars {
						opacity: 1;
					}

					.tool-name {
						color: #fff;
						transform: translateY(-35px);
					}
				}

				svg {
					width: 75px;
				}

				.separator {
					display: block;
					border-bottom: 2px solid var(--theme-color);
					margin: 10px auto;
					transition: transform 0.25s ease-out;
					width: 30px;
				}

				.stars {
					color: #fff;
					display: inline-block;
					font-size: 13px;
					letter-spacing: 3px;
					opacity: 0;
					text-indent: 3px;
					transition: opacity 0.25s ease-out 0.25s;
				}

				.tool-name {
					color: var(--theme-color);
					font-size: var(--font-small);
					transform: translateY(-20px);
					transition: transform 0.25s ease-out;
				}
			}
		}
	}

	.tool:hover :global(path.white) {
		fill: var(--theme-color);
	}

	.dark.is-tooling .tooling .tool :global(path.white) {
		fill: #000;
	}

	.dark.is-tooling .tooling .tool:hover :global(path.white) {
		fill: var(--theme-color);
	}
</style>
