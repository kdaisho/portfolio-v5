<script lang="ts">
	import logo from "$assets/nav/logo.svg"
	import { socialNetworks } from "$lib/data"
	import menuDots from "$assets/nav/menu-dots.svg"
	import menuClose from "$assets/nav/menu-close.svg"
	import { menu } from "$lib/stores"

	let open = false

	menu.name.subscribe(name => {
		open = name === "nav"
	})

	const toggleMenu = () => {
		menu.backdrop.update(val => !val)
		menu.name.update(val => (val === "nav" ? "" : "nav"))
	}

	const closeMenu = () => {
		menu.backdrop.set(false)
		menu.name.set("")
	}
</script>

<header
	class="header bright"
	class:high-z-index={open}
	data-host-location="https://daishodesign.com/"
	data-host-location-origin="https://daishodesign.com"
	data-current-location="https://daishodesign.com/"
>
	<div class="content-wrap nav">
		<div class="nav-left">
			<button class="logo"><img src={logo} alt="logo" /></button>
		</div>
		<div id="navRight" class="nav-right">
			<ul class="social-links">
				{#each socialNetworks as sns}
					<li class="social-each">
						<a href={sns.url} title={sns.name} target="_blank" rel="noopener noreferrer">
							<img src={sns.src} alt={sns.name} />
						</a>
					</li>
				{/each}
			</ul>
			<button class="menu-toggle outline-button" on:click={toggleMenu}>
				<img src={open ? menuClose : menuDots} alt="{open ? 'close' : 'open'} menu" />
			</button>
			<div class="menu-pane" class:active={open}>
				<a href="#work" class="button has-shadow menu-item" on:click={closeMenu}>Work Log</a>
				<a href="#tooling" class="button has-shadow menu-item" on:click={closeMenu}>Tooling</a>
				<a href="#side-projects" class="button has-shadow menu-item" on:click={closeMenu}
					>Side Projects</a
				>
				<a href="#contact" class="button has-shadow menu-item" on:click={closeMenu}>Contact</a>
			</div>
		</div>
	</div>
</header>

<style src="./styles.css"></style>
