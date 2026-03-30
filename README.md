# Тестовое задание User card

- Результат можно посмотреть [тут](https://sergey-kozlov-developer-users-card-test-cfea.twc1.net/)

## Использованный стек:
**React, FSD, TypeScript, Zustand, React Hook Form + Zod, tanstack query, SCSS**

### Что реализовал:
- на главной странице загрузка пользователей из jsonplaceholder [API](https://jsonplaceholder.typicode.com/users)
- на главной странице есть активные и архивные пользователи
- у каждого пользователя в карточке есть dropdown, где можно выбрать редактирование, скрыть и архив
- на странице редактирования можно отредактировать данные, которые приходят из API
- на странице редактирования подключена проверка валидации React Hook Form + Zod
- после редактирования и сохранение появлется плашка, которая исчезает через 4 сек

## Запуск проекта

1. **Клонировать репозиторий**

   ```bash
   https://github.com/Sergey-Kozlov-developer/users-card-test.git
   ```

2. **Установить зависимости**

   ```bash
   npm install
   ```

3. **Запустить проект в режиме разработки**

   ```bash
   npm run dev
   ```
