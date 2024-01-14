import type { FlatESLintConfig } from 'eslint-define-config'
import { TS, TSX } from '../files'
import { parserTs, pluginTs } from '../plugins'

export function typescript(): FlatESLintConfig[] {
  return [
    {
      files: [TS, TSX],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module'
        }
      },
      plugins: {
        '@typescript-eslint': pluginTs
      },
      rules: {
        ...pluginTs.configs.recommended.rules,
        ...pluginTs.configs['eslint-recommended'].rules,
        ...pluginTs.configs.strict.rules,

        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { disallowTypeAnnotations: false, prefer: 'type-imports' }
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { classes: false, functions: false, variables: true }
        ]
      }
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off'
      }
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': 'off'
      }
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
