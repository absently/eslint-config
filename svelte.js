module.exports = {
  extends: './index.js',
  plugins: [ 'svelte3' ],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: [ '*.svelte' ],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 2, maxEOF: 0 } ],
      },
    },
  ],
}
