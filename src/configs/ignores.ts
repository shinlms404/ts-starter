import type { FlatESLintConfig } from 'eslint-define-config'
import { EXCLUDE } from '../files'

export function ignores(): FlatESLintConfig[] {
  return [
    {
      ignores: EXCLUDE
    }
  ]
}
