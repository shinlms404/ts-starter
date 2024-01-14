import type { FlatESLintConfig } from 'eslint-define-config'
import { configPrettier, pluginPrettier } from '../plugins'

export function prettier(): FlatESLintConfig[] {
  return [
    {
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        'prettier/prettier': 'warn'
      }
    }
  ]
}
