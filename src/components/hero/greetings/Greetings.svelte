<script>
	export let animation = true
	const yearsOfExperience = new Date().getFullYear() - 2015
</script>

<div class="greetings-wrap" class:slide={animation}>
	<div class="clip-path" />
	<p class="greetings">
		I'm Daisho Komiyama, a Montreal-based software developer with {yearsOfExperience} years of experience.
		Passionate about creating high-performance solutions with JavaScript, TypeScript, and Node.js. I'm
		committed to delivering clean and effective code, and eager to take on new challenges!
	</p>
</div>

<style src="./styles.css"></style>
