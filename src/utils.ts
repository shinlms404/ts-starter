import type { FlatESLintConfig } from 'eslint-define-config'
import { getPackageInfoSync, isPackageExists } from 'local-pkg'
import type { AwaitAble } from './types'

export async function flat(
  ...configs: AwaitAble<FlatESLintConfig[]>[]
): Promise<FlatESLintConfig[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}

export function getVueVersion(): number | undefined {
  if (isPackageExists('vue')) {
    const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] })
    const version = pkg?.version?.split('.') ?? []
    if (version) {
      return Number(version[0])
    }
  }
}
