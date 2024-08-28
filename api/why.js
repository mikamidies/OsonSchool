export default {
  async getWhy(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/reasons')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
