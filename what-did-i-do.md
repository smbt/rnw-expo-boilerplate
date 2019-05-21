# what did i do
- https://www.youtube.com/watch?v=iuu0StAPdKA

## 1 project-setup

project tree
```
-- pokedex/                
    |-- .expo/                 
    |    |-- packager-info.json         <-- url and port information
    |    `-- settings.json              <-- few lines of settings
    |
    |-- assets/
    |    |-- icon.png
    |    `-- splash.png
    |
    |-- node_modules/
    |
    |-- public/
    |    `-- index.html         <-- WEB: holds a div#root 
    |
    |-- src/
    |    |-- App.js             <-- COMMON: our root-react-component, bundling our shared-codebase
    |    |-- index.css          <-- WEB: styling only for web 
    |    `-- index.js           <-- WEB: entry-point. imports from App.js, renders into div#root of index.html 
    |
    |-- .watchmanconfig
    |-- App.js                  <-- NATIVE: entry-point. imports from src/App.js, renders as react-component (it seems like this could be ommitted if the native-entry point was to be changed to src/)
    |-- app.json
    |-- babel.config.js
    |-- package.json
    `-- yarn.lock
```


### 1.1 initialization
- run `expo init` in root-directory
- create directory `pokedex/src/` and copy `App.js` into there
    - this is where react-scripts will look for our react-code
- setup `pokedex/App.js` so that it imports from `src/App.js` and simply renders the JSX from there

### 1.2 run as a native-app
- run `expo start` in `pokedex/`
    - dev-server spins up and the app can be launched on a mobile device over the app
    
### 1.3 run as a web-app
- run `yarn add`
    - `react-scripts` 
    - `react-dom`
    - `react-native-web` 
    - `react-art`
    - `react-router-native` 
    - `react-router-dom`
        - the native-app will likely break after this
        - restarting the packager with `expo start` should make it running again
- create directory `pokedex/public/`
    - create file `index.html` with a `<div id=root></div>`
- inside `pokedex/src/` create file `index.js` 
    - this is what react-scripts will look for 
- add scripts to `package.json`:
    ```  
    "start-web": "react-scripts start",
    "build-web": "react-scripts build" 
    ```
- run `yarn start-web`


- that´s it for the setup!
- tutorial continues at https://youtu.be/iuu0StAPdKA?t=649

## 2 further steps
### 2.1 plattform specific styling
- styling that only applies to **web** can be achieved by importing `src/index.css` into `src/index.js`;
