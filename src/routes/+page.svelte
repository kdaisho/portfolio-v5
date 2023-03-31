<script lang="ts">
	import Header from "$components/header/Header.svelte"
	import Work from "$components/work/Work.svelte"
	import Hero from "$components/hero/Hero.svelte"
	import Tooling from "$components/tooling/Tooling.svelte"
	import Projects from "$components/projects/Projects.svelte"
	import Contact from "$components/contact/Contact.svelte"
	import Toast from "$components/toast/Toast.svelte"
	import Footer from "$components/footer/Footer.svelte"

	export let form: { success: boolean; msg: string } | null = null
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

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
