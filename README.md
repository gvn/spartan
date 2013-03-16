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
2. Run `npm install` at project root.
3. Profit!

## Tasks

- `grunt`
  - Watch process recompiles Sass and Jade when the files change.
  - Run web server at [http://localhost:8000](http://localhost:8000)
- `grunt deploy` **Incomplete**
  - Create a deployable package for production with minified code.


## Bash Function

For simpler project setup, we recommend adding this function to your bashrc.

Afterward you can create a new project like so: `spartan PROJECTNAME`

```bash
function spartan() {
    local projectName="${1:-website}"

    # Only pull the latest revision with no history
    git clone --depth=1 https://github.com/gvn/build-template.git $projectName

    cd $projectName

    # Remove old bindings since this is a new project
    rm -rf .git

    echo '#' $projectName > README.md
    git init
    npm install

    # Remove all .gitignores from subdirectories
    # Empty .gitignores are used to commit "empty" dirs
    find ./* -name .gitignore -type f -delete

    git add .
    git commit -am 'Initial commit'
}
```
