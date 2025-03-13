import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import recommended from './index.js'

export default [
  ...recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: [ '**/*.svelte', '**/*.svelte.js' ],
    languageOptions: {
      parserOptions: {
        svelteConfig: readFileSync(
          join(process.cwd(), 'svelte.config.js'),
          'utf8',
        ),
      },
    },
  },
]
