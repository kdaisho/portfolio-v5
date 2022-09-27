<script lang="ts">
	import Header from "../components/Header.svelte";
	import Work from "../components/Work.svelte";
	import Hero from "../components/hero/Hero.svelte";
	import Tooling from "../components/tooling/Tooling.svelte";
	import type { Filters } from "$lib/types";

	const handleFilterChange = ({ checked, value, filterTerms }: Filters) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<Header />
<Hero />
<Work />
<Tooling {handleFilterChange} />
