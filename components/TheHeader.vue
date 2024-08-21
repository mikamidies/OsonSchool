<template>
  <div class="wrap">
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
export default {}
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 0;
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
