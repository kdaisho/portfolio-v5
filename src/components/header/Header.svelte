<script lang="ts">
	import logo from "$assets/nav/logo.svg"
	import { socialNetworks } from "$lib/data"
	import menuDots from "$assets/nav/menu-dots.svg"
	import menuClose from "$assets/nav/menu-close.svg"
	import { fade } from "svelte/transition"

	let openPane = false
</script>

<header
	class="header bright"
	class:high-z-index={openPane}
	data-host-location="https://daishodesign.com/"
	data-host-location-origin="https://daishodesign.com"
	data-current-location="https://daishodesign.com/"
>
	<div class="content-wrap nav">
		<div class="nav-left">
			<button class="logo"><img src={logo} alt="logo" /></button>
		</div>
		<div id="navRight" class="nav-right">
			<ul class="social-links">
				{#each socialNetworks as sns}
					<li class="social-each">
						<a href={sns.url} title={sns.name} target="_blank" rel="noopener noreferrer">
							<img src={sns.src} alt={sns.name} />
						</a>
					</li>
				{/each}
			</ul>
			<button class="menu-toggle outline-button" on:click={() => (openPane = !openPane)}>
				<img src={openPane ? menuClose : menuDots} alt="{openPane ? 'close' : 'open'} menu" />
			</button>
			<div class="menu-pane" class:active={openPane}>
				<a href="#work" class="button has-shadow menu-item">Work Log</a>
				<a href="#tooling" class="button has-shadow menu-item">Tooling</a>
				<a href="#side-projects" class="button has-shadow menu-item">Side Projects</a>
				<a href="#contact" class="button has-shadow menu-item">Contact</a>
			</div>
		</div>
	</div>
</header>

{#if openPane}
	<div
		class="backdrop"
		transition:fade={{ duration: 350, delay: 100 }}
		on:click={() => (openPane = !openPane)}
		on:keypress
	/>
{/if}

<style src="./styles.css"></style>
