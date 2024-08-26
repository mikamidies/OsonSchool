<template>
  <div class="wrap">
    <div class="belt">
      <div class="container">
        <h4 class="title">
          <span> The </span>
          pricing
        </h4>
      </div>
    </div>

    <div class="container big">
      <div class="card">
        <div class="top">
          <div class="stars">
            <div
              class="star__first star"
              :class="{ active: handleOne == true }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M22.5 0L25.9941 9.46L33.75 3.01443L32.0459 12.9541L41.9856 11.25L35.54 19.0059L45 22.5L35.54 25.9941L41.9856 33.75L32.0459 32.0459L33.75 41.9856L25.9941 35.54L22.5 45L19.0059 35.54L11.25 41.9856L12.9541 32.0459L3.01443 33.75L9.46 25.9941L0 22.5L9.46 19.0059L3.01443 11.25L12.9541 12.9541L11.25 3.01443L19.0059 9.46L22.5 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="star__second star"
              :class="{ active: handleTwo == true }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M22.5 0L25.9941 9.46L33.75 3.01443L32.0459 12.9541L41.9856 11.25L35.54 19.0059L45 22.5L35.54 25.9941L41.9856 33.75L32.0459 32.0459L33.75 41.9856L25.9941 35.54L22.5 45L19.0059 35.54L11.25 41.9856L12.9541 32.0459L3.01443 33.75L9.46 25.9941L0 22.5L9.46 19.0059L3.01443 11.25L12.9541 12.9541L11.25 3.01443L19.0059 9.46L22.5 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="star__third star"
              :class="{ active: handleThree == true }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M22.5 0L25.9941 9.46L33.75 3.01443L32.0459 12.9541L41.9856 11.25L35.54 19.0059L45 22.5L35.54 25.9941L41.9856 33.75L32.0459 32.0459L33.75 41.9856L25.9941 35.54L22.5 45L19.0059 35.54L11.25 41.9856L12.9541 32.0459L3.01443 33.75L9.46 25.9941L0 22.5L9.46 19.0059L3.01443 11.25L12.9541 12.9541L11.25 3.01443L19.0059 9.46L22.5 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div class="tabs ichi">
            <button
              class="button"
              @click="
                ;(handleOne = true), (handleTwo = false), (handleThree = false)
              "
              :class="{ active: handleOne == true }"
            >
              IELTS
            </button>
            <button
              class="button ni"
              @click="
                ;(handleOne = false), (handleTwo = true), (handleThree = false)
              "
              :class="{ active: handleTwo == true }"
            >
              General English
            </button>
            <button
              class="button san"
              @click="
                ;(handleOne = false), (handleTwo = false), (handleThree = true)
              "
              :class="{ active: handleThree == true }"
            >
              SAT
            </button>
          </div>
        </div>

        <div class="mid">
          <div class="planets">
            <div class="violet planet" :class="{ active: handleOne == true }">
              <img src="@/assets/img/tab-1.png" alt="" />
              <img src="@/assets/img/tab-1.png" alt="" />
              <img src="@/assets/img/tab-1.png" alt="" />
            </div>
            <div class="blue planet" :class="{ active: handleTwo == true }">
              <img src="@/assets/img/tab-2.png" alt="" />
              <img src="@/assets/img/tab-2.png" alt="" />
              <img src="@/assets/img/tab-2.png" alt="" />
            </div>
            <div class="pink planet" :class="{ active: handleThree == true }">
              <img src="@/assets/img/tab-3.png" alt="" />
              <img src="@/assets/img/tab-3.png" alt="" />
              <img src="@/assets/img/tab-3.png" alt="" />
            </div>
          </div>

          <div class="content one" :class="{ active: handleOne == true }">
            <div class="item">
              <h4 class="name">Group</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 4.000.000</p>
            </div>
            <div class="stick"></div>
            <div class="item">
              <h4 class="name">Individual</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 7.000.000</p>
            </div>
          </div>

          <div class="content two" :class="{ active: handleTwo == true }">
            <div class="item">
              <h4 class="name">Group</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 4.000.000</p>
            </div>
            <div class="stick"></div>
            <div class="item">
              <h4 class="name">Individual</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 7.000.000</p>
            </div>
          </div>

          <div class="content three" :class="{ active: handleThree == true }">
            <div class="item">
              <h4 class="name">Group</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 4.000.000</p>
            </div>
            <div class="stick"></div>
            <div class="item">
              <h4 class="name">Individual</h4>
              <ul class="list">
                <li>12 lessons/month through Zoom</li>
                <li>2-4 students per group</li>
                <li>Materials by Oson</li>
                <li>Speaking sessions</li>
              </ul>
              <p class="price">Price: 7.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handleOne: true,
      handleTwo: false,
      handleThree: false,
    }
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 56px;
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
.card {
  border-radius: 89px;
  border: 3px solid #fff;
  padding: 48px 64px;
}
.top {
  display: grid;
  grid-template-columns: 168px 1fr;
  gap: 32px;
  margin-bottom: 56px;
}
.stars {
  border-radius: 42px;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  padding: 16px 10px;
}
.star {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.tabs button {
  color: #fff;
  font-family: var(--bold);
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 88.235% */
  border-radius: 42px;
  border: 3px solid #fff;
  position: relative;
  z-index: 1;
  transition: 0.2s;
}
.tabs button:nth-child(1) {
  margin-right: -16px;
}
.tabs button:nth-child(3) {
  margin-left: -16px;
}
.tabs button:nth-child(2) {
  margin-inline: -16px;
}
.tabs button.active {
  background: var(--magenta);
  z-index: 2;
  border-color: var(--magenta);
}
.mid {
  display: grid;
  grid-template-columns: 136px 1fr;
  gap: 65px;
}
.planets {
  border-radius: 58px;
  border: 3px solid #fff;
  padding: 16px;
}
.planet {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  display: none;
  height: 100%;
}
.planet.active {
  display: flex;
}
.planet img {
  width: 97px;
  height: 97px;
  object-fit: contain;
  border-radius: 50%;
}
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 108px;
  display: none;
  position: relative;
}
.content.active {
  display: grid;
}
.stick {
  position: absolute;
}
.item {
  border-radius: 60px;
  padding: 0 24px 32px 24px;
  border: 2px dashed var(--magenta);
  position: relative;
  transition: 0.4s;
}
.name {
  text-align: center;
  margin-bottom: 16px;
  color: #fff;
  font-family: var(--bold);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 66.667% */
  margin-top: -15px;
}
.list {
  border-radius: 42px;
  background: var(--magenta);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: 0.4s;
}
.list li {
  list-style: disc;
  color: #fff;
  font-family: var(--decor);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 120% */
  margin-left: 8px;
}
.price {
  padding-top: 40px;
  border-top: 1px solid white;
  margin: 24px 24px 0 24px;

  font-family: var(--bold);
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 66.667% */
}
.stick {
  width: 5px;
  height: 300px;
  background: var(--magenta);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}

.ni.active {
  background: var(--sky) !important;
  border-color: var(--sky) !important;
}
.san.active {
  background: var(--pink) !important;
  border-color: var(--pink) !important;
}
.star path {
  transition: 0.4s;
}
.star__first.active path {
  fill: var(--magenta);
  animation: 2.5s rotate infinite;
  animation-timing-function: linear;
  transform-origin: center center;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.star__second.active path {
  fill: var(--sky);
  animation: 2.5s rotate infinite;
  animation-timing-function: linear;
  transform-origin: center center;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.star__third.active path {
  fill: var(--pink);
  animation: 2.5s rotate infinite;
  animation-timing-function: linear;
  transform-origin: center center;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.two.active .list,
.two.active .stick {
  background: var(--sky) !important;
}
.three.active .list,
.three.active .stick {
  background: var(--pink) !important;
}
.two.active .item {
  border-color: var(--sky) !important;
}
.three.active .item {
  border-color: var(--pink) !important;
}
</style>
