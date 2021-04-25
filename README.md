# Breeds images

## Installation

You can use NPM or Yarn to install project's dependencies since it includes both yarn.lock and package-lock.json.

```javascript
npm i
yarn install
```

## Run development server

```javascript
yarn run start
npm run start
```

## Run Storybook project locally

Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

```javascript
yarn run storybook
npm run storybook
```

## Testing

This project includes unit tests, a11y tests and e2e tests with Cypress.

### Run unit tests in dev mode

This command will run unit tests in watch mode, so the will be re executed after you modify any file.

```javascript
yarn run test:dev
npm run test:dev
```

This command can be used in CI pipelines to run unit tests and also to generate project's coverage.

```javascript
yarn run test:ci
npm run test:ci
```

### Run a11y test

This command will launch Webpack's dev server and pa11y will check the generated website.

```javascript
yarn run test:a11y
npm run test:a11y
```

### Run e2e tests

This command will launch Webpack's dev server and Cypress will execute e2e tests in Chrome browser (headless mode)

```javascript
yarn run test:e2e
npm run test:e2e
```
