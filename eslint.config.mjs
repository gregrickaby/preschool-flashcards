import coreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/', 'node_modules/', 'public/']
  },
  ...coreWebVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'no-console': ['error', {allow: ['warn', 'error', 'info']}]
    }
  }
]

export default config
