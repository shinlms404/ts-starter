import { expect, test } from 'vitest'
import { defineESlintConfig } from '../src/define'

test('define', async () => {
  const configs = await defineESlintConfig()
  expect(configs).toMatchSnapshot()
})
