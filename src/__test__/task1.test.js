import { userObj } from '../main'

describe('userObj properties tests', () => {
  // Перевірка наявності обов'язкових полів
  test('userObj has required properties', () => {
    expect(userObj).toHaveProperty('firstName')
    expect(userObj).toHaveProperty('lastName')
    expect(userObj).toHaveProperty('age')
  })

  // Перевірка типів даних для обов'язкових полів
  test('firstName, lastName are strings; age is a number', () => {
    expect(typeof userObj.firstName).toBe('string')
    expect(typeof userObj.lastName).toBe('string')
    expect(typeof userObj.age).toBe('number')
  })

  // Перевірка коректності значення віку
  test('age is a valid number', () => {
    expect(userObj.age).toBeGreaterThanOrEqual(0)
    expect(userObj.age).toBeLessThanOrEqual(122)
  })

})
