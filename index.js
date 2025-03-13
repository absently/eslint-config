import neostandard from 'neostandard'

export default [
  ...neostandard(),
  {
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/arrow-parens': [ 'error', 'always' ],
      '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
    },
  },
]
