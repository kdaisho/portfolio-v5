<script lang="ts">
	import Header from "$components/header/Header.svelte"
	import Work from "$components/work/Work.svelte"
	import Hero from "$components/hero/Hero.svelte"
	import Tooling from "$components/tooling/Tooling.svelte"
	import Projects from "$components/projects/Projects.svelte"
</script>

<Header />
<Hero />
<Work />
<Tooling />
<Projects />
<div class="empty">Empty</div>

<style>
	.empty {
		background: salmon;
		height: 1500px;
		width: 100%;
	}
</style>
