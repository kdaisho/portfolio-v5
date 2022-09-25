<script>
	import { onDestroy, onMount } from "svelte";
	import Greetings from "$lib/greetings.svelte";

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

<style lang="scss">
	.is-hero {
		padding: 100px 0 50px;

		@media (min-width: 769px) {
			padding: 120px 0 60px;
		}

		.left-side {
			align-items: center;
			display: flex;
			flex-flow: column nowrap;
			flex: 0 0 100%;

			@media (min-width: 769px) {
				align-items: flex-end;
				flex: 0 0 40%;
			}
		}

		.right-side {
			background-position: center center;
			background-repeat: no-repeat;
			background-size: contain;
			flex: 0 0 100%;
			height: 366px;
			position: relative;
			width: 100%;

			@media (min-width: 769px) {
				background-position: -2px center;
				flex: 0 0 55%;
				max-width: 680px;
			}
		}

		&.dark {
			.typewriter {
				h1 {
					animation: typing 1s 1.75s steps(9, end) forwards, darkBlinkCursor 1s step-end infinite;
				}
			}
		}

		.sequence {
			animation: coding 1.1s steps(12, end) infinite;
			background-size: cover;
			height: 300px;
			left: 50%;
			position: absolute;
			top: 0;
			transform: translateX(-50%);
			width: 320px;
			@media (min-width: 769px) {
				left: 0;
				transform: none;
			}
		}

		.typewriter {
			padding-bottom: 50px;
			position: relative;
			width: 230px;

			h1 {
				animation: typing 1s 1.75s steps(9, end) forwards, blinkCursor 1s step-end infinite;
				border-right: 0.5rem solid #fff;
				color: #000;
				font-family: monospace;
				font-size: 36px;
				letter-spacing: 0.15rem;
				left: 0;
				margin: 0 auto;
				overflow: hidden;
				position: absolute;
				top: 0;
				width: 0;
				white-space: nowrap;
			}
		}
	}

	@keyframes coding {
		100% {
			background-position: 0 -4320px;
		}
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blinkCursor {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #000;
		}
	}

	@keyframes darkBlinkCursor {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: var(--theme-color);
		}
	}
</style>
