# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

чтобы развернуть серверную часть :

npm run serve
\



Реализовать приложение, которое будет отображать несколько страниц, в зависимости от url браузера. Серверную часть программировать не нужно. Оформление и дизайн на ваше усмотрение, проявите творчество, сделайте так, чтобы можно было комфортно смотреть на приложение в браузере.
Необходимо решить задание, используя следующий стек технологий:
1. JavaScript
2. Web-фреймворк на выбор: a. React/Redux
b. Angular/NgRx
3. CSS - не использовать сторонних CSS-библиотек или препроцессоров
Описание страниц:
1. / - главная страница.
2. /login - Авторизация - страница авторизации.
3. /profile - Профиль - страница, которая отображает любую информацию об
авторизованном пользователе. Должна быть закрыта без авторизации.
4. /info - Информация - страница с любой однородной информацией.
Реализовать боковую или верхнюю панель навигации, которая будет отображаться на всех страницах приложения и содержать ссылки на главную страницу, на страницу с информацией (/info) и на страницу пользователя (/profile).
Реализовать переход на страницу Авторизация при попытке войти в Профиль, если пользователь не авторизован.
Реализовать отображение имени авторизованного пользователя на панели навигации.
Для авторизации пользователя использовать фейковые данные username: Admin, password: 12345678.
При вводе правильных данных необходимо реализовать переход на страницу профиля пользователя.
При попытке ввести некорректные данные отображать сообщение "Имя пользователя или пароль введены неверно".
Реализовать в приложении  Календарь 
Реализовать страницу календаря (/calendar) в соответствии с макетом:
Страница должна быть закрыта без авторизации.
Реализовать Добавление/Редактирование событий пользователя в календарь. Реализовать переход по месяцам.
Реализовать поиск событий в календаре.
На странице Профиль отобразить созданные события пользователя.
 
 
 
 ПРОЕКТ МОЖНО ПОСМОТРЕТЬ ПО ССЫЛКЕ https://calendar-brown-xi.vercel.app/calendar
 
