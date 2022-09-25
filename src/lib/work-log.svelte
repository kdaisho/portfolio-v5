<section id="toWorkLog" class="section is-education bright">
	<div class="content-wrap is-side-by-side">
		<div class="title-group">
			<h2 class="title">Work Log</h2>
			<p class="subtitle font-large">
				I've learned processes and best practices it takes to be an effective developer while
				working in these great teams.
			</p>
		</div>
		<div class="cards">
			<div class="card">
				<div class="side is-front">
					<h2 class="company">Fabric.inc</h2>
					<div class="summary">
						<h3 class="position">Software Development Engineer</h3>
						<span class="separator" />
						<p>Aug 2020 - Sep 2022</p>
						<p>Remote</p>
					</div>
				</div>
				<div class="side is-back">
					<div class="list">
						<p>Doing</p>
						<ul><li>Headless CMS Development</li></ul>
					</div>
					<div class="list">
						<p>Using</p>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>Nextjs</li>
							<li>Nodejs</li>
							<li>Jest</li>
							<li>GraphQL</li>
							<li>Git</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="side is-front">
					<h2 class="company">Bell Canada</h2>
					<div class="summary">
						<h3 class="position">Web Application Developer</h3>
						<span class="separator" />
						<p>July 2018 - June 2020</p>
						<p>Montreal</p>
					</div>
				</div>
				<div class="side is-back">
					<div class="list">
						<p>Building</p>
						<ul><li>Lots of Web Apps</li></ul>
					</div>
					<div class="list">
						<p>Using</p>
						<ul>
							<li>React</li>
							<li>AngularJS</li>
							<li>Javascript</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Less</li>
							<li>SVN</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="side is-front">
					<h2 class="company">CGI</h2>
					<div class="summary">
						<h3 class="position">Front-end Developer</h3>
						<span class="separator" />
						<p>Apr 2018 - June 2018</p>
						<p>Montreal</p>
					</div>
				</div>
				<div class="side is-back">
					<div class="list">
						<p>Doing</p>
						<ul>
							<li>Enhancement</li>
							<li>Bug fix</li>
							<li>HTML Email</li>
						</ul>
					</div>
					<div class="list">
						<p>Using</p>
						<ul>
							<li>AngularJS</li>
							<li>JavaScript</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Less</li>
							<li>Git</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="side is-front">
					<h2 class="company">Reitmans</h2>
					<div class="summary">
						<h3 class="position">Front-end Integrator</h3>
						<span class="separator" />
						<p>Feb 2016 - Mar 2018</p>
						<p>Montreal</p>
					</div>
				</div>
				<div class="side is-back">
					<div class="list">
						<p>Doing</p>
						<ul>
							<li>Markup</li>
							<li>Style</li>
							<li>HTML Email</li>
							<li>DOM Manipulation</li>
						</ul>
					</div>
					<div class="list">
						<p>Using</p>
						<ul>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Sass</li>
							<li>Susy</li>
							<li>JavaScript</li>
							<li>SVN</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="side is-front">
					<h2 class="company">JF and Sons</h2>
					<div class="summary">
						<h3 class="position">Designer/Integrator</h3>
						<span class="separator" />
						<p>Jan 2015 - Dec 2015</p>
						<p>Montreal</p>
					</div>
				</div>
				<div class="side is-back">
					<div class="list">
						<p>Doing</p>
						<ul>
							<li>Design</li>
							<li>Markup</li>
							<li>HTML Email</li>
						</ul>
					</div>
					<div class="list">
						<p>Using</p>
						<ul>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>PHP</li>
							<li>Photoshop</li>
							<li>Illustrator</li>
							<li>Git</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.is-education {
		background: var(--background-color);

		.title-group {
			flex: 0 0 100%;

			@media (min-width: 769px) {
				flex: 0 0 35%;
				order: 2;
			}
		}

		.cards {
			display: flex;
			flex: 0 0 100%;
			flex-flow: row wrap;
			justify-content: space-around;
			justify-content: space-evenly;

			@media (min-width: 769px) {
				flex: 0 0 65%;
				order: 1;
				padding-right: 3%;
			}
		}

		.card {
			box-shadow: 5px 5px 0 var(--theme-color);
			margin: 12px;
			position: relative;
			-ms-transform-style: preserve-3d;
			transform-style: preserve-3d;
			transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
			transition-delay: 0.45s;
			user-select: none;
			width: 210px;

			h2,
			h3,
			p {
				color: var(--theme-color);
				font-weight: bold;
			}

			li {
				background: var(--theme-color);
			}

			&:hover {
				cursor: pointer;
				box-shadow: 0 0 0 transparent;
				transform: translate(5px, 5px);
				transition-delay: 0s;
			}

			&:hover,
			&:focus {
				.is-front {
					transform: perspective(800px) rotateY(180deg);
				}
				.is-back {
					transform: perspective(800px) rotateY(0);
				}
			}

			.company {
				font-size: var(--font-lead);
				font-weight: bold;
				flex: 0 0 20%;
				padding-top: 30px;
				text-align: center;
			}

			.summary {
				flex: 0 0 50%;
				text-align: center;

				p {
					padding-bottom: 3px;
				}
			}

			.separator {
				border-color: var(--theme-color);
			}
		}

		.is-front,
		.is-back {
			border: 4px solid #000;
			-webkit-backface-visibility: hidden;
			-ms-backface-visibility: hidden;
			backface-visibility: hidden;
			transition: transform 0.3s linear 0.15s;
		}

		.is-front {
			background: #fff;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-around;
			position: absolute;
			transform: perspective(800px) rotateY(0deg);
			z-index: 30;

			// img {
			// 	display: block;
			// 	margin: 0 auto;
			// 	width: 90%;
			// }
		}

		.is-back {
			background: #fff;
			display: flex;
			flex-flow: column nowrap;
			padding: 15px 10px;
			transform: perspective(800px) rotateY(-180deg);

			p {
				padding: 0 6px 1px;
			}
		}

		.side {
			border-color: var(--theme-color);
			height: 300px;
			width: 100%;
		}

		.position {
			margin: 0 auto;
			width: calc(100% - 30px);
		}

		.separator {
			border-bottom: solid;
			border-width: 2px;
			display: block;
			margin: 14px auto 16px;
			width: 38px;
		}

		.list {
			flex: 0 0 50%;
			width: 100%;

			li {
				color: #fff;
				display: inline-block;
				font-size: var(--font-small);
				font-weight: bold;
				margin: 2px;
				padding: 6px 12px;
			}
		}

		// &.dark .card {
		// 	.is-front,
		// 	.is-back {
		// 		background: #111;
		// 	}

		// 	box-shadow: 5px 5px 0 var(--theme-color);
		// 	&:hover {
		// 		box-shadow: 0 0 0 var(--theme-color);
		// 	}
		// }
	}
</style>
