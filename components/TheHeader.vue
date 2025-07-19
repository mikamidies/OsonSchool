<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <button @click="scrollElement('home')">
          <img width="100" src="@/assets/img/logo/brand.png" alt="" />
        </button>
      </div>
      <div class="mid">
        <ul class="links">
          <li>
            <button @click="scrollElement('about')">
              {{ $store.state.translations['main.about'] }}
            </button>
          </li>
          <!-- <li>
            <button @click="scrollElement('teachers')">
              {{ $store.state.translations['main.teachers'] }}
            </button>
          </li> -->
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
          <!-- <li class="onatili">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                <div v-if="$i18n.locale === 'en'" class="locale">
                  <img src="@/assets/img/gb.svg" alt="" /> Eng
                </div>
                <a-icon type="down" />
              </a-button>
            </a-dropdown>
          </li> -->
        </ul>
      </div>
      <div class="right">
        <button @click="scrollElement('contacts')">
          {{ $store.state.translations['main.singup'] }}
        </button>
      </div>

      <div
        class="burger"
        @click="menuHandle = !menuHandle"
        :class="{ x: menuHandle }"
      >
        <div class="stick"></div>
      </div>

      <div class="menu" :class="{ show: menuHandle == true }">
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
          <NuxtLink
            :to="switchLocalePath('en')"
            @click="scrollElement('home')"
            :class="{ active: $i18n.locale === 'en' }"
            class="language"
          >
            <img src="@/assets/img/gb.svg" alt="" /> Eng
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('ru')"
            @click="scrollElement('home')"
            :class="{ active: $i18n.locale === 'ru' }"
            class="language"
          >
            <img src="@/assets/img/ru.svg" alt="" /> Ru
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('uz')"
            @click="scrollElement('home')"
            :class="{ active: $i18n.locale === 'uz' }"
            class="language"
          >
            <img src="@/assets/img/uz.svg" alt="" /> Uzb
          </NuxtLink>
        </div>
        <div class="right">
          <button @click="scrollElement('contacts')">
            {{ $store.state.translations['main.singup'] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuHandle: false,
    }
  },

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

      this.menuHandle = false
    },
  },
}
</script>

<style scoped>
.onatili {
  padding: 32px;
  cursor: pointer !important;
  margin-inline: -32px;
}
.onatili button {
  cursor: pointer !important;
}
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
  gap: 40px;
}
.links button {
  font-size: 20px;
  color: #a4a4a4;
  transition: 0.4s;
  padding: 20px;
}
.links button:hover {
  font-weight: 700;
  color: white;
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
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 1;
  transition: 0.4s;
}
.right:hover button:after {
  opacity: 1;
}
.menu,
.burger {
  display: none;
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
    width: 72px;
  }
  .wrap {
    padding: 24px 0;
  }
  .burger {
    display: flex;
  }
  .stick {
    width: 30px;
    height: 2px;
    background: white;
    position: relative;
    transition: 0.3s;
  }
  .stick::before {
    width: 30px;
    height: 2px;
    background: white;
    position: absolute;
    top: 10px;
    left: 0;
    content: '';
    transition: 0.3s;
  }
  .stick::after {
    width: 30px;
    height: 2px;
    background: white;
    position: absolute;
    top: -10px;
    left: 0;
    content: '';
    transition: 0.3s;
  }
  .x .stick {
    transform: rotate(45deg);
  }
  .x .stick::after {
    transform: rotate(90deg);
    top: 0;
  }
  .x .stick::before {
    opacity: 0;
  }
  .menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    z-index: 1;
    align-items: center;
    justify-content: center;
    gap: 48px;
    transform: translateX(-100%);
    transition: 0.4s;
  }
  .menu.show {
    transform: translateX(0);
  }
  .left,
  .burger {
    position: relative;
    z-index: 2;
  }
  .menu .links {
    flex-direction: column;
    gap: 32px;
  }
  .menu .right {
    display: flex !important;
  }
  .menu .right button {
    font-size: 18px;
    max-width: 288px;
  }
  .menu .links button {
    color: white;
    font-size: 26px;
  }
  .menu .lang {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .menu .language {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 0.5;
  }
  .menu .language.active {
    opacity: 1;
  }
  .menu .language img {
    width: 32px;
    height: 24px;
    object-fit: cover;
  }
}
</style>
