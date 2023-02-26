<script lang="ts">
	import logo from "$assets/nav/logo.svg"
	import linkedin from "$assets/nav/linkedin.svg"
	import github from "$assets/nav/github.svg"
	import menuDots from "$assets/nav/menu-dots.svg"
	import menuClose from "$assets/nav/menu-close.svg"
	import { onMount } from "svelte"

	let openPane = false
	let inView = ""

	const scrollTo = (event: Event) => {
		event.preventDefault()
		const button = event.target
		if (!(button instanceof HTMLElement)) return
		const ref = button.dataset.ref
		if (!ref) return
		const el = document.querySelector(ref)
		if (!el) return
		button.classList.add("active")
		el.scrollIntoView({ behavior: "smooth" })
	}

	const callback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				inView = entry.target.id
			}
		})
	}

	onMount(() => {
		const observer = new IntersectionObserver(callback, {
			rootMargin: "-45% 0px -55%" // tested hundred times, -45%,-55% is the best so far
		})

		document.querySelectorAll(".scroll-to").forEach(el => {
			observer.observe(el)
		})
	})
</script>

<header
	class="header bright"
	class:high-z-index={openPane}
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
				<li class="social-each">
					<a
						href="https://www.linkedin.com/in/daisho-komiyama-6766657a/"
						title="linkedin"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={linkedin} alt="linkedin" />
					</a>
				</li>
				<li class="social-each">
					<a
						href="https://github.com/kdaisho"
						title="github"
						target="_blank"
						rel="noopener noreferrer"
						><img src={github} alt="github" />
					</a>
				</li>
			</ul>
			<button class="menu-toggle outline-button" on:click={() => console.log("click menu toggler")}>
				<img src={openPane ? menuClose : menuDots} alt="toggle menu" />
			</button>
			<div class="menu-pane">
				<div class="indicator-wrapper">
					<button
						class="button has-shadow menu-item"
						class:active={inView === "work-log"}
						data-ref="#work-log"
						on:click={scrollTo}>Work Log</button
					>
					<button
						class="button has-shadow menu-item"
						class:active={inView === "tooling"}
						data-ref="#tooling"
						on:click={scrollTo}>Tooling</button
					>
					<button
						class="button has-shadow menu-item"
						class:active={inView === "projects"}
						data-ref="#projects"
						on:click={scrollTo}>Side Projects</button
					>
					<button
						class="button has-shadow menu-item"
						class:active={inView === "contact"}
						data-ref="#contact"
						on:click={scrollTo}>Contact</button
					>
					<div class="indicator {inView}" />
				</div>
				<div class="theme-button">
					<button>🌙</button>
				</div>
			</div>
		</div>
	</div>
</header>

<style src="./styles.css"></style>
