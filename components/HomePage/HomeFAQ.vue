<template>
  <div class="wrap">
    <div class="belt">
      <div class="container">
        <h4 class="title">
          <span> Frequently </span>
          Asked Questions:
        </h4>
      </div>
    </div>

    <div class="container">
      <Accordion>
        <AccordionItem v-for="item in faq" :key="item.id">
          <template slot="accordion-trigger">
            <h4>
              <span class="index"></span>
              {{ item.question }}
            </h4>
          </template>
          <template slot="accordion-content">
            <div class="html" v-html="item.answer"></div>
          </template>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  props: ['faq'],

  components: {
    Accordion,
    AccordionItem,
  },
}
</script>

<style scoped>
.belt {
  background: var(--bloody);
}
.title span {
  color: var(--pink) !important;
}
.wrap {
  padding-bottom: 72px;
}
</style>
