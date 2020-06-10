# webpack-hello-world

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
