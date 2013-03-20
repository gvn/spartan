# Spartan

Über-light scaffold for single page apps.


## Features

- **Fast setup.** Create a new project quickly and easily with the Spartan CLI.
- **Small footprint.** Spend time building instead of tearing out unused code.
- **Little to no HTML.** Write clean and simple markup with Jade.
- **Sass enabled.** Because vanilla CSS is gross.
- **Auto-included JS.** New JavaScript files are automatically included. Don't waste time revising your index!
- **Auto-compilation.** As your files change they are automatically recompiled.
- **HTTP friendly.** All JS and CSS is minified and concatenated for final distribution.

## Setup

1. Install any of the following dependencies that you're missing:
    * npm
    * ruby
    * grunt-cli
    `npm install -g grunt-cli`
    * sass gem
    `gem install sass`

2. Install Spartan
  `curl https://raw.github.com/gvn/build-template/master/spartan.sh > ~/bin/spartan; chmod +x ~/bin/spartan`
3. Profit!

## Commands

- `spartan`
  - Create a new Spartan project.

## Grunt Tasks

- `grunt`
  - Watch process recompiles Sass and Jade when the files change.
  - Web server runs at [http://localhost:8000](http://localhost:8000)
- `grunt build`
  - Compile Sass, Jade and JavaScript.
