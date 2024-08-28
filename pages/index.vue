<template>
  <div>
    <TheHeader />
    <main>
      <HomeHero />
      <HomeSaturn />
      <HomeCover />
      <HomeWhy :why="why" />
      <HomeTeachers :teachers="teachers" />
      <HomePrices :pricing="pricing" />
      <HomeBonuses />
      <HomeReviews :reviews="reviews" />
      <HomeFAQ :faq="faq" />
      <HomeForm />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import whyApi from '@/api/why.js'
import teachersApi from '@/api/teachers.js'
import reviewsApi from '@/api/reviews.js'
import faqApi from '@/api/faq.js'
import pricingApi from '@/api/pricing.js'

export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  async asyncData({ $axios }) {
    const why = await whyApi.getWhy($axios)
    const teachers = await teachersApi.getTeachers($axios)
    const reviews = await reviewsApi.getReviews($axios)
    const faq = await faqApi.getFaq($axios)
    const pricing = await pricingApi.getPrices($$axios)

    return {
      why,
      teachers,
      reviews,
      faq,
      pricing,
    }
  },

  // async mounted() {
  //   const whyData = await whyApi.getWhy(this.$axios)

  //   this.why = whyData.data.results
  // },
}
</script>
