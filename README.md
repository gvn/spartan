# Spartan

Über-light scaffold for single page apps.

Mildly opinionated stack: **Grunt, Sass, Jade**

## Dependencies

- npm
- ruby
- grunt-cli
`npm install -g grunt-cli`
- sass gem
`gem install sass`

## Setup

1. Install any dependencies that you're missing.
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
