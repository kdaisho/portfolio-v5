<script>
	import { onDestroy, onMount } from "svelte";
	import Greetings from "./greetings/Greetings.svelte";

	let animation = true;
	let innerWidth = 0;

	const timeoutId = setTimeout(() => {
		animation = false;
	}, 5000);

	onMount(() => {
		innerWidth = window.innerWidth;
	});

	onDestroy(() => clearInterval(timeoutId));
</script>

<svelte:window bind:innerWidth />

<section id="pageTop" class="is-hero bright">
	<div class="content-wrap is-side-by-side">
		<div class="left-side"><div class="typewriter"><h1>Who am I?</h1></div></div>
		<div class="right-side" style="background-image: url(/hero/cat-body.svg);">
			<div class="sequence" style="background: url(/hero/cat-actions.svg) 0 0 no-repeat;" />
			{#if innerWidth >= 769}
				<Greetings {animation} />
			{/if}
		</div>
		{#if innerWidth <= 768}
			<Greetings {animation} />
		{/if}
	</div>
</section>

<style src="./styles.scss"></style>
