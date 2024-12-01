# candidate-search-spa

A candidate search application that calls the GitHub API and renders data in the browser.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)


## Description

A single page app of a candidate search/save using React + Vite + Tailwind CSS.

## Installation

1. Clone the repository:

```zsh

git clone git@github.com:gina-t/candidate-search-spa.git

```

2. Install dependencies:

```zsh

npm install

```

3. Generate a fine-grained personal access token for your GitHub account

4. Install additional dependancies:


```zsh

npm install @vitejs/plugin-react

```

```zsh

npm install eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

```zsh

npm install react-router-dom

```

5. Install and initialise Tailwind CSS:

```zsh

npm install -D tailwindcss postcss autoprefixer
 
npx tailwindcss init -p

```
6. Configure template paths in tailwind.config.js:
  
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }

7. Add the @tailwind directives to index.css:

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

8. Start the development server:

```zsh

npm run dev

```

## Usage

Screenshots of the app demonstrating functionality:

### Screenshot 1
![Screenshot 1](./assets/screenshots/screenshot1.png)

### Screenshot 2
![Screenshot 2](./assets/screenshots/screenshot2.png)

### Screenshot 3
![Screenshot 3](./assets/screenshots/screenshot3.png)

### Screenshot 4
![Screenshot 4](./assets/screenshots/screenshot4.png)

### Screenshot 5
![Screenshot 5](./assets/screenshots/screenshot5.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Create a new branch for the commit and start a pull request.

## Testing


## Authors and Acknowledgements

[email] (ginadrcoder@gmail.com)


## Questions

For enquiries, please contact me at:

[email] (ginadrcoder@gmail.com)
[github] (https://github.com/gina-t)

