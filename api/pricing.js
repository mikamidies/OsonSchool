export default {
  async getPrices(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/tarifs', {
          ...params,
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
