<script lang="ts">
	import { enhance } from "$app/forms"
	export let form: { success: boolean; msg: string } | null = null
	console.log("FORM", form)

	let sending = false
</script>

<section id="toContact" class="section is-contact">
	<div class="content-wrap is-side-by-side">
		<div class="left-side title-group">
			<h2 class="title">Contact</h2>
			<p class="subtitle font-large">
				Thank you for taking the time to check out my work. If you found any of my projects
				interesting or useful, I would love to hear from you.
				<br />
				Please feel free to get in touch, and I look forward to connecting with you soon.
			</p>
		</div>
		<div class="right-side">
			<p class="thank-you-note">
				{#if form?.success}
					<span>Done!</span>
				{:else if sending}
					<span>Sending...</span>
				{/if}
			</p>
			<form class="contact-form" method="POST" action=".?/send" use:enhance>
				<div class="form-group">
					<label for="name">Name</label>
					<input class="text-input" type="text" name="name" maxlength={45} required />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input class="text-input" type="email" name="email" maxlength={60} required />
				</div>
				<div class="form-group">
					<label for="message">Message</label>
					<textarea name="message" rows={6} maxLength={2500} required />
				</div>
				<button class="button is-flat is-submit outline-button">Send</button>
			</form>
		</div>
	</div>
</section>

<style src="./styles.css"></style>
