<script>
	export let animation = true
	const yearsOfExperience = new Date().getFullYear() - 2015
</script>

<div class="greetings-wrap" class:slide={animation}>
	<div class="clip-path" />
	<p class="greetings">
		Hi, I'm Daisho Komiyama, a software developer based in Montreal with {yearsOfExperience} years of
		experience. As someone who is obsessed with building for performance, I'm passionate about creating
		with JavaScript, TypeScript, and Node.js. I take pride in consistently delivering clean and effective
		code, and I'm excited to see what new challenges lie ahead!
	</p>
</div>

<style src="./styles.css"></style>
