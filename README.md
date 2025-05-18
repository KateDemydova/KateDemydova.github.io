# 🚀 HTTP Сервер на чистому Node.js

## 📋 Опис

Цей проєкт реалізує базовий HTTP сервер без сторонніх бібліотек (лише `http`, `url`, `querystring`), що обробляє `GET` і `POST` запити, повертає HTML-сторінки та здійснює валідацію даних форми.

## Запуск сервера:
node server.mjs

За замовчуванням сервер слухає порт 3000.

Для зміни порту:

PORT=4000 node server.mjs


## Підтримувані маршрути

GET	/	Домашня сторінка
GET	/about	Сторінка про нас
GET	/contact	Контактна інформація
POST	/submit	Обробка форми name + email
*	/...	404 Not Found або 405

## Формат POST-запиту
Content-Type: application/x-www-form-urlencoded

## Обробка помилок
Тип помилки	Умова	Статус	Тіло
404 Not Found	Невідомий маршрут	404	HTML "Page Not Found"
400 Bad Request	Порожнє поле name або email	400	Invalid form data
405 Not Allowed	Непідтримуваний HTTP метод	405	Method Not Allowed
500 Server Error	Непередбачена помилка при обробці POST	500	HTML "Server Error"

## Тестування
Сервер був протестований за допомогою:

✅ Postman

✅ Автоматизовані тести (наприклад, vitest, supertest)

✅ Всі заголовки відповідають вимогам:

Content-Type: text/html; charset=utf-8

Content-Length

X-Content-Type-Options: nosniff