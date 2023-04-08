<script lang="ts">
	import Logo from "$components/Logo.svelte"
	import { getCurrentYear } from "$lib/utils"
	import { socialNetworks } from "$lib/data"
	import { onMount } from "svelte"

	let footer: HTMLElement
	let inView = false

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.75
	}

	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				inView = true
			}
		})
	}

	onMount(() => {
		const observer = new IntersectionObserver(callback, options)
		observer.observe(footer)
	})
</script>

<footer class="is-footer" class:draw={inView} bind:this={footer}>
	<div class="content-wrap">
		<div class="left">
			<p class="copyright">&copy; Copyright {getCurrentYear()} daishodesign.com</p>
			<p>Montreal, QC</p>
		</div>
		<div class="right">
			<div class="sns">
				{#each socialNetworks as sns}
					<a href={sns.url} title={sns.name} target="_blank" rel="noopener noreferrer">
						<img src={sns.src} height="35" width="35" class={sns.name} alt={sns.name} />
					</a>
				{/each}
			</div>
			<Logo />
		</div>
	</div>
</footer>

<style src="./styles.css"></style>
