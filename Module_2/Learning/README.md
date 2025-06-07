# React 

## [Working of the Browser:](https://www.youtube.com/watch?v=5rLFYtXHo9s)

1. **HTML Parsing & DOM Construction:**  
    - Browser reads HTML from top to bottom.
    - Builds the **DOM tree** (Document Object Model) — a tree structure of all elements/content.

2. **CSS Parsing & CSSOM Construction:**  
    - Parses CSS files and `<style>` tags.
    - Builds the **CSSOM** (CSS Object Model) — maps styles to elements.

3. **Render Tree Construction:**  
    - Combines **DOM + CSSOM** to create the **Render Tree**.
    - Only includes nodes that will be visible (no `display: none`).

4. **Layout (Reflow):**  
    - Calculates position and size for every visible element.
    - Happens when content or styles change.

5. **Painting:**  
    - Converts Render Tree nodes into actual pixels.
    - Fills in colors, text, images, borders, etc.

6. **Compositing:**  
    - Layers are combined and rendered on screen.
    - Browser optimizes to avoid unnecessary redraws.


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

- NPX is Node package eXecutor. It executes without intalling the package.  

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

# ES6 Javascript (2015)

## 1. Variable Declaration - 

### Var 
```javascript
    var name = 'James'
    var name = 'Joe'
```
### let
```javascript
    let name = 'James'
    name = 'joe'            // Can be done
    let name = 'Joe'        // Cannot be done. 
```
### Const 
```javascript
    const name = 'James'
    name = 'Q'              // Cannot be done
    const name = 'Joe'      // Cannot be done
```

## 2. Arrow Function -

```javascript

    const bmi = (name, weight, height) => {
        return weight / (height * height);
    }
```

## 3. Arrays and Objects  

### Arrays: 

```javascript
    const my_array = ['James', 'Q', 'Joe', 'Sam'];

    let [first, second] = my_array; // Array Destructuring

    console.log(`This is 1st Person: ${first} \nAnd this is the 2nd :${second}`);
```
### Objects: 
```javascript

    const my_object = { Red: 'Jack', Blue: 'Sky', Green: 'Bridge' };
    const { Red, Blue, Green } = my_object;   // Key and the Var name should be same.

```

### Spread and Rest/Others 
```javascript
    const my_object = { red: 'Jack', blue: 'Sky', green: 'Bridge' };
    const my_new_object = { ...my_object, pink: 'syd' }; // Copies other element from old element.

    const { red, ...mia } = my_new_object; // Can be used to get the other elements.
    console.log(mia);
```

### Mapping 
```javascript
    const meri_array = [1, 2, 3, 4, 5];

    const doubles = meri_array.map(meri_array => meri_array * 2)

    const trip = meri_array.map((num) => {return num*3})

```

In react you can use it as - 
```javascript
const data = [
    {
        title: "John Wick",
        year: 2014,
        genre: "Action",
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
    },
];

const card = data.map((item) => {

    return (
        <div className="card">
            <h2>{item.title}</h2>
            <p>Year: {item.year}</p>
            <p>Genre: {item.genre}</p>
        </div>
    );
}

);

export default card;
```

## 4. Modules in Js 
blah-blah-blah

# React Project Structure: 

## Using CRA (Create React App)

```java
    my-cra-app/
    ├── node_modules/            
    ├── public/                  
    │   ├── index.html            # Contains <div id="root"></div>
    │   ├── favicon.ico          
    │   ├── manifest.json        
    │   └── logo192.png          
    ├── src/                     # All the Source code. this is where all the coding happens
    │   ├── assets/              
    │   │   └── logo.png         
    │   ├── components/          
    │   │   └── Header.jsx       
    │   ├── pages/               
    │   │   └── Home.jsx         
    │   ├── hooks/               
    │   │   └── useFetch.js      
    │   ├── services/            
    │   │   └── api.js           
    │   ├── config/              
    │   │   └── constants.js     
    │   ├── App.jsx              
    │   ├── App.css              
    │   ├── index.js             # Entry point for CRA projects
    │   └── index.css            
    ├── .gitignore               # Duhh
    ├── package.json             # It holds all the dependencies 
    ├── package-lock.json        
    └── README.md               # Docs 
```
## Using Vite 
```c
    my-vite-app/
    ├── node_modules/            
    ├── public/                  
    │   └── logo.svg              # Public assets, served directly at '/logo.svg'
    ├── src/                     
    │   ├── assets/              
    │   │   └── logo.png         
    │   ├── components/          
    │   │   └── Header.jsx       
    │   ├── pages/               
    │   │   └── Home.jsx         
    │   ├── hooks/               
    │   │   └── useFetch.js      
    │   ├── services/            
    │   │   └── api.js           
    │   ├── config/              
    │   │   └── constants.js     
    │   ├── App.jsx              
    │   ├── App.css              
    │   ├── main.jsx             # Main entry point for Vite projects
    │   └── index.css            
    ├── .gitignore               
    ├── index.html               # In Vite, at project root (NOT in public)
    ├── package.json             
    ├── vite.config.js           
    ├── package-lock.json        
    └── README.md                
```

# Base Code - 

## Using CRA (Without jsx):

```javascript

    import React from 'react';                  // Imports it as it is a Nodejs Library.
    import ReactDOM from 'react-dom/client';    // Import React Dom 

    const heading = React.createElement(        // This is a React Element. Which is just a Javascript Object.
        'h1',
        { className: 'main-heading' },
        'Hello React Element!'
    );

    const root = ReactDOM.createRoot(document.getElementById('root')); // Creates a root for React to render into

    root.render(heading);                        // Use the Root method render to render the component or element.                    

    or 

    import { StrictMode } from 'react'              
    import { createRoot } from 'react-dom/client'   

    createRoot(document.getElementById('root')).render(
        <h1>Loading...</h1>
    );

```

## React Element : 
It is just a Javascript Object that represents a DOM node.
```javascript

    const element_Name = React.createElement(type,props,children);      // Without JSX

    or

    const element_name = <h1>Hello_World</h1>;                          //Using JSX


    Both creates a Object like this: 
    
    const element_Name = {

        type: 'h1',
        props:{className: 'class'},
        'Hello this a Message'
    }

```