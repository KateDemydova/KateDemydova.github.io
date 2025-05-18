// Реалізація HTTP сервера відповідно до завдання, описаного у файлі ASSIGNMENT.md
import http from 'node:http';
import {generateAbout, generateContact, generateHTML, generateNotFound, postData} from "./api.mjs";

// Імпортуємо необхідні модулі

// Створюємо HTTP сервер
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
  return generateHTML(req, res);
  }

  if (req.method === 'GET' && req.url === '/about') {
  return generateAbout(req, res);
  }

  if (req.method === 'GET' && req.url === '/contact') {
  return generateContact(req,res);
  }

  if (req.method === 'POST' && req.url === '/submit') {
    return postData(req, res);
  }

  const knownRoutes = ['/', '/about', '/contact', '/submit'];

  if (
    knownRoutes.includes(req.url) &&
    !(
      (req.method === 'GET' && ['/', '/about', '/contact'].includes(req.url)) ||
      (req.method === 'POST' && req.url === '/submit')
    )
  ) {
    const message = 'Method Not Allowed';
    const buffer = Buffer.from(message, 'utf8');
    res.writeHead(405, {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Length': buffer.length,
      'X-Content-Type-Options': 'nosniff'
    });
    return res.end(buffer);
  }

  generateNotFound(req, res);
});

server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
})
// Обов'язково експортувати створений сервер для тестів
export { server };
