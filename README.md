# Skillproject website

## Prerequisites
- npm
  - In .bashrc or such: ``export npm_config_prefix="$HOME/.local"``
  - Npm wil install binaries into prefix/bin so include that dir on your PATH

```
npm install -g bower grunt-cli # Globally install grunt & bower cli tools
npm install && bower install # Install projects deps
```
## Test
``grunt server``

## Build
``grunt build``

## Deploy
Runs build AND deploys files to gh-pages branch
``grunt deploy``
