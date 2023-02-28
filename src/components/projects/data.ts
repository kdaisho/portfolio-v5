import type { Project } from "$lib/types"
import archiveHero from "../../assets/projects/archive-hero.jpg"
import archiveThumb from "$assets/projects/archive-thumb.jpg"
import countdownHero from "$assets/projects/countdown-hero.jpg"
import countdownThumb from "$assets/projects/countdown-thumb.jpg"
import drumkitHero from "$assets/projects/drumkit-hero.jpg"
import drumkitThumb from "$assets/projects/drumkit-thumb.jpg"
import ebHero from "$assets/projects/eb-hero.jpg"
import ebThumb from "$assets/projects/eb-thumb.jpg"
import jsbestHero from "$assets/projects/jsbest-hero.jpg"
import jsbestThumb from "$assets/projects/jsbest-thumb.jpg"
import mybraillerHero from "$assets/projects/mybrailler-hero.jpg"
import mybraillerThumb from "$assets/projects/mybrailler-thumb.jpg"
import nonbreakingHero from "$assets/projects/nonbreaking-hero.jpg"
import nonbreakingThumb from "$assets/projects/nonbreaking-thumb.jpg"
import portfolioHero from "$assets/projects/portfolio-hero.jpg"
import portfolioThumb from "$assets/projects/portfolio-thumb.jpg"
import qc3Hero from "$assets/projects/qc3-hero.jpg"
import qc3Thumb from "$assets/projects/qc3-thumb.jpg"
import suicideHero from "$assets/projects/suicide-hero.jpg"
import suicideThumb from "$assets/projects/suicide-thumb.jpg"

export const projects: Project[] = [
	{
		id: 0,
		title: "JavaScriptBest",
		subtitle: "Online Course Review App",
		description:
			"JavaScriptBest can keep your overviews of favourite online couses in one place. Built with only JavaScript from UI to backend while providing great performance thanks to nginx.",
		stack: ["nodejs", "handlebars", "sass", "mongodb"],
		hero: jsbestHero,
		thumb: jsbestThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/javascriptbest"
	},
	{
		id: 1,
		title: "Portofolio",
		subtitle: "My portofolio",
		description:
			"A showcase of what I do and I'm good at. Built with React for UI and Nodejs for mail service. No scaffolding from create-react-app.",
		stack: ["react", "nodejs", "live", "less"],
		hero: portfolioHero,
		thumb: portfolioThumb,
		url: "https://daishodesign.com",
		githubUrl: "https://github.com/kdaisho/portfolio-v4"
	},
	{
		id: 2,
		title: "Quebec3",
		subtitle: "Blog",
		description:
			"Quebec3 is a blog built with Gatsby: a static site generator. Super light, super fast.",
		stack: ["gatsby", "react", "graphql", "live"],
		hero: qc3Hero,
		thumb: qc3Thumb,
		url: "https://quebec3.com",
		githubUrl: "https://github.com/kdaisho/quebec3-v2"
	},
	{
		id: 3,
		title: "My Brailler",
		subtitle: "Electronic braille typewriter",
		description:
			"My Brailler is a training application for the visually impaired who uses Perkins brailler. Traditional Perkins brailler can't tell the user when they make a typo. My Brailler does as it speaks!",
		stack: ["angular"],
		hero: mybraillerHero,
		thumb: mybraillerThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/brailler"
	},
	{
		id: 4,
		title: "Email Builder",
		subtitle: "HTML email builder for someone busy",
		description:
			"Once I worked for a company that required me to do many HTML emails and website updates. Building emails was easy, but it was redundant and time-consuming; I had little time for other stuff. So I built this. The average time for making a single email was reduced from 50 min to 7 min.",
		stack: ["angular", "regex"],
		hero: ebHero,
		thumb: ebThumb,
		url: "",
		githubUrl: ""
	},
	{
		id: 5,
		title: "Suicide in Japan",
		subtitle: "Data visualization for a Halloween project",
		description:
			"Suicide in Japan is an infographic inspired by Japan's high suicide rate. Built with plain HTML and CSS Grid.",
		stack: ["cssGrid", "live"],
		hero: suicideHero,
		thumb: suicideThumb,
		url: "https://kdaisho.github.io/Infographic/",
		githubUrl: "https://github.com/kdaisho/Infographic"
	},
	{
		id: 6,
		title: "French Formatter",
		subtitle: "Saves you from French grammar police",
		description:
			"French Formatter inserts a non-breaking space (&ngsp;) where French grammar requires. (i.e., 30&ngsp;%) Humans are not good at this type of repetition. Let computers do.",
		stack: ["vanillajs", "less", "regex"],
		hero: nonbreakingHero,
		thumb: nonbreakingThumb,
		url: "https://kdaisho.github.io/French-Formatter/",
		githubUrl: "https://github.com/kdaisho/Infographic"
	},
	{
		id: 7,
		title: "Global Countdown Timer",
		subtitle: "Everybody ends at the same time anywhere on earth",
		description:
			"Global Countdown Timer lets you quickly implement a countdown widget for your applications. It is battle-tested by one of the major Canadian apparel retailers. It's best for advertising limited-time offers; it displays the same hours regardless of different time zones. It doesn't require API support; stand-alone.",
		stack: ["vanillajs"],
		hero: countdownHero,
		thumb: countdownThumb,
		url: "https://kdaisho.github.io/Countdown/",
		githubUrl: "https://github.com/kdaisho/Countdown"
	},
	{
		id: 8,
		title: "Japanese Drum Kit",
		subtitle: "For fun",
		description: "A simple fun project. Built with vanilla JavaScript.",
		stack: ["vanillajs", "live"],
		hero: drumkitHero,
		thumb: drumkitThumb,
		url: "https://kdaisho.github.io/japan-sound-board/",
		githubUrl: "https://github.com/kdaisho/japan-sound-board"
	},
	{
		id: 9,
		title: "Archive Everything",
		subtitle: "Archiving tool using file system",
		description:
			"Archive Everything is a documentation tool built with Nodejs and React. It provides a command-line interface to help initial setup. Data is persistent using a local file system, so it's best for a workplace where you handle sensitive information or just for self-documentation.",
		stack: ["nodejs", "react"],
		hero: archiveHero,
		thumb: archiveThumb,
		url: "",
		githubUrl: "https://github.com/kdaisho/archiving-app"
	}
]

export const filterItems: { name: string; key: string }[] = [
	{
		name: "Live",
		key: "live"
	},
	{
		name: "VanillaJs",
		key: "vanillajs"
	},
	{
		name: "Nodejs",
		key: "nodejs"
	},
	{
		name: "React",
		key: "react"
	},
	{
		name: "Angular",
		key: "angular"
	},
	{
		name: "Sass",
		key: "sass"
	},
	{
		name: "Less",
		key: "less"
	},
	{
		name: "Css Grid",
		key: "cssGrid"
	},
	{
		name: "PHP",
		key: "php"
	},
	{
		name: "mongoDB",
		key: "mongodb"
	}
]
