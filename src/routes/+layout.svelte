<svelte:head>
	<meta name="description" content="Daisho | Software Development Engineer" />
	<meta
		name="keywords"
		content="Software development engineer, front-end developer, javascript, css, html, react, nodejs, gatsby, nextjs"
	/>
	<meta name="author" content="Daisho Komiyama" />
	<meta property="og:title" content="Daisho | Software Development Engineer" />
	<meta property="og:site_name" content="Daisho | Software Development Engineer" />
	<meta property="og:url" content="https://daishodesign.com/" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Enthusiastic about JavaScript, TypeScript, Nodejs, CSS enjoying both writing and reviewing. I started in 2014 and have been passionate about what I do; the problems I face; I love my work."
	/>
	<meta
		property="og:image"
		content="https://res.cloudinary.com/de9x7yfyb/image/upload/v1644639143/daishodesign/highlights-en_t6d8r3.jpg"
	/>
	<meta property="og:image:width" content="400" />
	<title>Daisho | SDE</title>
	<link rel="canonical" href="https://daishodesign.com/" />
</svelte:head>

<div class="root">
	<div class="component-wrap">
		<slot />
	</div>
</div>

<style lang="scss" global>
	@import "../styles/global.scss";
	@import "../styles/reset.scss";
</style>
