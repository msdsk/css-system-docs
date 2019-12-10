# css-system-docs

> Documentation for (S)CSS scaffolding for new projects

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For easier local development that allows usage of local `.scss` files instead of an npm module, create `local_override.js` file at the root of the project and specify in it local path as such:

```js
module.exports = {
  cssModule: '../relative/path/to/css-system'
}
```
