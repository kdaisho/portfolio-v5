<script lang="ts">
	import Header from "$components/header/Header.svelte"
	import Work from "$components/work/Work.svelte"
	import Hero from "$components/hero/Hero.svelte"
	import Tooling from "$components/tooling/Tooling.svelte"
	import Projects from "$components/projects/Projects.svelte"
	import Contact from "$components/contact/Contact.svelte"
	import Toast from "$components/toast/Toast.svelte"
	import Footer from "$components/footer/Footer.svelte"
	import { fade } from "svelte/transition"
	import { menu } from "$lib/stores"

	export let form: { success: boolean; msg: string } | null = null

	let open = false

	menu.backdrop.subscribe(val => {
		open = val
	})

	const toggle = () => {
		menu.name.set("")
		menu.backdrop.set(false)
	}
</script>

<Header />
<Hero />
<Work />
<Tooling />
<Projects />
<Contact {form} />
<Footer />

{#if form?.msg}
	<Toast msg={form.msg} success={form.success} />
{/if}

{#if open}
	<div
		class="backdrop"
		on:click={toggle}
		on:keypress
		transition:fade={{ duration: 250, delay: 100 }}
	/>
{/if}

<style>
	.backdrop {
		display: block;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(15px);
		height: 100vh;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 40;
	}

	@media (min-width: 769px) {
		.backdrop {
			display: none;
		}
	}
</style>
