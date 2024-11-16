export default {
  async getFaq(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/faqs', {
          ...params,
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
