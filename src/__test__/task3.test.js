import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #3', () => {
  test('myBigInt is defined and equals 124n', () => {
    expect(global.myBigInt).toBe(124n)
  })
})
