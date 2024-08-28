export default {
  async getFaq(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/faqs')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
