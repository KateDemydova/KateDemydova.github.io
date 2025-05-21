// Реалізація EXPRESS сервера відповідно до завдання, описаного у файлі ASSIGNMENT.md
import express from "express";
import app from './app.mjs'


const PORT = 3000;

// Імпортуємо необхідні модулі

app.listen(PORT);
// Створюємо EXPRESS сервер
function server() {
  const app = express();

  app.use(express.json());

  app.use('/', rootRoute);
  app.use('/users', usersRoute);
  app.use('/articles', articlesRoute);

  app.use((req, res) => {
    response.notFound(res, 'Route not found');
  });

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });

  return app;

}
// Експорт для тестів
export { server, app };
