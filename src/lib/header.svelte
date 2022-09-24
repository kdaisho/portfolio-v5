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
						rel="noopener noreferrer"><img src="/nav/github.svg" alt="github" /></a
					>
				</li>
			</ul>
			<button class="menu-toggle outline-button">
				<img src="/nav/menu-dots.svg" alt="open menu" />
			</button>
			<div class="menu-pane">
				<button class="button has-shadow is-menu-item">Work Log</button>
				<button class="button has-shadow is-menu-item">Tooling</button>
				<button class="button has-shadow is-menu-item">Side Projects</button>
				<button class="button has-shadow is-menu-item">Contact</button>
				<div class="theme-button">
					<button>🌙</button>
				</div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.header {
		background: var(--theme-color);
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 35;

		&.high-z-index {
			z-index: 100;
		}

		.nav {
			align-items: center;
			display: flex;
			flex-flow: row nowrap;
			height: 48px;
			justify-content: space-between;
			padding: 0 6px;

			@media (min-width: 769px) {
				height: 58px;
			}

			.nav-left {
				flex: 0 0 80px;
				height: 35px;
				overflow: hidden;

				@media (min-width: 769px) {
					height: 43px;
				}

				.logo {
					background: none;
					border: none;
					padding: 0;
					width: 54px;

					&:hover {
						cursor: pointer;
					}

					&:focus,
					&:active {
						outline: none;
					}
				}

				svg {
					// transform: scale(0.4);
					// transform-origin: top left;

					@media (min-width: 769px) {
						transform: scale(0.5);
					}
				}

				path {
					fill: #fff;
				}
			}

			.nav-right {
				align-items: center;
				display: flex;
				flex-flow: row nowrap;
				flex: 0 0 calc(100% - 150px);
				justify-content: flex-end;

				.social-links {
					display: flex;
					flex-flow: row nowrap;
					flex: 0 0 100px;
					justify-content: space-around;
					margin-right: 5px;

					@media (min-width: 769px) {
						flex: 0 0 110px;
						margin-right: 15px;
					}

					a {
						display: block;
						text-align: center;
					}

					img {
						width: 28px;

						@media (min-width: 769px) {
							width: 35px;
						}
					}
				}

				.social-each {
					flex: 0 0 50%;
					height: 28px;

					@media (min-width: 769px) {
						height: 35px;
					}
				}

				.menu-toggle {
					background: transparent;
					border: none;
					color: var(--theme-color);
					padding-top: 4px;

					img {
						width: 32px;
					}

					@media (min-width: 769px) {
						display: none;
					}
				}

				.theme-button {
					display: flex;
					height: 60px;
					justify-content: center;

					@media (min-width: 769px) {
						height: auto;
					}

					button {
						border: none;
						background: none;
						font-size: 1.5rem;
						margin-left: 0.5rem;

						&:focus,
						&:active {
							outline: none;
						}

						&:hover {
							cursor: pointer;
						}
					}
				}

				.menu-pane {
					background: var(--theme-color);
					border: 4px solid #2962ff;
					border-width: 0 0 4px 4px;
					height: calc(100vh - 48px);
					max-width: 250px;
					position: absolute;
					right: -250px;
					top: 48px;
					transition: right 0.15s ease-out;
					width: 100%;

					&.active {
						right: 0;
						z-index: 100;
					}

					@media (min-width: 769px) {
						border: none;
						display: flex;
						flex-flow: row nowrap;
						flex: 0 0 50%;
						height: auto;
						justify-content: flex-end;
						margin-top: -5px;
						max-width: none;
						position: initial;
						width: 100%;

						label {
							&:hover {
								cursor: pointer;
							}
						}
					}

					.is-menu-item {
						box-shadow: none;
						border-width: 0 0 4px 0;
						font-size: 18px;
						height: 70px;
						margin: 0;
						width: 100%;
						white-space: nowrap;

						@media (min-width: 769px) {
							border: 3px solid var(--theme-color-darken);
							box-shadow: 4px 4px 0 var(--theme-color-darken);
							color: var(--theme-color-darken);
							font-size: var(--font-medium);
							height: 40px;
							margin: 0 6px;
							transition: translate 0.05s ease-in box-shadow 0.05s ease-in;

							&.active {
								box-shadow: 0 0 0 var(--theme-color);
								transform: translate(4px, 4px);
							}
						}
					}
				}
			}
		}

		&.dark {
			.nav {
				.nav-right {
					.menu-pane {
						.is-menu-item {
							@media (min-width: 769px) {
								background: var(--theme-color);
								border: 3px solid #fff;
								box-shadow: 4px 4px 0 #fff;
								color: #fff;
								font-size: var(--font-medium);
								height: 40px;
								margin: 0 6px;
								transition: translate 0.05s ease-in box-shadow 0.05s ease-in;

								&.active {
									box-shadow: 0 0 0 var(--theme-color);
									transform: translate(4px, 4px);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
