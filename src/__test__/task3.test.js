import { defUpperStr } from '../main'

describe('defUpperStr function tests', () => {
  // Перевірка коректності перетворення рядка у верхній регістр
  test('correctly transforms text to uppercase', () => {
    expect(defUpperStr('My text')).toBe('MY TEXT')
  })

  // Перевірка повернення тексту за замовчуванням, коли функція викликається без параметра
  test('returns default text in uppercase when called without arguments', () => {
    expect(defUpperStr()).toBe('DEFAULT TEXT')
  })

  // Перевірка на використання логічного оператора || і відсутність оператора if
  test('uses logical OR operator and does not use if statement', () => {
    const functionAsString = defUpperStr.toString()
    // Перевірка на присутність ||
    expect(functionAsString).toMatch(/\|\|/)
    // Перевірка на відсутність if
    expect(functionAsString).not.toMatch(/\bif\b/)
  })
})
