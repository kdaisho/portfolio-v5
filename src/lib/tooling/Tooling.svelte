<script lang="ts">
	import { filterItems, devIcons } from "$lib/tooling/data";
	import type { Filters } from "../../types";

	let themeColor = "#2962ff";
	let white = "#fff";
	let openPage: string;
	const filterTerms = new Set<number>();

	const getStars = (num: number) => Array(num).fill("★").join("");

	export let handleFilterChange: (args: Filters) => void;
</script>

<section id="toTooling" class="section is-tooling bright">
	<div class="content-wrap is-side-by-side">
		<div class="left-side">
			<div class="title-group has-filters">
				<h2 class="title">Tooling</h2>
				<p class="subtitle font-large">
					Enthusiastic about JavaScript, TypeScript, Nodejs, Jest. I enjoy both writing and
					reviewing.
				</p>
			</div>
			<fieldset class="filter-section" class:active={openPage === "tool"}>
				<button class="toggle-filter outline-button">Filters</button><legend>(OR) Filters</legend>
				<div class="filters">
					{#each filterItems as item}
						<label
							class="tag"
							class:active={filterTerms.has(item.stars)}
							on:click={() => {
								handleFilterChange({
									checked: item.checked,
									value: item.stars,
									filterTerms
								});
							}}
						>
							<input type="checkbox" name={item.name} bind:checked={item.checked} />
							<span class="dummy" />
							{item.name}
						</label>
					{/each}
				</div>
			</fieldset>
		</div>
		<div class="tooling right-side">
			{#each devIcons as icon}
				<div
					class="tool"
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
						font-size: 12px;
						letter-spacing: 3px;
						opacity: 1;
					}

					.tool-name {
						color: #fff;
						transform: translateY(-36px);
					}
				}

				.separator {
					display: block;
					border-bottom: 2px solid var(--theme-color);
					margin: 12px auto;
					transition: transform 0.25s ease-out;
					width: 30px;
				}

				.stars {
					color: #fff;
					font-size: 0;
					opacity: 0;
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
</style>
