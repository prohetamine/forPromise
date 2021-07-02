module.exports = {
  forPromise: async (array, cb) => {
    const stack = array.map(item => cb(item))
      , results = []

    for (let i = 0; i < stack.length; i++) {
      try {
          results.push(await stack[i])
      } catch (e) {
          results.push(null)
      }
    }

    return results
  },
  prototype: () => {
    Array.prototype.forPromise = async function (cb) {
      const stack = this.map(item => cb(item))
        , results = []

      for (let i = 0; i < stack.length; i++) {
        try {
            results.push(await stack[i])
        } catch (e) {
            results.push(null)
        }
      }

      return results
    }
  }
}
