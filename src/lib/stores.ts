import { writable } from "svelte/store"

export const menu = {
	backdrop: writable(false),
	name: writable("")
}
