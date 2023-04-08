<script lang="ts">
	import logo from "$assets/nav/logo.svg"
	import { navItems, socialNetworks } from "$lib/data"
	import menuDots from "$assets/nav/menu-dots.svg"
	import menuClose from "$assets/nav/menu-close.svg"
	import { menu } from "$lib/stores"

	let open = false
	let pressed = ""

	menu.name.subscribe(name => {
		open = name === "nav"
	})

	const toggleMenu = () => {
		menu.backdrop.update(val => !val)
		menu.name.update(val => (val === "nav" ? "" : "nav"))
	}

	const closeMenu = (name: string) => {
		pressed = name
		menu.backdrop.set(false)
		menu.name.set("")
		setTimeout(() => {
			pressed = ""
		}, 150)
	}
</script>

<header
	class="header"
	class:high-z-index={open}
	data-host-location="https://daishodesign.com/"
	data-host-location-origin="https://daishodesign.com"
	data-current-location="https://daishodesign.com/"
>
	<div class="content-wrap nav">
		<div class="nav-left">
			<a href="#page-top" class="logo"><img src={logo} height="44" width="62" alt="logo" /></a>
		</div>
		<div class="nav-right">
			<ul class="social-links">
				{#each socialNetworks as sns}
					<li class="social-each">
						<a href={sns.url} title={sns.name} target="_blank" rel="noopener noreferrer">
							<img src={sns.src} height="35" width="35" alt={sns.name} />
						</a>
					</li>
				{/each}
			</ul>
			<button class="menu-toggle outline-button" on:click={toggleMenu}>
				<img src={open ? menuClose : menuDots} alt="{open ? 'close' : 'open'} menu" />
			</button>
			<div class="menu-pane" class:active={open}>
				{#each navItems as { name, label }}
					<span class="menu-item">
						<a
							href="#{name}"
							class="menu-item"
							class:pressed={pressed === name}
							on:click={() => closeMenu(name)}>{label}</a
						>
					</span>
				{/each}
			</div>
		</div>
	</div>
</header>

<style src="./styles.css"></style>
