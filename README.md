# @absently/eslint-config

Code style: Prettier for re-printing; ESLint for linting and additional formatting.

## Usage

```sh
pnpm add -D @absently/eslint-config eslint prettier
```

Add an `eslint.config.js` that exports this config:

```js
export { default } from '@absently/eslint-config'
```

Include the following `format` script in your `package.json`:

```json
"scripts": {
  "format": "prettier --write . && eslint --fix ."
}
```

(Use `.eslintignore` and `.pretterignore` to ignore files that should not be processed.)

### Svelte components

Install these additional peer dependencies:

```sh
pnpm add -D eslint-plugin-svelte prettier-plugin-svelte
```

And instead export the svelte config:

```js
export { default } from '@absently/eslint-config/svelte'
```

Then add the following to your Prettier configuration file:

```js
{
  plugins: ['prettier-plugin-svelte']
}
```

## Neovim config

Spawn linters as daemons for ludicrous speed:

```sh
:MasonInstall eslint_d prettierd
```

### formatter.nvim

```lua
-- ~/.config/nvim/lua/plugins/formatting.lua
return {
  {
    'mhartington/formatter.nvim',
    config = function()
      local defaults = require('formatter.defaults')
      local util = require('formatter.util')

      local prettier = util.copyf(defaults.prettierd)
      local eslint = util.copyf(defaults.eslint_d)

      require('formatter').setup({
        filetype = {
          javascript = {
            prettier,
            eslint,
          },
          svelte = {
            prettier,
            eslint,
          },
        },
      })

      vim.keymap.set('n', '<leader>F', ':Format<CR>')
    end
  }
}
```
