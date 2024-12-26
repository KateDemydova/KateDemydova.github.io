import { weekFn } from '../main'

describe('weekFn function tests', () => {
  test('correctly returns the day of the week for numbers 1 through 7', () => {
    expect(weekFn(1)).toBe('Понеділок')
    expect(weekFn(2)).toBe('Вівторок')
    expect(weekFn(3)).toBe('Середа')
    expect(weekFn(4)).toBe('Четвер')
    expect(weekFn(5)).toBe('П\'ятниця')
    expect(weekFn(6)).toBe('Субота')
    expect(weekFn(7)).toBe('Неділя')
  })

  test('returns null for inputs outside the range 1...7, strings, or fractional numbers', () => {
    expect(weekFn(9)).toBeNull()
    expect(weekFn(8)).toBeNull()
    expect(weekFn(11)).toBeNull()
    expect(weekFn(1.5)).toBeNull()
    expect(weekFn(3.01)).toBeNull()
    expect(weekFn('2')).toBeNull()
    expect(weekFn('str')).toBeNull()
  })

  test('uses switch, case, and default statements', () => {
    const functionAsString = weekFn.toString()
    expect(functionAsString).toMatch(/\bswitch\b/)
    expect(functionAsString).toMatch(/\bcase\b/)
    expect(functionAsString).toMatch(/\bdefault\b/)
  })
})
