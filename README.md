# Тестовое задание по Nuxt 3

## Локальный запуск

Убедитесь, что у вас свободны к использованию порты 3001 и 3004 (или поменяйте их в .env).

```
npm i
npm run dev:all
```

## Описание реализации

### TS и чистота кода

Я всегда использую TypeScript, мне кажется он критически важен для стабильной и удобной разработки, и причин его *не*
использовать крайне мало. Кроме этого я стремлюсь максимально использовать компонентный подход и дробить логику на
составные части, это помогает не только масштабируемости, но и банальной читаемости кода. Мой ментор на прошлом рабочем
месте очень строго следил за соблюдением стайлгайдов и лучших практик, и (я надеюсь) передал это мне.

Этот мини-проект - мой первый опыт использования Vue и Nuxt, и я не знакома пока с принятыми практиками касательно
файловой структуры, нейминга и т.д. в этой экосистеме, но я постаралась по максимуму соблюдать применимые здесь общие
принципы чистоты кода.

### Express

Из предложенных вариантов для серверной части Express меня больше заинтриговал, так как это устоявшаяся и популярная
технология в целом. Я посчитала, что практика с ним будет как минимум полезнее для моего развития и как максимум вернее
в целях поддерживаемого кода (так как Express популярен и множество разработчиков имеют опыт с ним в не зависимости от
фронтового фреймворка).

### Обращение к серверу за данными

Для аутентификации и для обращения за данными по товарам используются два composable - useAuth и useData. Они решают
разные бизнес-задачи, и потому отдельны друг от друга. Оба они используют глобальный стор через useState, чтобы хранить
полученные с сервера данные. Сами запросы используют axios - это простая в использовании библиотека, которая, как мне
кажется, хорошо подходит для этого задания.

# Развертывание в продакшн

## 1. Сборка приложения

Сначала соберите Nuxt-приложение:

```
npm run build
```

Это создаст оптимизированную сборку в папке .output.

## 2. Развёртывание серверной части

Скомпилируйте Express-сервер с помощью TypeScript (или используйте ts-node, если производительность не критична). Для
продакшена лучше скомпилировать в JavaScript:

```
npx tsc -p tsconfig.server.json
```

Полученные файлы будут в папке, указанной как outDir (например, dist/server).

## 3. Запуск приложения в продакшене

Запустите собранное Nuxt-приложение и Express-сервер:

### Nuxt:

Запустите:

```
npm run start
```

### Express-сервер:

Запустите скомпилированный сервер:

```
node dist/server/app.js
```

## 4. Контейнеризация (опционально)

Для повышения надёжности и упрощения деплоя и разработки можно использовать Docker. Пример Dockerfile для
контейнеризации приложения:

```
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000 3001

CMD ["concurrently", "\"npm run start\"", "\"node dist/server/app.js\""]
```

Это позволит запускать приложение в изолированном окружении, что упрощает масштабирование и поддержку. Также можно
упростить процесс разработки и тестирования в разных условиях при помощи разных docker-compose файлов.