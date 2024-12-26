import { evenFn } from '../main'

describe('evenFn function tests', () => {
  // Перевірка коректності результатів функції
  test('returns correct array of even numbers for n=10', () => {
    expect(evenFn(10)).toEqual([2, 4, 6, 8, 10])
  })

  test('returns correct array of even numbers for n=15', () => {
    expect(evenFn(15)).toEqual([2, 4, 6, 8, 10, 12, 14])
  })

  test('returns correct array of even numbers for n=20', () => {
    expect(evenFn(20)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
  })

  // Перевірка на використання оператора for у функції
  test('uses for loop in the function implementation', () => {
    const functionAsString = evenFn.toString()
    expect(functionAsString).toMatch(/\bfor\s*\(/)
  })
})
