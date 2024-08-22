<template>
  <div class="wrap">
    <div class="belt">
      <div class="container">
        <h4 class="title">
          <span> Why </span>
          Oson?
        </h4>
      </div>
    </div>

    <div class="container">
      <div class="prev">
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

      <div class="swiper" ref="whySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="img">
              <img src="@/assets/img/why-1.jpg" alt="" />
            </div>
            <div class="content">
              <p class="name">HIGHLY QUALIFIED MENTORS</p>
              <p class="sub">
                Our teachers have exceptional teaching experience, with
                qualifications such as a minimum IELTS score of 7.5 and SAT
                scores of 1490 or higher.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img">
              <img src="@/assets/img/why-2.jpg" alt="" />
            </div>
            <div class="content">
              <p class="name">HIGHLY QUALIFIED MENTORS</p>
              <p class="sub">
                Our teachers have exceptional teaching experience, with
                qualifications such as a minimum IELTS score of 7.5 and SAT
                scores of 1490 or higher.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="img">
              <img src="@/assets/img/why-1.jpg" alt="" />
            </div>
            <div class="content">
              <p class="name">HIGHLY QUALIFIED MENTORS</p>
              <p class="sub">
                Our teachers have exceptional teaching experience, with
                qualifications such as a minimum IELTS score of 7.5 and SAT
                scores of 1490 or higher.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="next">
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
  mounted() {
    new Swiper(this.$refs.whySwiper, {
      slidesPerView: 2,
      navigation: {
        prevEl: '.prev',
        nextEl: '.next',
      },
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      speed: 1000,
      // loop: true,
      spaceBetween: 32,
    })
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 104px;
}
.belt {
  background: var(--violet);
}
.title {
  color: #0080fe;
}
.title span {
  color: var(--magenta) !important;
}
.img img {
  width: 100%;
  border-radius: 40px;
  height: 320px;
  object-fit: cover;
}
.name {
  color: #fff;
  font-family: var(--bold);
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 8px;
  border-bottom: 2px solid white;
  padding: 20px 0 16px 0;
  margin-bottom: 16px;
}
.sub {
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: var(--decor);
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.swiper {
  max-width: 1075px;
  margin: 0 auto;
  border-radius: 40px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.prev,
.next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
</style>
