import type { Project } from "$lib/types"
import archiveHero from "../../assets/projects/archive-hero.jpg"
import archiveThumb from "$assets/projects/archive-thumb.webp"
import countdownHero from "$assets/projects/countdown-hero.jpg"
import countdownThumb from "$assets/projects/countdown-thumb.jpg"
import drumkitHero from "$assets/projects/drumkit-hero.jpg"
import drumkitThumb from "$assets/projects/drumkit-thumb.jpg"
import ebHero from "$assets/projects/eb-hero.jpg"
import ebThumb from "$assets/projects/eb-thumb.jpg"
import jsbestHero from "$assets/projects/jsbest-hero.jpg"
import jsbestThumb from "$assets/projects/jsbest-thumb.webp"
import mybraillerHero from "$assets/projects/mybrailler-hero.jpg"
import mybraillerThumb from "$assets/projects/mybrailler-thumb.jpg"
import nonbreakingHero from "$assets/projects/nonbreaking-hero.jpg"
import nonbreakingThumb from "$assets/projects/nonbreaking-thumb.jpg"
import portfolioHero from "$assets/projects/portfolio-hero.jpg"
import portfolioThumb from "$assets/projects/portfolio-thumb.webp"
import qc3Hero from "$assets/projects/qc3-hero.jpg"
import qc3Thumb from "$assets/projects/qc3-thumb.jpg"
import suicideHero from "$assets/projects/suicide-hero.jpg"
import suicideThumb from "$assets/projects/suicide-thumb.jpg"

export const projects: Project[] = [
	{
		id: 0,
		title: "JavaScriptBest",
		subtitle: "The essential app for online learners: Course reviews at your fingertips",
		year: "2019",
		description:
			"JavaScriptBest is a powerful tool that enables you to centralize all of your favorite online courses in a single location. This innovative platform is built entirely using JavaScript, from the user interface to the backend, and optimized for outstanding performance.",
		stack: ["nodejs", "handlebars", "sass", "mongodb"],
		hero: jsbestHero,
		thumb: jsbestThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/javascriptbest"
	},
	{
		id: 1,
		title: "Portfolio",
		subtitle: "Crafting modern web experiences with SvelteKit",
		year: "2015 - Present",
		description:
			"My portfolio website is an impressive display of my capabilities as a skilled professional, designed to showcase my talents and experience. It is built using SvelteKit, an advanced framework that provides exceptional speed, performance, and flexibility.",
		stack: ["svelte", "nodejs", "live"],
		hero: portfolioHero,
		thumb: portfolioThumb,
		url: "https://daishodesign.com",
		githubUrl: "https://github.com/kdaisho/portfolio-v4"
	},
	{
		id: 2,
		title: "Quebec3",
		subtitle: "A fast and responsive blog powered by a static site generator",
		year: "2015 - Present",
		description:
			"Quebec3 is a blog constructed with Gatsby, a highly efficient static site generator renowned for its lightning-fast performance and minimalistic design. With its streamlined architecture, Quebec3 offers readers an exceptional browsing experience that is both quick and intuitive.",
		stack: ["gatsby", "react", "graphql", "live"],
		hero: qc3Hero,
		thumb: qc3Thumb,
		url: "https://quebec3.com",
		githubUrl: "https://github.com/kdaisho/quebec3-v2"
	},
	{
		id: 3,
		title: "Braille Typewriter Copilot",
		subtitle: "Empowering the Blind Community",
		year: "2018",
		description:
			"Braille Typewriter Copilot serves as a valuable training tool for individuals with visual impairments who are beginning to use the Perkins brailler. Unlike the traditional Perkins brailler, which does not provide feedback on typographical errors, this innovative device is equipped with a speech function that announces mistakes as they occur",
		stack: ["angular"],
		hero: mybraillerHero,
		thumb: mybraillerThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/brailler"
	},
	{
		id: 4,
		title: "Email Builder",
		subtitle: "Powerful email building made simple",
		year: "2015",
		description:
			"In a past position, I was tasked with creating a significant number of HTML emails and website updates. While the process of building emails was straightforward, it was also repetitive and time-consuming, leaving me with limited time for other important tasks. To address this challenge, I developed a tool that streamlined the email creation process, resulting in a significant reduction in the average time required to produce a single email. Thanks to this innovative solution, email production time was reduced from 50 minutes to just seven minutes, allowing me to focus on other critical tasks and ultimately improving overall productivity.",
		stack: ["angular", "regex"],
		hero: ebHero,
		thumb: ebThumb,
		url: "",
		githubUrl: ""
	},
	{
		id: 5,
		title: "5 Facts Nobody Tell You About Suicide in Japan",
		subtitle: "The tragic reality of suicide in Japan",
		year: "2018",
		description:
			"A powerful infographic that seeks to raise awareness of Japan's high suicide rate. This thought-provoking piece was created using plain HTML and CSS Grid, showcasing the creative potential of these technologies to deliver compelling visual content.",
		stack: ["cssGrid", "live"],
		hero: suicideHero,
		thumb: suicideThumb,
		url: "https://kdaisho.github.io/Infographic/",
		githubUrl: "https://github.com/kdaisho/Infographic"
	},
	{
		id: 6,
		title: "French Formatter",
		subtitle: "Say goodbye to French grammar errors",
		year: "2018",
		description:
			"French Formatter is a powerful tool that automatically inserts non-breaking spaces (&ngsp;) where French grammar requires, such as in instances like 30&ngsp;%. This innovative solution eliminates the need for repetitive manual input, streamlining the formatting process and reducing the potential for human error. By leveraging the power of regular expression, French Formatter allows for greater accuracy and efficiency, ultimately saving valuable time and resources.",
		stack: ["vanillajs", "less", "regex"],
		hero: nonbreakingHero,
		thumb: nonbreakingThumb,
		url: "https://kdaisho.github.io/French-Formatter/",
		githubUrl: "https://github.com/kdaisho/French-Formatter"
	},
	{
		id: 7,
		title: "Global Countdown Timer",
		subtitle: "A countdown that transcends time zones",
		year: "2018",
		description:
			"Global Countdown Timer is a versatile tool that enables developers to easily incorporate a countdown widget into their applications. This reliable solution has been extensively tested and proven successful by a leading Canadian apparel retailer. It is particularly well-suited for advertising time-limited offers, displaying the same hours across all time zones. Global Countdown Timer is a stand-alone solution that does not require API support, making it a simple and accessible choice for developers looking to enhance their applications.",
		stack: ["vanillajs"],
		hero: countdownHero,
		thumb: countdownThumb,
		url: "https://kdaisho.github.io/global-countdown/",
		githubUrl: "https://github.com/kdaisho/global-countdown"
	},
	{
		id: 8,
		title: "Japanese Drum Kit",
		subtitle: "Where fun and entertainment meet",
		year: "2018",
		description:
			"Japanese Drum Kit is a fun and engaging project that showcases the creative potential of vanilla JavaScript. This simple yet effective tool provides users with an interactive and enjoyable experience, offering a unique insight into the power of programming. By using vanilla JavaScript, this project highlights the impressive capabilities of this foundational technology, providing a solid foundation for more advanced development projects.",
		stack: ["vanillajs", "live"],
		hero: drumkitHero,
		thumb: drumkitThumb,
		url: "https://kdaisho.github.io/japan-sound-board/",
		githubUrl: "https://github.com/kdaisho/japan-sound-board"
	},
	{
		id: 9,
		title: "Archive Everything",
		subtitle: "Your one-stop archiving solution",
		year: "2020",
		description:
			"Archive Everything is a powerful documentation tool that leverages the capabilities of Node.js and React. With a command-line interface to facilitate initial setup, this innovative solution provides users with a reliable and secure means of preserving sensitive information. By utilizing a local file system, Archive Everything ensures that data is persistent and easily accessible, making it an ideal solution for workplace documentation or personal organization.",
		stack: ["nodejs", "react"],
		hero: archiveHero,
		thumb: archiveThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/archiving-app"
	}
]

export const filterItems: { name: string; checked: boolean; key: string }[] = [
	{
		name: "Live",
		checked: false,
		key: "live"
	},
	{
		name: "VanillaJs",
		checked: false,
		key: "vanillajs"
	},
	{
		name: "Nodejs",
		checked: false,
		key: "nodejs"
	},
	{
		name: "Svelte",
		checked: false,
		key: "svelte"
	},
	{
		name: "React",
		checked: false,
		key: "react"
	},
	{
		name: "Angular",
		checked: false,
		key: "angular"
	},
	{
		name: "Sass",
		checked: false,
		key: "sass"
	},
	{
		name: "Less",
		checked: false,
		key: "less"
	},
	{
		name: "Css Grid",
		checked: false,
		key: "cssGrid"
	},
	{
		name: "mongoDB",
		checked: false,
		key: "mongodb"
	}
]
