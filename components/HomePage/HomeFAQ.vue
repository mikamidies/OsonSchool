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
        <AccordionItem>
          <template slot="accordion-trigger">
            <h4>
              <span class="index"></span>
              Question
            </h4>
          </template>
          <template slot="accordion-content">
            <div class="html">Answer</div>
          </template>
        </AccordionItem>

        <AccordionItem>
          <template slot="accordion-trigger">
            <h4>
              <span class="index"></span>
              Question
            </h4>
          </template>
          <template slot="accordion-content">
            <div class="html">Answer</div>
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
