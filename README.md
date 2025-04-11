# React + MUI 

Цей проєкт створений з використанням:

-  React + TypeScript
-  Material UI (MUI)
-  React Router v6
-  Повністю адаптивний макет з фіксованим хедером та футером
- Центрування сторінки категорії по вертикалі та горизонталі

---

## Структура проєкту

src/ ├── components/ │ ├── CardItem.tsx # Один елемент-картка │ ├── Footer.tsx # Футер сайту │ ├── Layout.tsx # Основний Layout з AppBar, Footer і Outlet │ ├── MenuAppBar.tsx # Навігація сайту (header) │ ├── PageLayout.tsx # Центрування контенту всередині сторінки │ └── SelectActionCard.tsx # Список карток з кнопками переходу │ ├── pages/ │ └── CategoryPage.tsx # Сторінка-заглушка для категорій │ ├── App.tsx # Роутинг з <Layout /> і вкладеними маршрутами ├── index.tsx # Точка входу └── index.css # Глобальні стилі (включно з height: 100%)

yaml
Copy
Edit

---

## 🚀 Запуск проєкту


npm install

## Запуск сервера

npm run dev

або

yarn dev
