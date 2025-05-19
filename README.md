# Криптографічні утиліти на Node.js (SHA-256, PBKDF2)
Цей проект містить набір функцій для генерації та перевірки хешів за допомогою сучасних криптографічних алгоритмів:

* SHA-256 (одностороннє хешування)

* PBKDF2 (хешування паролів з сіллю)

* Перевірка введеного пароля по збереженому хешу

## Функції
🔐 generateHash(input: string): string

Генерує SHA-256 хеш для довільного рядка.

🔐 generatePasswordHash(password, salt, iterations?, keylen?, digest?): string

Хешує пароль з використанням PBKDF2.

🔐 verifyPassword(inputPassword, storedHash, salt, iterations?, keylen?, digest?): boolean

Перевіряє, чи відповідає введений пароль збереженому хешу.



