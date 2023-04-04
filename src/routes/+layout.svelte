<svelte:head>
	<meta name="description" content="Daisho | Software Developer" />
	<meta
		name="keywords"
		content="Montreal, Canada, Japanese, software developer, front-end developer, javascript, typescript, css, html, svelte, sveltekit, react, deno.js, node.js, gatsby, next.js"
	/>
	<meta name="author" content="Daisho Komiyama" />
	<meta property="og:title" content="Daisho | Software Developer" />
	<meta property="og:site_name" content="Daisho | Software Developer" />
	<meta property="og:url" content="https://daishodesign.com/" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="As a software developer, I am passionate about the power of JavaScript, TypeScript, and Node.js to solve complex problems and create impactful solutions. With over 8 years of experience, I enjoy both writing and reviewing code, and take pride in delivering high-quality, performant applications. Since starting in 2014, I have remained enthusiastic about my work and the challenges it presents."
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/de9x7yfyb/image/upload/v1644639143/daishodesign/highlights-en_t6d8r3.jpg"
	/>
	<meta property="og:image:width" content="400" />
	<title>Daisho | Software Developer</title>
	<link rel="canonical" href="https://daishodesign.com/" />
</svelte:head>

<div class="root">
	<div class="component-wrap">
		<slot />
	</div>
</div>

<style global>
	@import "../styles/reset.css";
	@import "../styles/global.css";

	html {
		scroll-behavior: smooth;
	}
</style>
