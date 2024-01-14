import process from 'node:process'

export const isInEditor =
  (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI
