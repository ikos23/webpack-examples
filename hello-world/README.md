# webpack-hello-world

## Step #4

The time has come to fix other stuff:

- css/styles should work
- image and favicon.ico should be loaded

In order to achieve our goals, we need:

- Loaders (`module.rules`) to handle css and images.
- `HtmlWebpackPlugin` to create index.html will all the stuff included.
- `CleanWebpackPlugin` to clean up `dist` before every new build.
- The favicon.ico is a special file that we'd like to copy to `dist` dir,
  this is why we need `CopyPlugin`.

## Step #3

It's time to start configuring `webpack` 😃. We begin with
the very basic properties we need to add to `webpack.config.js`:

- An entry point indicates which module webpack should use
  to begin building out its internal dependency graph.
- The output property tells webpack where to emit
  the bundles it creates and how to name these files.

The css and images and other stuff is not working yet, but if we run `npx webpack` we will
get `index.html` with all the JavaScript working ^\_^

Let's also add a few scripts to `package.json`,
to build our app easily with: `npm run dev` or `npm run build`.

## Step #2

Let's add `webpack` to our small project.

- First, we need to change a structure a bit.
  Let's create `src` directory and move everything
  into it (`index.html` can stay where it is).
- Second, we run [`npm init`](https://docs.npmjs.com/cli/init) to init new project.
- After, we can add [`webpack.config.js`](https://webpack.js.org/concepts/configuration/) config file.
- And now, it is time to install webpack: `npm i -D webpack webpack-cli`.

```
📂hello-world
  📂src
  index.html
  package.json
  webpack.config.js
```

## Step #1

This is a very simple webapp. There is no [webpack](https://webpack.js.org/)
(or any other stuff) yet. 😄

There are just cdsome files we will need to demo different webpack's features.

```
📂hello-world
  📂assets
  index.html
  App.js
  utils.js
  index.js
```
