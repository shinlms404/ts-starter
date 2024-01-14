export const JS = '**/*.?([cm])js'
export const JSX = '**/*.?([cm])jsx'

export const TS = '**/*.?([cm])ts'
export const TSX = '**/*.?([cm])tsx'

export const JSON = '**/*.json'
export const JSON5 = '**/*.json5'
export const JSONC = '**/*.jsonc'

export const VUE = '**/*.vue'

export const NODE_MODULES = '**/node_modules'
export const DIST = '**/dist'
export const LOCKFILE = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb'
]
export const EXCLUDE = [
  NODE_MODULES,
  DIST,
  ...LOCKFILE,

  '**/output',
  '**/coverage',
  '**/temp',
  '**/fixtures',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',

  'package.json'
]
