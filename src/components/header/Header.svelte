<script lang="ts">
	import logo from "$assets/nav/logo.svg"
	import linkedin from "$assets/nav/linkedin.svg"
	import github from "$assets/nav/github.svg"
	import menuDots from "$assets/nav/menu-dots.svg"
	import menuClose from "$assets/nav/menu-close.svg"

	let openPane = false
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
				<button class="button has-shadow menu-item">Work Log</button>
				<button class="button has-shadow menu-item">Tooling</button>
				<button class="button has-shadow menu-item">Side Projects</button>
				<button class="button has-shadow menu-item">Contact</button>
				<div class="theme-button">
					<button>🌙</button>
				</div>
			</div>
		</div>
	</div>
</header>

<style src="./styles.css"></style>
