// Реалізація EXPRESS сервера відповідно до завдання, описаного у файлі ASSIGNMENT.md
import app from './app.mjs'


const PORT = 3000;

// Імпортуємо необхідні модулі

app.listen(PORT);
// Створюємо EXPRESS сервер

// Експорт для тестів
export {  app };
