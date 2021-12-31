# @absently/eslint-config

Code style: Prettier for re-printing; ESLint for linting and additional formatting.

## Usage

```sh
pnpm add -D @absently/eslint-config eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise prettier
```

Add `"extends": "@absently"` to your `.eslintrc`.

Include the following `format` script in your `package.json`:

```json
"scripts": {
  "format": "prettier --write --plugin-search-dir=. . && eslint --fix ."
}
```

(Use `.eslintignore` and `.pretterignore` to ignore files that should not be processed.)

### Svelte components

Install these additional peer dependencies:

```sh
pnpm add -D eslint-plugin-svelte3 prettier-plugin-svelte
```

And instead set `"extends": "@absently/eslint-config/svelte"` in your `.eslintrc`.

Then add the following to your Prettier configuration file:

```json
{
  "plugins": ["prettier-plugin-svelte"],
  "htmlWhitespaceSensitivity": "ignore"
}
```

## Editor config

Spawn linters as daemons for ludicrous speed:

```sh
pnpm add --global eslint_d @fsouza/prettierd
```

### Neovim

#### formatter.nvim

```lua
-- ~/.config/nvim/lua/formatting.lua

local formatter = require('formatter')

local prettier = function()
  return {
    exe = 'prettierd',
    args = {vim.api.nvim_buf_get_name(0)},
    stdin = true,
  }
end

local eslint = function()
  return {
    exe = 'eslint_d',
    args = {'--stdin', '--fix-to-stdout', '--stdin-filename', vim.api.nvim_buf_get_name(0)},
    stdin = true,
  }
end

formatter.setup({
  filetype = {
    javascript = {
      prettier,
      eslint,
    },
  },
})
```

```vim
" ~/.config/nvim/init.vim

lua require('formatting')
nnoremap <silent> <leader>f :Format<CR>
```

#### ALE

```vim
let g:ale_javascript_eslint_executable='eslint_d'
let g:ale_javascript_eslint_use_global=1
```
