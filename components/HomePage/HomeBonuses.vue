<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        <span>{{ $store.state.translations['main.extra'] }}</span>
        {{ $store.state.translations['main.bonuses'] }}
      </h4>
      <div class="items">
        <div class="item">
          <p class="name">
            {{ $store.state.translations['main.bonusitem-1'] }}
          </p>
          <div class="img">
            <img src="@/assets/img/bonus-1.png" alt="" />
          </div>
        </div>
        <div class="item">
          <p class="name">
            {{ $store.state.translations['main.bonusitem-2'] }}
          </p>
          <div class="img">
            <img src="@/assets/img/bonus-2.png" alt="" />
          </div>
        </div>
        <div class="item">
          <p class="name">
            {{ $store.state.translations['main.bonusitem-3'] }}
          </p>
          <div class="img">
            <img src="@/assets/img/bonus-3.png" alt="" />
          </div>
        </div>
      </div>

      <div class="card">
        <p class="sup">{{ $store.state.translations['main.message'] }}</p>
        <p class="text">{{ $store.state.translations['main.invest'] }}</p>
        <button @click="scrollElement('contacts')">
          {{ $store.state.translations['main.singup'] }}
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="35"
          viewBox="0 0 46 35"
          fill="none"
        >
          <path
            d="M2 16.6721L9.4574 32.0322L33.1613 1.54834"
            stroke="#D9D9D9"
            stroke-width="3"
          />
          <path
            d="M12.8387 16.6721L20.2961 32.0322L44 1.54834"
            stroke="#D9D9D9"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollElement(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 90px;
}
.title {
  text-align: center;
  font-family: var(--bold);
  font-size: 85px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 32px;
}
.title span {
  color: var(--magenta) !important;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 140px;
  margin-bottom: 64px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.name {
  max-width: 300px;
  color: #fff;
  text-align: center;
  font-family: var(--decor);
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.card {
  position: relative;
  border-radius: 0px 97px;
  background: linear-gradient(90deg, #0080fe 0%, #0f053f 100%);
  padding: 24px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.card svg {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.sup {
  color: #fff;
  font-size: 25px;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
}
.text {
  color: #fff;
  font-family: var(--bold);
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.card button {
  border-radius: 51px;
  padding: 20px 56px;
  color: #fff;
  font-family: var(--bold);
  font-size: 20px;
  position: relative;
  z-index: 2;
  background: #0080fe;
  margin-top: 10px;
}
.card button::after {
  width: 100%;
  height: 100%;
  border-radius: 51px;
  opacity: 0.8;
  background: #0080fe;
  mix-blend-mode: screen;
  filter: blur(12.5px);
  transition: 0.4s;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 1;
}
.card:hover button::after {
  opacity: 1;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .item {
    flex-direction: column-reverse;
  }
  .title {
    font-size: 32px;
  }
  .name {
    font-size: 18px;
  }
  .text {
    font-size: 24px;
    text-align: center;
  }
  .sup {
    font-size: 18px;
  }
  .card button {
    padding: 16px 32px;
  }
  .card svg {
    display: none;
  }
}
</style>
