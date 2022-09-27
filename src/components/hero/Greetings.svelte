<script>
	export let animation = true;
</script>

<div class="greetings-wrap" class:slide={animation}>
	<div class="clip-path" />
	<p class="greetings">
		Hi, my name's Daisho Komiyama and I'm a software development engineer based in Montreal with 8
		years of experience. Enthusiastic about JavaScript, TypeScript and Node.js. I'm an effective
		developer who ships clean code regularly.
	</p>
</div>

<style lang="scss">
	.greetings-wrap {
		padding-top: 25px;

		@media (min-width: 769px) {
			padding-top: 0;
			position: absolute;
			&.slide {
				animation: 0.75s 3.25s 1 slideTextIn forwards;
				opacity: 0;
			}
			top: 0;
		}
		@media (min-width: 1024px) {
			width: 500px;
		}

		.greetings {
			font-size: var(--font-large);
			line-height: 1.35;
		}
	}

	.clip-path {
		display: none;
		float: left;
		height: 425px;
		shape-outside: polygon(
			76.88% 8.83%,
			87.89% 25.35%,
			82.02% 36.09%,
			90.91% 46.34%,
			92.6% 61.75%,
			98.93% 62.36%,
			98.43% 72.77%,
			71.82% 85.76%,
			51.82% 85.79%,
			49.47% 0.26%
		);
		width: 320px;
		@media (min-width: 769px) {
			display: block;
		}
	}

	@keyframes slideTextIn {
		0% {
			opacity: 1;
			transform: translateX(100%);
		}
		16% {
			transform: translateX(-12.27%);
		}
		28% {
			transform: translateX(13.12%);
		}
		44% {
			transform: translateX(-4.63%);
		}
		59% {
			transform: translateX(1.64%);
		}
		73% {
			transform: translateX(-0.58%);
		}
		88% {
			transform: translateX(0.2%);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
