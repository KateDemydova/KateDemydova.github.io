import { cbAdd, cbPow, cbRandom, mainFunc } from '../main'

describe('mainFunc function tests', () => {
  test('mainFunc correctly processes callbacks', () => {
    const testRandom = mainFunc(2, 5, cbRandom)
    expect(testRandom).toBeGreaterThanOrEqual(2)
    expect(testRandom).toBeLessThanOrEqual(5)

    expect(mainFunc(2, 5, cbPow)).toBe(32)
    expect(mainFunc(2, 5, cbAdd)).toBe(7)
    expect(mainFunc(2, 5, 'not a func')).toBe(false)
  })

  test('cbRandom uses Math.random and Math.floor', () => {
    const cbRandomAsString = cbRandom.toString()
    expect(cbRandomAsString).toMatch(/Math\.random/)
    expect(cbRandomAsString).toMatch(/Math\.floor/)
  })

  test('cbPow uses Math.pow', () => {
    const cbPowAsString = cbPow.toString()
    expect(cbPowAsString).toMatch(/Math\.pow/)
  })
})
