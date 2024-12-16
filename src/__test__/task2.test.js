import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #2: Format myNum to decimal2', () => {
  test('decimal2 is correctly formatted', () => {
    expect(global.decimal2).toBe(global.myNum.toFixed(2))
  })
})

