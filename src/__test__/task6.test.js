import { ageClassification } from '../main'

describe('ageClassification function tests', () => {
  test('returns correct age classification', () => {
    expect(ageClassification(-1)).toBeNull()
    expect(ageClassification(0)).toBe('Дитинство')
    expect(ageClassification(24)).toBe('Дитинство')
    expect(ageClassification(24.1)).toBe('Молодість')
    expect(ageClassification(25)).toBe('Молодість')
    expect(ageClassification(44)).toBe('Молодість')
    expect(ageClassification(44.1)).toBe('Зрілість')
    expect(ageClassification(45)).toBe('Зрілість')
    expect(ageClassification(65)).toBe('Зрілість')
    expect(ageClassification(65.1)).toBe('Старість')
    expect(ageClassification(66)).toBe('Старість')
    expect(ageClassification(75)).toBe('Старість')
    expect(ageClassification(75.1)).toBe('Довголіття')
    expect(ageClassification(76)).toBe('Довголіття')
    expect(ageClassification(90)).toBe('Довголіття')
    expect(ageClassification(90.1)).toBe('Рекорд')
    expect(ageClassification(91)).toBe('Рекорд')
    expect(ageClassification(122)).toBe('Рекорд')
    expect(ageClassification(122.1)).toBeNull()
    expect(ageClassification(123)).toBeNull()
  })

  test('does not use if or switch statements', () => {
    const functionAsString = ageClassification.toString()
    expect(functionAsString).not.toMatch(/\bif\b/)
    expect(functionAsString).not.toMatch(/\bswitch\b/)
  })
})
