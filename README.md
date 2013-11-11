[![Dependency Status](https://gemnasium.com/gvn/build-template.png)](https://gemnasium.com/gvn/build-template)

# Spartan

Über-light, mildly opinionated, scaffold for single page apps.


## Features

- **Small footprint.** Spend time building instead of tearing out unused code. Spartan isn't a framework.
- **Little to no HTML.** Write clean and simple markup with Jade. Who likes XML-ish markup?
- **LESS enabled.** Because vanilla CSS is gross.
- **Source Maps.** -  Aww yeah.
- **Auto-compilation.** As your files change they are automatically recompiled.
- **HTTP friendly.** All JS and CSS is minified and concatenated for final distribution.
- **Designer Friendly.** Includes a starter style guide with common elements.

## Setup

1. Install any of the following dependencies that you're missing:
    * npm
    * grunt-cli
    `npm install -g grunt-cli`

2. Set up. (Yeoman generator coming soon. Just clone and destroy .git for now.)
3. Profit!

## Grunt Tasks

- `grunt`
  - Watch process recompiles LESS, Jade and JS as needed.
  - Web server runs at [http://localhost:1337](http://localhost:1337)
- `grunt build`
  - Compile LESS, Jade and JavaScript.
- `grunt clean`
  - Beautify JS and validate with JSHint.
