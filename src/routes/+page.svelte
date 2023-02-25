<script lang="ts">
	import Header from "../components/header/Header.svelte";
	import Work from "../components/work/Work.svelte";
	import Hero from "../components/hero/Hero.svelte";
	import Tooling from "../components/tooling/Tooling.svelte";
	import Projects from "../components/projects/Projects.svelte";
	import type { Filters } from "$lib/types";

	const handleFilterChange = ({ checked, value, filterTerms }: Filters) => {
		checked ? filterTerms.delete(value) : filterTerms.add(value);
	};
</script>

<Header />
<Hero />
<Work />
<Tooling {handleFilterChange} />
<Projects />
