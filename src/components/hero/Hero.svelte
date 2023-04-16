<script lang="ts">
	import { onDestroy, onMount } from "svelte"
	import Greetings from "./greetings/Greetings.svelte"
	import catBody from "$assets/hero/cat-body.svg"
	import catActions from "$assets/hero/cat-actions.svg"

	const preloadImageUrls = [catBody, catActions]

	let animation = true
	let innerWidth = 0

	const timeoutId = setTimeout(() => {
		animation = false
	}, 5000)

	onMount(() => {
		innerWidth = window.innerWidth
	})

	onDestroy(() => clearInterval(timeoutId))
</script>

<svelte:head>
	{#each preloadImageUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<svelte:window bind:innerWidth />

<section id="page-top" class="is-hero">
	<div class="content-wrap is-side-by-side">
		<div class="left-side">
			<div class="typewriter">
				<h1>Who am I?</h1>
			</div>
		</div>
		<div class="right-side" style="background-image: url({catBody})">
			<div class="sequence" style="background: url({catActions}) 0 0 no-repeat" />
			{#if innerWidth >= 769}
				<Greetings {animation} />
			{/if}
		</div>
		{#if innerWidth <= 768}
			<Greetings {animation} />
		{/if}
	</div>
</section>

<style src="./styles.css"></style>
