<template>
  <div class="wrap" id="home">
    <div class="container conte">
      <div class="left">
        <div class="content">
          <h1 class="title">{{ $store.state.translations['main.title'] }}</h1>
          <h2 class="sub">
            {{ $store.state.translations['main.sub'] }}
          </h2>
        </div>
      </div>
      <div class="right">
        <img class="star" src="@/assets/img/hero.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    let conte = gsap.timeline({
      scrollTrigger: {
        trigger: '#home',
        start: 'bottom 80%',
        end: 'top 10%',
        markers: false,
        scrub: 1,
      },
    })

    conte.to('.conte', {
      y: -100,
    })
  },
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
  height: 90vh;
}
.title {
  font-size: 85px;
  font-style: normal;
  font-family: var(--bold);
  font-weight: 800;
  line-height: 75px;
  margin-bottom: 72px;
  background: linear-gradient(95deg, #fff 52.66%, #bbb5ff 95.51%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub {
  color: #fff;
  font-family: var(--decor);
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 90%;
  display: flex;
}
.container {
  display: grid;
  grid-template-columns: 5.5fr 4.5fr;
  height: 100%;
}
.right {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right img {
  width: 630px;
  object-fit: contain;
}
.left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.star {
  animation: levitate 5s ease-out 1s infinite;
}
.conte {
  transform: translateY(50px);
}

@keyframes levitate {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(-10%, -10%);
  }
  100% {
    transform: translate(0, 0);
  }
}
@media screen and (max-width: 1200px) {
  .wrap {
    height: 90vh;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 48px;
    line-height: 100%;
  }
  .right img {
    position: static;
    width: 100%;
    transform: translate(0);
  }
  .content {
    margin: 0;
  }
  .title {
    margin-bottom: 16px;
  }
  .left {
    height: 65%;
  }
  .right {
    height: 28%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sub {
    font-size: 16px;
  }
  @keyframes levitate {
    0% {
      transform: translate(0%, 0%);
    }
    50% {
      transform: translate(-5%, -5%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
}
@media screen and (max-height: 800px) {
  .wrap {
    height: 100vh;
  }
  .title {
    font-size: 44px;
  }
}
@media screen and (max-width: 400px) {
  .title {
    font-size: 38px;
  }
}
</style>
