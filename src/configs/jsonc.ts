import type { FlatESLintConfig } from 'eslint-define-config'
import { JSON, JSON5, JSONC } from '../files'
import { parserJsonc, pluginJsonc } from '../plugins'
import type { ConfigRules } from '../types'

export function jsonc(): FlatESLintConfig[] {
  return [
    {
      files: [JSON, JSON5, JSONC],
      languageOptions: {
        parser: parserJsonc
      },
      plugins: {
        jsonc: pluginJsonc
      },
      rules: {
        ...(pluginJsonc.configs['recommended-with-jsonc'].rules as ConfigRules)
      }
    }
  ]
}
