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
      },
    },
  ],
}
