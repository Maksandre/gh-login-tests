# Playwright tests example

## TL;DR

Run once to install dependencies and browsers:

```sh
npm run install:all
```

## VS Code configuration

1. Install the following extensions for VS Code:

- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- ms-playwright.playwright

2. Create `.vscode/settings.json` file:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true
}
```

## Codestyle and linting

Check and fix codestyle:

```sh
npm run codestyle
```

Fix eslint errors

```sh
npm run lint
```
