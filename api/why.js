export default {
  async getWhy(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/reasons', {
          ...params,
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
