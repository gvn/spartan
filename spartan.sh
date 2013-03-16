#!/bin/bash

# SPARTAN : Project Generator

# Gather project metadata
echo -n "Project Name: "
read projectName
projectName=${projectName:-Untitled}

echo -n "Author: "
read author
author=${author:-Anonymous}

echo -n "Namespace: "
read namespace
namespace=${namespace:-APP}

lowercaseNamespace="$(echo $namespace | tr '[:upper:]' '[:lower:]')"
noSpaceProjectName="$(echo $projectName | tr -d ' ')"

# Only pull the latest revision with no history
git clone --depth=1 https://github.com/gvn/build-template.git $noSpaceProjectName

cd $noSpaceProjectName

# Remove old bindings since this is a new project
rm -rf .git

# Create a starter readme
echo '#' $projectName > README.md

# Remove all .gitignores from subdirectories
# Empty .gitignores are used to commit "empty" dirs
find ./* -name .gitignore -type f -delete

# Replace package.json tokens
sed -i .bak "s/%PROJECT_NAME%/$noSpaceProjectName/g" package.json
sed -i .bak "s/%NAMESPACE%/$namespace/g" package.json
sed -i .bak "s/%AUTHOR%/$author/g" package.json
rm package.json.bak

# Replace main.js tokens
sed -i .bak "s/%PROJECT_NAME%/$projectName/g" _fe/js/namespace.main.js
sed -i .bak "s/%AUTHOR%/$author/g" _fe/js/namespace.main.js
sed -i .bak "s/%NAMESPACE%/$namespace/g" _fe/js/namespace.main.js
rm _fe/js/namespace.main.js.bak

# Rename main.js
mv _fe/js/namespace.main.js _fe/js/$lowercaseNamespace.main.js

# Remove installation shell script stored in master repo
rm spartan.sh

# Install all node_modules
npm install

# Initialize a new git project
git init

# Commit the scaffold
git add .
git commit -am 'Initial commit'
