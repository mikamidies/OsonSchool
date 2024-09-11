<template>
  <div class="wrap">
    <div class="anchor" id="reviews"></div>
    <div class="belt">
      <div class="container" data-aos="fade-up" data-aos-duration="1200">
        <h4 class="title">
          <span> {{ $store.state.translations['main.our'] }} </span>
          {{ $store.state.translations['main.reviews'] }}
        </h4>
      </div>
    </div>

    <div class="slider">
      <div class="reviews__prev" @click="decrease">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
        >
          <path
            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM25 7L1 7V9L25 9V7Z"
            fill="#0080FE"
          />
        </svg>
      </div>

      <img src="@/assets/img/mockup.png" alt="" class="phone" />
      <EldenRing
        class="ring"
        :class="{ purple: count == 1, blue: count == 2 }"
      />

      <div class="swiper" ref="reviewsSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in reviews" :key="item.id">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>

      <div class="reviews__next" @click="increase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
        >
          <path
            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L18.3431 15.0711C17.9526 15.4616 17.3195 15.4616 16.9289 15.0711C16.5384 14.6805 16.5384 14.0474 16.9289 13.6569L22.5858 8L16.9289 2.34315C16.5384 1.95262 16.5384 1.31946 16.9289 0.928932C17.3195 0.538408 17.9526 0.538408 18.3431 0.928932L24.7071 7.29289ZM0 7L24 7V9L0 9L0 7Z"
            fill="#CE1099"
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
  props: ['reviews'],

  data() {
    return {
      count: 0,
    }
  },

  mounted() {
    new Swiper(this.$refs.reviewsSwiper, {
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl: '.reviews__prev',
        nextEl: '.reviews__next',
      },
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      speed: 1000,
      spaceBetween: 0,
    })
  },

  methods: {
    increase() {
      if (this.count < 2) {
        this.count++
      } else {
        this.count--
        console.log(this.count)
      }
    },

    decrease() {
      if (this.count > 0) {
        this.count--
      } else {
        this.count++
        console.log(this.count)
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 156px;
}
.belt {
  background: var(--blue);
  margin-bottom: 64px !important;
}
.title span {
  color: var(--sky) !important;
}
.swiper-slide img {
  width: 100%;
  height: 720px;
  max-width: 340px;
  object-fit: cover;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider {
  position: relative;
}
.swiper {
  border-radius: 64px;
  width: 340px;
}
.phone {
  width: 368px;
  height: 732px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;
}
.ring :deep(svg) {
  width: 600px;
}
.reviews__next,
.reviews__prev {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
.reviews__prev {
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 9;
}
.reviews__next {
  position: absolute;
  top: 50%;
  right: 10%;
  z-index: 9;
}
.reviews__next:hover,
.reviews__prev:hover {
  cursor: url(@/assets/img/logo/cursor-2.png) 10 20, auto;
}
@media screen and (max-width: 1024px) {
  .swiper-slide img {
    height: 380px;
    border-radius: 20px;
  }
  .reviews__prev {
    left: 5%;
  }
  .reviews__next {
    right: 5%;
  }
  .swiper {
    width: 180px;
    border-radius: 20px;
  }
  .wrap {
    padding-bottom: 64px;
  }
  .phone {
    width: 200px;
    height: 480px;
  }
  .ring {
    width: 80%;
  }
}
</style>
