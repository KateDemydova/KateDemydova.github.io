import { code } from './prepareTestEnvironment.js'

eval(code)

describe('Task #1', () => {
  test('myNum is defined and equals 10', () => {
    expect(global.myNum).toBe(10)
  })

  test('myStr is defined and equals "some string"', () => {
    expect(global.myStr).toBe('some string')
  })

  test('myBool is defined and true', () => {
    expect(global.myBool).toBe(true)
  })

  test('myArr is defined and matches expected array', () => {
    expect(global.myArr).toEqual([1, 2, 3, 4, 5])
  })

  test('myObj is defined and matches expected object structure', () => {
    expect(global.myObj).toEqual({
      first: 'First Name',
      last: 'Last Name'
    })
  })
})
