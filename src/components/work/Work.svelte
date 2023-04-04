<script lang="ts">
	import { cards } from "./data"
</script>

<section id="work" class="section is-education bright">
	<div class="content-wrap is-side-by-side">
		<div class="title-group">
			<h2 class="title">Work Log</h2>
			<p class="subtitle font-large">
				I've gained valuable experience in process and best practices of effective software
				development while working with these great teams.
			</p>
		</div>
		<div class="cards">
			{#each cards as card}
				<div class="card">
					<div class="side is-front">
						<h2 class="company">{card.name}</h2>
						<div class="summary">
							<h3 class="position">{card.title}</h3>
							<span class="separator" />
							<p>{card.period}</p>
							<p>{card.location}</p>
						</div>
					</div>
					<div class="side is-back">
						<div class="list">
							<p>Do</p>
							<ul>
								{#each card.tasks as task}
									<li>{task}</li>
								{/each}
							</ul>
						</div>
						<div class="list">
							<p>With</p>
							<ul>
								{#each card.techStack as tech}
									<li>{tech}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style src="./styles.css"></style>
