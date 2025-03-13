export default {
  plugins: [ 'prettier-plugin-svelte' ],
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        svelteStrictMode: true,
      },
    },
  ],
}
