<script lang="ts">
	export let hideProject: () => void
</script>

<div class="modal" on:click={hideProject} on:keypress role="button">
	<slot />
</div>

<style>
	.modal {
		align-items: flex-end;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(15px);
		display: flex;
		flex-flow: row nowrap;
		height: 100vh;
		justify-content: center;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	.modal:hover {
		cursor: pointer;
	}

	@media (min-width: 400px) {
		.modal {
			align-items: center;
		}
	}

	@media (min-width: 769px) {
		.modal {
			border: 6px solid var(--theme-color);
		}
	}
</style>
