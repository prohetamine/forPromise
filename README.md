##### lang: [ru](#rulang) [en](#enlang)


# <a name="rulang">forPromise</a>

### С чего начать

Установим npm модуль  ```forPromise```

```sh
$ npm install forPromise
```

или

```sh
$ yarn add forPromise
```

### Примеры и описание

Подключение модуля

```sh
const { prototype, forPromise } = require('forPromise')
```

#### <a name="prototype">prototype</a>

Функция [prototype](#prototype) добавляет в прототипы массивов новую функцию forPromise.

| параметры | значение по-умолчанию | информация |
| ------ | ------ | ------ |
| function | undefined | функция обратного вызова должна возвращать промис |


```sh
const { prototype } = require('./index.js')
const axios = require('axios')

prototype() // inject array prototype

;(async () => {
  const arr = [1, 2, 3, 4, 5]

  const newArr = await arr.forPromise(
    id => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => data)
  )

  console.log(newArr)
})()
```

#### <a name="forPromise">forPromise</a>

Функция [forPromise](#forPromise) выполняет массив заданных промисов

| параметры | значение по-умолчанию | информация |
| ------ | ------ | ------ |
| Array | undefined | массив элементов |
| function | undefined | функция обратного вызова должна возвращать промис |

```sh
const { forPromise } = require('./index.js')
const axios = require('axios')

;(async () => {
  const arr = [1, 2, 3, 4, 5]

  const newArr = await forPromise(
    arr,
    id => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => data)
  )

  console.log(newArr)
})()
```

### Другие примеры

[больше...](/examples)

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamine)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.

-------- OTHER WORLD --------

##### lang: [ru](#rulang) [en](#enlang)


# <a name="rulang">forPromise</a>

### Get started

Install the npm module ```forPromise```

```sh
$ npm install forPromise
```

или

```sh
$ yarn add forPromise
```

### Examples and description

Connecting the module

```sh
const { prototype, forPromise } = require('forPromise')
```

#### <a name="prototype">prototype</a>

The [prototype](#prototype) function adds a new forPromise function to the array prototypes.

| parameters | default value | information|
| ------ | ------ | ------ |
| function | undefined | the callback function should return a promise |

```sh
const { prototype } = require('./index.js')
const axios = require('axios')

prototype() // inject array prototype

;(async () => {
  const arr = [1, 2, 3, 4, 5]

  const newArr = await arr.forPromise(
    id => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => data)
  )

  console.log(newArr)
})()
```

#### <a name="forPromise">forPromise</a>

The [forPromise](#forPromise) function executes an array of specified promises

| parameters | default value | information|
| ------ | ------ | ------ |
| Array | undefined / array of elements |
| function | undefined | the callback function should return a promise |


```sh
const { forPromise } = require('./index.js')
const axios = require('axios')

;(async () => {
  const arr = [1, 2, 3, 4, 5]

  const newArr = await forPromise(
    arr,
    id => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(({ data }) => data)
  )

  console.log(newArr)
})()
```

### Other examples

[more...](/examples)

### Contacts

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamine)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.
