export default {
  async getTeachers(axios, params) {
    try {
      let res

      if (axios) {
        res = await axios.get('/workers', {
          ...params,
        })
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
