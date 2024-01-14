import type { FlatESLintConfig } from 'eslint-define-config'
import { pluginImport } from '../plugins'

export function imports(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        import: pluginImport
      },
      rules: {
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': 'error'
      }
    }
  ]
}
