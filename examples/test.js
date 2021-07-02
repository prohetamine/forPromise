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
