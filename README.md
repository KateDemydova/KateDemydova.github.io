# React Component Controlled and Uncontrolled

## Опис проєкту

Цей проєкт демонструє роботу з контрольованими (Controlled Components) і неконтрольованими (Uncontrolled Components) 
формами у React, а також виконання запиту до сервера для отримання списку постів.

## Структура проєкту
📂 src
├── 📂 components
│   ├── 📄 ControlledForm.tsx
│   ├── 📄 UncontrolledForm.tsx
│   ├── 📄 PostsList.tsx
├── 📄 App.tsx
├── 📄 index.tsx
├── 📄 styles.css


## Встановлення та запуск

1. Клонування репозиторію

git clone https://github.com/KateDemydova/KateDemydova.github.io.git
cd your-repo-name

2. Встановлення модулів

npm install

3. Запуск проєкту

npm run dev

Або, якщо використовуєте yarn:

yarn run dev



## Опис компонентів

### ControlledForm.tsx

Контрольована форма, де введені дані зберігаються у стані (useState).

Виводить поточне значення введеного тексту.

Відправляє текст через alert при сабміті форми.

### UncontrolledForm.tsx

Неконтрольована форма, що використовує useRef для отримання значення введеного тексту.

Виводить alert, якщо поле порожнє або містить текст при сабміті.

### PostsList.tsx

Використовує useEffect для отримання списку постів з сервера.

Обробляє стани завантаження (loading), помилки (error) та успішного завантаження.

Відображає список перших 10 постів.


## Використані технології

1. React (з використанням хуків useState, useEffect, useRef)

2. TypeScript (типізація пропсів та стейтів)

3. CSS (стилізація компонентів)
