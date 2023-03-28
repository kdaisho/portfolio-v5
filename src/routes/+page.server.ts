import { fail } from "@sveltejs/kit"
import { ServerClient } from "postmark"
import { MAIL_DESTINATION, POSTMARK_API_TOKEN, RECAPTCHA_SECRET_KEY } from "$env/static/private"

const mailClient = new ServerClient(POSTMARK_API_TOKEN)

const sendEmail = async (data: { name: string; email: string; message: string }) => {
	return await mailClient.sendEmail({
		From: "admin@daishodesign.com",
		To: MAIL_DESTINATION,
		Subject: `Message from ${data.name} via portfolio`,
		HtmlBody: `<p>Name: ${data.name}</p><br><p>Message: ${data.message}</p><br><p>Email: ${data.email}</p>`,
		TextBody: `Name: ${data.name}. Content: ${data.message} Email: ${data.email}`,
		MessageStream: "outbound"
	})
}

const isValidEmail = (email: string) => {
	return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}

export const actions = {
	send: async ({ request }) => {
		const data = await request.formData()
		const name = data.get("name") as string
		const email = data.get("email") as string
		const message = data.get("message") as string

		if (!name) {
			return fail(400, { success: false, name })
		}

		if (!email || !isValidEmail(email)) {
			return fail(400, { success: false, msg: "Valid email is required." })
		}

		if (!message) {
			return fail(400, { success: false, msg: "Message is required." })
		}

		try {
			await sendEmail({ name, email, message })
			return { success: true, msg: `Thank you, ${name}!` }
		} catch (err) {
			return fail(400, { success: false, msg: "Oops, something went wrong." })
		}
	}
}
