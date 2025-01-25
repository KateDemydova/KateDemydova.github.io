import { describe, test, expect, vi } from 'vitest';
import { sum, divide, fetchData, getUser } from '../src/math.js';

describe('Функція sum', () => {
  test('Повертає суму двох чисел', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-2, 3)).toBe(1);
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Функція divide', () => {
  test('Повертає результат ділення двох чисел', () => {
    expect(divide(12, 4)).toBe(3);
    expect(divide(20, 5)).toBe(4);
  });

  test('Викидає помилку ділення на нуль', () => {
    expect(() => divide(20, 0)).toThrow(Error);
    expect(() => divide(20, 0)).toThrow('Помилка: ділення на нуль!');
  });
});

describe('Функція fetchData', () => {
  test('Повертає коректні дані', async () => {
    const data = await fetchData();
    expect(data).toEqual({
      id: 1,
      name: 'Test Data',
      status: 'success',
    });
  });
});


vi.spyOn({ getUser }, 'getUser').mockImplementation((id) => {
  if (id === 1) {
    return Promise.resolve({ id: 1, user: 'Test Data', status: 'success' });
  } else {
    return Promise.reject(new Error('User not found'));
  }
});
describe('Функція getUser', () => {
  test('Повертає дані користувача для id = 1', async () => {
    const user = await getUser(1);
    expect(user).toEqual({
      id: 1,
      user: 'Test Data',
      status: 'success',
    });
  });

  test('Викидає помилку для id != 1', async () => {
    try {
      await getUser(2);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('User not found');
    }
  });

  test('Викидає помилку для некоректного id', async () => {
    try {
      await getUser(null);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('User not found');
    }
  });
});