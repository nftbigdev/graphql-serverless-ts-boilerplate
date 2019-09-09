# TypeScript-Graphql-Serverless Boilerplate

## Table of contents

- [TypeScript-Graphql-Serverless Boilerplate](#typescript-graphql-serverless-boilerplate)
  - [Table of contents](#table-of-contents)
  - [Structure](#structure)
  - [Main Features](#main-features)
  - [Pre-requisites](#pre-requisites)
  - [Getting started](#getting-started)
  - [Deploy the app](#deploy-the-app)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Debugging](#debugging)
  - [Running tests](#running-tests)
  - [Running ESLint](#running-eslint)
  - [VSCode Extensions](#vscode-extensions)
  - [Inspired By](#inspired-by)

## Structure

![Screen Shot 2019-09-10 at 11 06 46](https://user-images.githubusercontent.com/24783905/64600620-c640ee80-d3bb-11e9-9e4c-78fad3d553c7.png)

## Main Features

- Serverless
- Apollo-Graphql
- Typescript
- Prettier
- Eslint
- Jest
- Husky hooks [pre-commit, pre-push, commit message linting]
- Debugging
- Environment based Config with type validation

## Pre-requisites

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

## Getting started

- Clone the repository

```sh
git clone --depth=1 git@github.com:IslamWahid/graphql-serverless-ts-boilerplate.git <project_name>
```

- Install dependencies

```sh
cd <project_name>
yarn install
```

- Build and run the project

```sh
yarn build
yarn start
```

Finally, navigate to `http://localhost:3000/graphql` and you should see the graphQL playground

## Deploy the app

`serverless deploy`

## Project Structure

The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

The main folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `yarn build`

| Name                | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **.vscode**         | Contains VS Code specific settings                                                            |
| **dist**            | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**    | Contains all your npm dependencies                                                            |
| **src**             | Contains your source code that will be compiled to the dist dir                               |
| **src/config**      | main app config based on the environment                                                      |
| **src/graphQL**     | the grapgQL schemas and reslovers                                                             |
| **src/types**       | Holds .d.ts files not found on DefinitelyTyped. Covered more in this                          |
| **src**/index.ts    | Entry point to your app                                                                       |
| .env.example        | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| .travis.yml         | Used to configure Travis CI build                                                             |
| jest.config.js      | Used to configure Jest running tests written in TypeScript                                    |
| package.json        | File that contains npm dependencies                                                           |
| tsconfig.json       | Config settings for compiling server code written in TypeScript                               |
| tsconfig.tests.json | Config settings for compiling tests written in TypeScript                                     |
| .eslintrc           | Config settings for ESLint code style checking                                                |
| .eslintignore       | Config settings for paths to exclude from linting                                             |

## Available Scripts

| Npm Script     | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `start`        | Does the same as 'yarn serve'. Can be invoked with `yarn start`                       |
| `build`        | Full build. Runs ALL build tasks (`build-ts`, `lint`)                                 |
| `serve`        | Runs serverless offline                                                               |
| `watch-node`   | Runs  with nodemon so the process restarts if it crashes. Used in the main watch task |
| `watch`        | Runs all watch tasks (TypeScript, Node).                                              |
| `test`         | Runs tests using Jest test runner                                                     |
| `watch-test`   | Runs tests in watch mode                                                              |
| `build-ts`     | Compiles all source `.ts` files to `.js` files in the `dist` folder                   |
| `watch-ts`     | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed   |
| `lint`         | Runs ESLint on project files                                                          |
| `eslint-check` | Checks if there's any conflicts between eslint rules and prettier rules               |
| `debug`        | Performs a full build and then serves the app in watch mode                           |
| `serve-debug`  | Runs serverless with the --inspect flag                                               |
| `watch-debug`  | The same as `watch` but includes the --inspect flag so you can attach a debugger      |

## Debugging

Debugging is one of the places where VS Code really shines over other editors.
Node.js debugging in VS Code is easy to setup and even easier to use.

- on vscode use ```commmand + shift + p``` to execute this command ```Debug: Toggle Auto Attach```
- then open the vscode terminal and run ```yarn watch-debug```

## Running tests

Simply run `yarn test`.
Note this will also generate a coverage report.

## Running ESLint

Like the rest of our build steps, we use npm scripts to invoke ESLint.
To run ESLint you can call the main build script or just the ESLint task.

```sh
yarn build   // runs full build including ESLint
yarn lint    // runs only ESLint
```

Notice that ESLint is not a part of the main watch task.

If you are interested in seeing ESLint feedback as soon as possible, I strongly recommend the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## VSCode Extensions

To enhance your development experience while working in VSCode we also provide you a list of the suggested extensions for working with this project:

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

## Inspired By

<https://github.com/microsoft/TypeScript-Node-Starter>
