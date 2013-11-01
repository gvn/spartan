[![Dependency Status](https://gemnasium.com/gvn/build-template.png)](https://gemnasium.com/gvn/build-template)

# Spartan

Über-light, slightly opinionated, scaffold for single page apps.


## Features

- **Fast setup.** Create a new project quickly and easily with the Spartan CLI.
- **Small footprint.** Spend time building instead of tearing out unused code.
- **Little to no HTML.** Write clean and simple markup with Jade.
- **LESS enabled.** Because vanilla CSS is gross.
- **Auto-compilation.** As your files change they are automatically recompiled.
- **HTTP friendly.** All JS and CSS is minified and concatenated for final distribution.
- **Designer Friendly.** Includes a starter style guide with common elements.

## Setup

1. Install any of the following dependencies that you're missing:
    * npm
    * grunt-cli
    `npm install -g grunt-cli`

2. Install Spartan
3. Profit!

## Commands

## Grunt Tasks

- `grunt`
  - Watch process recompiles Sass and Jade when the files change.
  - Web server runs at [http://localhost:8000](http://localhost:8000)
- `grunt build`
  - Compile Sass, Jade and JavaScript.
