import type { Rules } from 'eslint-define-config'

export type AwaitAble<T> = T | Promise<T>

export type ConfigRules = Partial<Rules>
