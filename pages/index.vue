<template>
  <main>
    <HomeHero />
    <HomeSaturn />
    <HomeCover />
    <HomeWhy :why="why" />
    <!-- <HomeTeachers :teachers="teachers" /> -->
    <HomePrices :pricing="pricing" />
    <!-- <HomeBonuses /> -->
    <HomeReviews :reviews="reviews" />
    <HomeFAQ :faq="faq" />
    <HomeForm />
  </main>
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

  async asyncData({ $axios, query, i18n }) {
    const why = await whyApi.getWhy($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })
    const teachers = await teachersApi.getTeachers($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })
    const reviews = await reviewsApi.getReviews($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })
    const faq = await faqApi.getFaq($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })
    const pricing = await pricingApi.getPrices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    })

    return {
      why,
      teachers,
      reviews,
      faq,
      pricing,
    }
  },
}
</script>

<style></style>
