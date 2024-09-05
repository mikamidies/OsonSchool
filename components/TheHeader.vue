<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <button @click="scrollElement('home')">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </button>
      </div>
      <div class="mid">
        <ul class="links">
          <li>
            <button @click="scrollElement('about')">
              {{ $store.state.translations['main.about'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('teachers')">
              {{ $store.state.translations['main.teachers'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('pricing')">
              {{ $store.state.translations['main.pricing'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('reviews')">
              {{ $store.state.translations['main.reviews'] }}
            </button>
          </li>
          <li>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                  <NuxtLink :to="switchLocalePath('ru')">Russian</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                <div v-if="$i18n.locale === 'en'" class="locale">
                  <img src="@/assets/img/gb.svg" alt="" /> Eng
                </div>
                <div v-if="$i18n.locale === 'ru'" class="locale">
                  <img src="@/assets/img/ru.svg" alt="" /> Ru
                </div>
                <a-icon type="down" />
              </a-button>
            </a-dropdown>
          </li>
        </ul>
      </div>
      <div class="right" @click="scrollElement('contacts')">
        <button>{{ $store.state.translations['main.singup'] }}</button>
      </div>

      <div class="menu">
        <ul class="links">
          <li>
            <button @click="scrollElement('about')">
              {{ $store.state.translations['main.about'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('teachers')">
              {{ $store.state.translations['main.teachers'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('pricing')">
              {{ $store.state.translations['main.pricing'] }}
            </button>
          </li>
          <li>
            <button @click="scrollElement('reviews')">
              {{ $store.state.translations['main.reviews'] }}
            </button>
          </li>
        </ul>
        <div class="lang">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    function scrollHeader() {
      const navbar = document.getElementById('navbar')
      if (this.scrollY >= 50) {
        navbar.classList.add('scroll')
      } else {
        navbar.classList.remove('scroll')
      }
    }
    window.addEventListener('scroll', scrollHeader)
  },

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: 0.4s;
  padding: 46px 0;
}
.wrap.scroll {
  background: var(--black);
  padding: 16px 0;
  border-bottom: 1px solid #a4a4a4;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links {
  display: flex;
  align-items: center;
  gap: 80px;
}
.links button {
  font-size: 20px;
  color: #a4a4a4;
}
.links button.active {
  font-family: var(--bold);
  color: white;
}
.right button {
  border-radius: 51px;
  padding: 20px 56px;
  color: #fff;
  font-family: var(--bold);
  font-size: 20px;
  position: relative;
  z-index: 2;
  background: #0080fe;
}
.right button::after {
  width: 100%;
  height: 100%;
  border-radius: 51px;
  opacity: 0.8;
  background: #0080fe;
  mix-blend-mode: screen;
  filter: blur(12.5px);

  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 1;
}
@media screen and (max-height: 800px) {
  .wrap {
    padding: 32px 0;
  }
}
@media screen and (max-width: 1200px) {
  .right,
  .mid {
    display: none;
  }
  .left img {
    width: 100px;
  }
  .wrap {
    padding: 24px 0;
  }
}
</style>
