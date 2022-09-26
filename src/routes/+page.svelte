<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Work from "$lib/Work.svelte";
	import Hero from "$lib/Hero.svelte";
	import Tooling from "$lib/tooling/Tooling.svelte";
	import type { Filters } from "../types";

	const handleFilterChange = ({ checked, value, filterTerms }: Filters) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<Header />
<Hero />
<Work />
<Tooling {handleFilterChange} />
