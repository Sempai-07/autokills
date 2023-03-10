# AutoKill

[![Discord Server](https://img.shields.io/discord/796504104565211187?color=7289da&logo=discord&logoColor=white)](https://discord.gg/EuSbT5HH8b)
[![NPM Version](https://img.shields.io/npm/v/autokills.svg?maxAge=3600)](https://www.npmjs.com/package/autokills)
[![NPM Downloads](https://img.shields.io/npm/dt/autokills.svg?maxAge=3600)](https://www.npmjs.com/package/autokills)


Библиотека `autokills` предоставляет класс `AutoKill`, который позволяет автоматически перезагружать процесс `Node.js` через определенный интервал времени, если процесс зависнет или прервет соединение.

## Использование
Для использования этой библиотеки необходимо импортировать класс `AutoKill` из модуля и создать экземпляр класса, передав объект клиента и время автоматической перезагрузки в миллисекундах.

```js
const { AutoKill } = require('autokills');

const client = new MyClient();
const time = 60000; // 1 minute

const autoKill = new AutoKill(client, time);

autoKill.start();
```

## Методы

Данный класс `AutoKill`, который представляет собой инструмент для автоматического завершения процесса приложения, например, при потере соединения с сервером.

Методы класса включают в себя:

- `constructor(client, time)`: конструктор класса, принимает объект client и число `time`. Выбрасывает ошибки, если клиент не передан, время меньше `5` секунд или не указано вовсе.

- `restart()`: останавливает и запускает таймер заново.

- `onKill(callback)`: устанавливает функцию обратного вызова при убийстве процесса.

- `start()`: запускает таймер, который будет вызывать функцию обратного вызова, если клиент не готов или не получен.

- `stop()`: останавливает таймер.

- `getTimeRemaining()`: вычисляет оставшееся время таймера.

- `pause()`: останавливает таймер, но не убивает процесс.

- `resume()`: возобновляет таймер.

- `isRunning()`: возвращает значение `true`, если таймер запущен, и `false` в противном случае.

- `onPause(callback)`: устанавливает функцию обратного вызова при приостановке таймера.

- `onResume(callback)`: устанавливает функцию обратного вызова при возобновлении таймера.

- `setTime(time)`: устанавливает новое значение времени для таймера

- `onRestart(callback)`: устанавливает функцию обратного вызова при перезапуске таймера.

- `onStop(callback)`: устанавливает функцию обратного вызова при остановке таймера.

- `onStart(callback)`: устанавливает функцию обратного вызова при запуске таймера.

- `setClient(client)`: устанавливает новый клиент.

- `setKillTime(time)`: устанавливает новое значение времени для таймера и перезапускает его.

- `checkConnection()`: проверяет, есть ли у клиента соединение с сервером, и перезапускает таймер, если соединение было потеряно

## Документация

Подробную документацию по `autokills` можно найти на <a href="https://Sempai-07.github.io/dosc-autokills">официальном сайте</a>

## Вклад

Мы приветствуем Ваше участие в развитии `autokills`! Если у Вас есть какие-либо идеи или предложения, пожалуйста, зайдите на <a href="https://discord.gg/j8G7jhHMbs">Официальный сервер поддержки</a>.

## Лицензия

`Autokills` доступен на условиях лицензии MIT. Подробную информацию можно найти в файле <a href="https://github.com/Sempai-07/autokills/blob/main/LICENSE">LICENSE</a>.