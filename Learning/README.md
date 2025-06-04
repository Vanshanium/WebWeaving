# JavaScript

## Node.js ~ Python

- Node.js is a JavaScript runtime built on Chrome's V8 engine.
- Enables running JavaScript on the server side.
- Used for building scalable network applications.
- Commonly used with frameworks like Express.js.

## NPM (Node Package Manager) ~ PIP

- Default package manager for Node.js.
- Used to install, share, and manage dependencies (libraries, tools).
- Common commands:
    - `npm init` – initialize a new project.
    - `npm install <package>` – install a package.
    - `npm run <script>` – run scripts defined in `package.json`.

## NVM (Node Version Manager) ~ UV

- Tool for managing multiple Node.js versions on a single machine.
- Useful for switching between Node.js versions for different projects.
- Common commands:
    - `nvm install <version>` – install a specific Node.js version.
    - `nvm use <version>` – switch to a specific Node.js version.
    - `nvm ls` – list installed Node.js versions.

# Vite

In Webdevelepment a user uses HTTP Request to get Html,Css or javascript.But it is insecure, to make it secure, Modern websites uses bundlers like vite to bundle the webapp and send a normal js or jsx with a html, which renders the webapp.

Vite is a modern build tool and development server for front-end projects. It offers fast startup and hot module replacement during development, and bundles code efficiently for production.

- **Fast Development:** Uses native ES modules for instant hot module replacement (HMR).
- **Optimized Build:** Uses Rollup for efficient production builds.
- **Zero Config:** Works out of the box, but is highly configurable.
- **Framework Agnostic:** Supports React, Vue, Svelte, and more via plugins.

1. **Install Vite:**
    ```bash
    # npm create : makes a packages.json file which is a file with all the dependencies which are need for the package. #
    
    npm create vite@latest 

    npm install # Install the packages.

    ```
2. **Start the dev server:**
    ```
    npm run dev
    ```

