# Spartan

Über-light scaffold for single page apps.

Targeted toward modern browsers: Chrome, Firefox, Safari, IE10.

Mildly opinionated transpilation: Sass + Jade -> CSS + HTML

Powered by [Grunt.js](http://gruntjs.com)

## Dependencies

- npm
- ruby
- grunt-cli
`npm install -g grunt-cli`
- sass gem
`gem install sass`

## Setup

1. Install any dependencies listed above that you are missing.
2. Run `npm install` in project root.
3. Profit.

## Bash Function

For even simpler project setup, add this function to your bashrc:

```bash
function webstarter() {
    local projectName="${1:-website}"

    # Only pull the latest revision with no history
    git clone --depth=1 https://github.com/gvn/build-template.git $projectName

    cd $projectName

    # Remove old bindings since this is a new project
    rm -rf .git

    echo '#' $projectName > README.md
    git init
    npm install
    mkdir _fe/img/
    mkdir _fe/sass/components/
}
```
