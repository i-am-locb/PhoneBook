# _Phone Book_
### _Тестовое задание_

## Описание
> Мною реализованна WEB версия телефонной книги в качестве
> тестового задания (задание можно найти в файле Test_tusk_for_Front-end.docx).
> После логинизации у вас появится возможность добавлять,
> удалять и редактировать номера телефонов (пока что
> новые номера хранятся только в state и не отсылаются в БД).
> Для тестирования возможностей заготовлена база из 100 
> номеров (данные для входа ниже). Возможность регистрации
> новых пользователей временно не реализованна. Когда 
> смогу разобраться как объеденить json-server и json-server-auth
> локальная БД будет полностью симмулировать работу с сервером.

## Как запустить?
```sh
npm clone https://github.com/i-am-locb/PhoneBook.git
npm install
```
После того как все скачали:
```sh
npm start
```
приложение запуститься на **:3000** порту


**Далее открываем новый терминал! (в VS Code ctrl+`) и пишем:**
```sh
npm run server
```
на **:4000** порту запуститься локальный "Back-end"

Приложение запущенно


Данные для входа
```sh
email: admin@mail.com
pass: admin
```
## Использованные библиотеки
| Библиотека | Ссылка |
| ------ | ------ |
| react | https://reactjs.org/ |
| redux | https://redux.js.org/ |
| react-redux | https://react-redux.js.org/ |
| react-router-dom | https://www.npmjs.com/package/react-router-dom |
| redux-thunk | https://github.com/reduxjs/redux-thunk |
| axios | https://github.com/axios/axios |
| json-server | https://github.com/typicode/json-server#https |
| json-server-auth | https://github.com/jeremyben/json-server-auth |
| Ant Design | https://ant.design/ |

## TODO
- реализовать регистрацию
- добавить midleware между json-server и json-server-auth для полной симуляции back-end`a
- зарефакторить на TypeScript