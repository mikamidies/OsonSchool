<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
      <div class="chevron" :class="{ rotate: visible }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
        >
          <circle cx="26.5" cy="26.5" r="26.5" fill="#1B1818" />
          <line
            x1="26.5"
            y1="12"
            x2="26.5"
            y2="41"
            stroke="#8700FE"
            stroke-width="3"
          />
          <line
            x1="12"
            y1="25.5"
            x2="41"
            y2="25.5"
            stroke="#8700FE"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="visible" class="accordion__content">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ['Accordion'],
  props: {},
  data() {
    return {
      index: null,
    }
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active
    },
  },
  created() {
    this.index = this.Accordion.count++
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = 0
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
  },
}
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
  height: fit-content;
  margin-bottom: 6px;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  position: relative;
  margin: 0;
  background: rgba(97, 95, 95, 0.25);
  padding: 24px 38px;
  color: #fff;
  text-align: center;
  font-family: var(--decor);
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.accordion__content :deep(p) {
  padding: 20px 36px 32px 36px;
  background: rgba(97, 95, 95, 0.25) !important;
}

.accordion__content :deep(*) {
  background: transparent !important;
  margin: 0;
  color: #fff !important;
  font-family: var(--decor) !important;
  font-size: 25px !important;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.chevron {
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron.rotate {
  transform: rotate(45deg);
}
.chevron.rotate circle {
  fill: var(--magenta);
}
.chevron.rotate line {
  stroke: white;
}

@media screen and (max-width: 1024px) {
  .accordion__trigger {
    padding: 12px;
    font-size: 24px;
    text-align: left;
  }
  .accordion__content :deep(p) {
    padding: 12px;
  }
  .accordion__content :deep(*) {
    font-size: 18px !important;
  }
  .accordion__trigger svg {
    width: 50px;
    height: 50px;
  }
}
</style>
