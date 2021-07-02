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
