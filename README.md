# BasicAppReact

## Установка

```bash
# Установка зависимостей пакетов npm
$ npm install

# Инициализация husky на проекте
$ npm run prepare

```



## Режим запуска

```bash
# Режим разработки & запуск локального devServer
$ npm run start

# Сборка для разработки
$ npm run build:dev

# Сборка для продакшена
$ npm run build:prod

# Запуск поиска проблем eslint
$ npm run lint:ts

# Запуск исправления ошибок eslint в автоматическом режиме 
$ npm run lint:ts:fix

# Запуск поиска проблем styleLint
$ npm run lint:scss

# Запуск исправления ошибок styleLint в автоматическом режиме
$ npm run lint:scss:fix


# Запуск тестов jest
$ npm run test

```

 Команды prettier, prettier:fix, prepare используются другими скриптами,
 они входят в состав запуска проверки husky, отдельно не запускаются!


Приложение доступно на https://localhost:3666/

Анализ размера библиотек и исходного bundle http://localhost:4444/
