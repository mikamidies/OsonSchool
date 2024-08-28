export default {
  async getPrices(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/tarifs')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
