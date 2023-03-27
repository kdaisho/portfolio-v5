<script lang="ts">
	import { fly } from "svelte/transition"
	import { backOut } from "svelte/easing"

	export let msg: string | null = null
	export let success = false

	const bg = success ? "#2962ff" : "#ff1744"
	const duration = success ? 2000 : 6000

	setTimeout(() => {
		msg = null
	}, duration)
</script>

{#if msg}
	<div in:fly={{ y: 200 }} out:fly={{ y: -200, easing: backOut }} style="--bg-toast: {bg}">
		<p style="color: #fff">{msg}</p>
	</div>
{/if}

<style>
	div {
		align-items: center;
		background: var(--bg-toast);
		border-radius: 6px;
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
		display: flex;
		height: 55px;
		left: 50%;
		max-width: 300px;
		padding: 0 1.25rem;
		position: fixed;
		top: 100px;
		transform: translateX(-50%);
		z-index: 300;
	}

	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
