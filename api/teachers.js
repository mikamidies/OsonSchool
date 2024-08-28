export default {
  async getTeachers(axios) {
    try {
      let res

      if (axios) {
        res = await axios.get('/workers')
      }

      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
