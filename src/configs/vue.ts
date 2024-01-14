import type { FlatESLintConfig } from 'eslint-define-config'
import { mergeProcessors } from 'eslint-merge-processors'
import processorVueBlocks from 'eslint-processor-vue-blocks'

import { VUE } from '../files'
import { parserVue, pluginVue } from '../plugins'
import { getVueVersion } from '../utils'

export function vue(): FlatESLintConfig[] {
  const vueVersion = getVueVersion()
  const isVue3 = vueVersion === 3
  const vueRules = isVue3
    ? {
        ...pluginVue.configs.essential.rules,
        ...pluginVue.configs['strongly-recommended'].rules,
        ...pluginVue.configs.recommended.rules
      }
    : {
        ...pluginVue.configs['vue3-essential'].rules,
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        ...pluginVue.configs['vue3-recommended'].rules
      }

  return [
    {
      files: [VUE],
      languageOptions: {
        parser: parserVue
      },
      processor: mergeProcessors([
        pluginVue.processors['.vue'],
        processorVueBlocks({
          blocks: {
            styles: true,
            customBlocks: true,
            script: false,
            template: false
          }
        })
      ]),
      plugins: {
        vue: pluginVue
      },
      rules: {
        ...pluginVue.configs.base.rules,
        ...vueRules,

        'node/prefer-global/process': 'off',

        'vue/block-order': [
          'error',
          {
            order: ['script', 'template', 'style']
          }
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': [
          'error',
          {
            order: [
              'defineOptions',
              'defineProps',
              'defineEmits',
              'defineSlots'
            ]
          }
        ],
        'vue/dot-location': ['error', 'property'],
        'vue/dot-notation': ['error', { allowKeywords: true }],
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-indent': ['error', 'indent'],
        'vue/html-quotes': ['error', 'double'],
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-dupe-keys': 'off',
        'vue/no-empty-pattern': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement'
        ],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-sparse-arrays': 'error',
        'vue/no-unused-refs': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-html': 'off',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false
          }
        ],
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-template': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': ['error', { nonwords: false, words: true }]
      }
    }
  ]
}
