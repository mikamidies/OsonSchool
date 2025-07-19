<template>
  <div class="wrap">
    <img
      src="@/assets/img/planet.png"
      alt=""
      class="planet"
      data-aos="fade-up"
      data-aos-duration="1200"
    />

    <div class="socials">
      <a
        :href="$store.state.translations['links.telegram']"
        target="_blank"
        class="soc"
      >
        <img src="@/assets/img/logo/soc-1.png" alt="" />
      </a>
      <a
        :href="$store.state.translations['links.youtube']"
        target="_blank"
        class="soc"
      >
        <img src="@/assets/img/logo/soc-2.png" alt="" />
      </a>
      <a
        :href="$store.state.translations['links.instagram']"
        target="_blank"
        class="soc"
      >
        <img src="@/assets/img/logo/soc-3.png" alt="" />
      </a>

      <a
        :href="$store.state.translations['links.linkedin']"
        target="_blank"
        class="soc"
      >
        <img src="@/assets/img/logo/soc-4.png" alt="" />
      </a>
    </div>

    <div class="foot">
      <div class="container">
        <div class="left">
          <a :href="`mailto:${$store.state.translations['main.about']}`">
            {{ $store.state.translations['main.email'] }}
          </a>
        </div>

        <div class="mid">
          <img width="132" src="@/assets/img/logo/brand.png" alt="" />
        </div>

        <div class="right">
          <a :href="`tel:$store.state.translations['main.about']`">
            {{ $store.state.translations['main.numero'] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
  padding-top: 300px;
  position: relative;
  overflow: hidden;
}
.planet {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 1;
}
.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: relative;
  z-index: 2;
}
.left a,
.right a {
  color: #fff;
  text-align: center;
  font-family: var(--bold);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.foot {
  position: relative;
  z-index: 2;
  padding: 64px 0;
}
.foot .container {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  z-index: 4;
}
.mid {
  display: flex;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: right;
}
.foot::after {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
@media screen and (max-width: 1024px) {
  .foot .container {
    display: flex;
    gap: 24px;
    flex-direction: column;
  }
  .planet {
    height: 50%;
  }
  .soc img {
    width: 64px;
  }
  .planet {
    height: 30%;
  }
  .wrap {
    padding-top: 64px;
  }
  .mid img {
    width: 100px;
  }
  .left a,
  .right a {
    font-size: 20px;
    font-weight: 500;
  }
}
</style>
