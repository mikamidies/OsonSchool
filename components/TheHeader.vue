<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <NuxtLink to="/">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="mid">
        <ul class="links">
          <li>
            <NuxtLink to="/" class="active"> About us </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Teachers </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Pricing </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Reviews </NuxtLink>
          </li>
          <li>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1"> 1st menu item </a-menu-item>
                <a-menu-item key="2"> 2nd menu item </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                <img src="@/assets/img/gb.svg" alt="" /> Eng
                <a-icon type="down" />
              </a-button>
            </a-dropdown>
          </li>
        </ul>
      </div>
      <div class="right">
        <button>Sign up for а lesson</button>
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
.links a {
  font-size: 20px;
  color: #a4a4a4;
}
.links a.active {
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
</style>
