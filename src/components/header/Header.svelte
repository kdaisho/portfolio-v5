<script>
	let openPane = false;
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
			<button class="logo"><img src="/nav/logo.svg" alt="logo" /></button>
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
						<img src="/nav/linkedin.svg" alt="linkedin" />
					</a>
				</li>
				<li class="social-each">
					<a
						href="https://github.com/kdaisho"
						title="github"
						target="_blank"
						rel="noopener noreferrer"
						><img src="/nav/github.svg" alt="github" />
					</a>
				</li>
			</ul>
			<button class="menu-toggle outline-button">
				<img src="/nav/menu-dots.svg" alt="open menu" />
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
