import type { FlatESLintConfig } from 'eslint-define-config'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsonc,
  prettier,
  sortKey,
  typescript,
  vue
} from './configs/index'
import type { AwaitAble } from './types'
import { flat } from './utils'

export async function defineESlintConfig(): Promise<FlatESLintConfig[]> {
  const configs: AwaitAble<FlatESLintConfig[]>[] = []

  configs.push(
    ignores(),
    imports(),
    comments(),
    jsonc(),
    prettier(),
    sortKey(),
    javascript(),
    typescript(),
    vue()
  )

  const flatConfigs = await flat(...configs)

  return flatConfigs
}
