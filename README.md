# Portfolio V5

My portfolio website, built using SvelteKit, offers exceptional performance. Visit at [https://daishodesign.com](https://daishodesign.com).

## Project Overview

To review the project overview, please visit the project board at: [https://github.com/users/kdaisho/projects/2/views/1](https://github.com/users/kdaisho/projects/2/views/1)

## Development

To get started with development, follow these steps:

1. Clone the project repository.
2. Install dependencies using `npm install` (or `pnpm install` or `yarn`).
3. Start a development server:

```bash
npm run dev
```

## Build

To create a production version of your app, run the following command:

```bash
npm run build
```

You can preview the production build using `npm run preview`.

## Deployment

### Setting the ORIGIN

Ensure that you include the ORIGIN environment variable; otherwise, the SvelteKit frontend won't be able to communicate with its backend. You can add it to an npm script as shown below:

```json
"prod": "ORIGIN=https://daishodesign.com PORT=8890 node build",
```

In the above script, PORT=8890 specifies the port of the backend server.

> Note: To deploy your app, you may need to install an adapter suitable for your target environment.

### Manual Application Server Startup

If you bypass GitHub actions and start the application server manually, follow these steps:

- Log in to the server.
- Navigate to the location of the project files (e.g., ./actions-runner-portfolio-v5/...).
- Start PM2:

```bash
pm2 start npm --name portfolio_v5 -- run prod --watch
```
