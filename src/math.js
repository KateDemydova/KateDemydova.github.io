export function sum(a, b) {
  return a + b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Помилка: ділення на нуль!');
  }
  return a / b;
}

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Test Data', status: 'success' });
    }, 1000);
  });
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1) {
        resolve ({ id: 1, user: 'Test Data', status: 'success' });
      } else {
        reject(new Error('User not found'));
      }
    }, 1000);
  });
}