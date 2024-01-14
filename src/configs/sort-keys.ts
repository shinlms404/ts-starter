import type { FlatESLintConfig } from 'eslint-define-config'
import { pluginSortKeys } from '../plugins'

export function sortKey(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        'sort-keys': pluginSortKeys
      }
    }
  ]
}
