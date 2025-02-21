<template>
  <div class="wrap">
    <div class="anchor" id="teachers"></div>
    <div class="belt">
      <div class="container">
        <h4 class="title">
          <span> {{ $store.state.translations['main.our'] }} </span>
          {{ $store.state.translations['main.teachers'] }}
        </h4>
      </div>
    </div>
    <div
      class="swiper"
      ref="teacherSwiper"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide hoverable"
          v-for="item in teachers"
          :key="item.id"
          @click="openModal(item.title, item?.text)"
        >
          <div class="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="198"
              height="198"
              viewBox="0 0 198 198"
              fill="none"
            >
              <path
                d="M99 0L114.374 41.624L148.5 13.2635L141.002 56.9979L184.737 49.5L156.376 83.6261L198 99L156.376 114.374L184.737 148.5L141.002 141.002L148.5 184.737L114.374 156.376L99 198L83.6261 156.376L49.5 184.737L56.9979 141.002L13.2635 148.5L41.624 114.374L0 99L41.624 83.6261L13.2635 49.5L56.9979 56.9979L49.5 13.2635L83.6261 41.624L99 0Z"
                fill="#0080FE"
              />
            </svg>
          </div>
          <div class="person">
            <img :src="item.image" alt="" />
          </div>
          <p class="name">{{ item.title }}</p>
        </div>
      </div>
    </div>

    <div class="buttons">
      <div class="teacher__prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
        >
          <path
            d="M0.292893 8.70711C-0.0976314 8.31658 -0.0976315 7.68342 0.292892 7.2929L6.65685 0.928934C7.04738 0.538409 7.68054 0.538409 8.07107 0.928934C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292893 8.70711ZM25 9L1 9L1 7L25 7L25 9Z"
            fill="#0080FE"
          />
        </svg>
      </div>
      <div class="teacher__next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
        >
          <path
            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L18.3431 15.0711C17.9526 15.4616 17.3195 15.4616 16.9289 15.0711C16.5384 14.6805 16.5384 14.0474 16.9289 13.6569L22.5858 8L16.9289 2.34315C16.5384 1.95262 16.5384 1.31946 16.9289 0.928932C17.3195 0.538408 17.9526 0.538408 18.3431 0.928932L24.7071 7.29289ZM0 7L24 7V9L0 9L0 7Z"
            fill="#8700FE"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['teachers'],

  mounted() {
    new Swiper(this.$refs.teacherSwiper, {
      slidesPerView: 1.7,
      spaceBetween: 32,
      navigation: {
        prevEl: '.teacher__prev',
        nextEl: '.teacher__next',
      },
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 120,
        },
      },
    })
  },
  methods: {
    openModal(title, text) {
      this.$store.commit('modal/openModal', {
        title: title,
        content: text,
      })
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 32px;
}
.belt {
  background: var(--bloody);
}
.title {
  color: #0080fe;
}
.title span {
  color: var(--pink) !important;
}
.person {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid white;
}
.person img {
  width: auto;
  max-width: 356px;
  height: 460px;
  object-fit: contain;
  position: relative;
  z-index: 2;
}
.swiper-slide {
  padding: 64px 32px 40px 32px;
  position: relative;
  border: 3px dashed var(--sky);
}
.swiper-slide:nth-child(even) {
  border-color: var(--pink);
}
.swiper-slide:nth-child(odd) .star path {
  fill: var(--pink);
}
.swiper-slide::after {
  background: transparent;
  border: 2px solid white;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 18px;
  left: -22px;
}

.star {
  position: absolute;
  top: 40px;
  right: 32px;
  z-index: 1;
}
.name {
  color: #fff;
  font-family: var(--bold);
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 88.235% */
  padding-top: 24px;
}
.swiper {
  padding-bottom: 32px;
}
.buttons {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.teacher__next,
.teacher__prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
.teacher__prev:hover,
.teacher__next:hover {
  cursor: url(@/assets/img/logo/cursor-2.png) 10 20, auto;
}
@media screen and (max-width: 1024px) {
  .person img {
    height: 240px;
  }
  .star svg {
    width: 100px;
    height: 100px;
  }
  .swiper-slide::after {
    top: 12px;
    left: -14px;
  }
  .name {
    font-size: 24px;
    line-height: 150%;
    padding-top: 16px;
  }
  .swiper-slide {
    padding: 24px;
  }
  .swiper {
    padding-bottom: 16px;
  }
}
</style>
