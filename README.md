# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

### Project manager

To see TODOs, go to project board: https://github.com/users/kdaisho/projects/2/views/1

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

### Important

#### 1. Set ORIGIN

Include ORIGIN otherwise SvelteKit frontend can't communicate with its backend. I add it to a npm script.

```json
// For local development
"start": "ORIGIN=http://localhost:8890 PORT=8890 node build",

// For production
"prod": "ORIGIN=https://daishodesign.com PORT=8890 node build",
```

- `ORIGIN=http://localhost:8890` specifies the origin of the backend server.
- `PORT=8890` specifies the port of the backend server.

#### 2. Set ORIGIN

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
