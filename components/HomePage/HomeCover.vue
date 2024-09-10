<template>
  <div class="wrap">
    <img src="@/assets/img/left.png" alt="" class="left" />

    <div class="belt">
      <div class="container">
        <h4 class="title">
          <span> {{ $store.state.translations['main.we'] }} </span>
          {{ $store.state.translations['main.gotyou'] }}
        </h4>
      </div>
    </div>
    <div class="container cont">
      <div class="items">
        <div class="item">
          <div class="figure oneFigure">
            <img src="@/assets/img/figure-1.png" alt="" />
          </div>
          <div class="text oneText">
            <p>{{ $store.state.translations['main.gotitem-1'] }}</p>
          </div>
        </div>
        <div class="hollow"></div>
        <div class="item">
          <div class="text twoText">
            <p>{{ $store.state.translations['main.gotitem-2'] }}</p>
          </div>
          <div class="figure twoFigure">
            <img src="@/assets/img/figure-4.png" alt="" />
          </div>
        </div>
        <div class="hollow"></div>
        <div class="item heigher">
          <div class="figure threeFigure">
            <img src="@/assets/img/figure-3.png" alt="" />
          </div>
          <div class="text threeText">
            <p>{{ $store.state.translations['main.gotitem-3'] }}</p>
          </div>
        </div>
        <div class="hollow"></div>
        <div class="item">
          <div class="figure fourFigure">
            <img src="@/assets/img/figure-2.png" alt="" />
          </div>
          <div class="text foutText">
            <p>{{ $store.state.translations['main.gotitem-4'] }}</p>
          </div>
        </div>
        <div class="hollow"></div>
        <div class="item">
          <div class="text fiveText">
            <p>{{ $store.state.translations['main.gotitem-5'] }}</p>
          </div>
          <div class="figure fiveFigure">
            <img src="@/assets/img/figure-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <img src="@/assets/img/right.png" alt="" class="right" />
  </div>
</template>

<script>
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    let figure = gsap.timeline({
      scrollTrigger: {
        trigger: '.cont',
        start: '-50% center',
        end: '200% center',
        markers: false,
        scrub: true,
      },
    })

    figure.to('.oneFigure', {
      y: -56,
    })
    figure.to('.twoFigure', {
      y: -56,
    })
    figure.to('.threeFigure', {
      y: -56,
    })
    figure.to('.fourFigure', {
      y: -56,
    })
    figure.to('.fiveFigure', {
      y: -56,
    })
  },
}
</script>

<style scoped>
.wrap {
  position: relative;
}
.belt {
  background: var(--blue);
}
.title {
  color: #0080fe;
}
.title span {
  color: var(--sky) !important;
}
.left {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
}
.right {
  position: absolute;
  bottom: 0%;
  right: 0%;
}
.items {
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.item {
  display: flex;
  align-items: center;
  height: 195px;
}
.text {
  position: relative;
  z-index: 2;
}
.text::before {
  width: 167px;
  height: 167px;
  border-radius: 50%;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: var(--black);
}
.text::after {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  content: '';
  background: linear-gradient(
    90deg,
    #8ca8bf 0%,
    #8079a0 23%,
    #7a6291 37%,
    #ef9485 43%,
    #eea290 49%,
    #edc8ae 61%,
    #edf3d0 72%,
    #dee5d0 78.01%,
    #b8c1d3 89.01%,
    #8f9bd6 100.01%
  );

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.text p {
  color: #fff;
  text-align: center;
  font-family: var(--decor);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  z-index: 25;
  max-width: 150px;
}
.item:nth-child(1) .figure,
.item:nth-child(7) .figure {
  transform: translateX(48px);
}
.figure {
  position: relative;
  z-index: 3;
}
.item:nth-child(3) .figure,
.item:nth-child(9) .figure {
  transform: translateX(-48px);
}
.item:nth-child(5) {
  flex-direction: column-reverse;
}
.item:nth-child(5) .figure {
  transform: translateY(-28px);
}
.mid p {
  color: #fff;
  text-align: center;
  font-family: var(--decor);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
  max-width: 70%;
  margin: 0 auto;
}
.item:nth-child(9),
.item:nth-child(7) {
  transform: translateY(-120px);
}
.heigher {
  height: auto;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
    overflow-x: hidden;
  }
  .left {
    height: 120px;
    top: 150px;
  }
  .right {
    height: 120px;
    bottom: 50px;
  }
  .items {
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  .item {
    justify-content: center;
    height: 190px;
  }
  .item:nth-child(7),
  .item:nth-child(9) {
    transform: translateY(0);
  }
  .item:nth-child(5) {
    flex-direction: row;
  }
  .item:nth-child(7) {
    flex-direction: row-reverse;
  }
  .item:nth-child(9) {
    flex-direction: row-reverse;
  }
  .item:nth-child(1) .figure,
  .item:nth-child(7) .figure {
    transform: translateX(0px);
  }
  .item:nth-child(3) .figure,
  .item:nth-child(9) .figure {
    transform: translateX(0px);
  }
  .item:nth-child(5) .figure {
    transform: translateY(0px);
  }
}
</style>
