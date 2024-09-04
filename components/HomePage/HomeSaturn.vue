<template>
  <div class="wrap">
    <div class="anchor" id="about"></div>
    <div class="container">
      <div class="card">
        <img src="@/assets/img/rect.png" alt="" class="cover" />
        <p class="text">
          {{ $store.state.translations['main.saturn'] }}
        </p>
        <img src="@/assets/img/saturn.png" alt="" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
  position: relative;
  height: 388px;
  display: flex;
  padding: 40px 72px;
}
.card::before {
  width: 100%;
  height: 100%;
  border-radius: 60px;
  background: white;
  content: '';
  position: absolute;
  top: 14px;
  left: -14px;
}
.card::after {
  width: 100%;
  height: 100%;
  border-radius: 57px;
  background: transparent;
  content: '';
  position: absolute;
  top: -16px;
  left: 16px;
  border: 3px dashed white;
  z-index: 2;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 60px;
  z-index: 1;
}
.text {
  position: relative;
  z-index: 2;
  color: #fff;
  font-family: var(--decor);
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 85%;
}
.img {
  z-index: 3;
  position: absolute;
  right: 0;
  top: 40%;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
    overflow: hidden;
  }
  .text {
    font-size: 24px;
    max-width: 100%;
  }
  .card {
    height: 288px;
    padding: 24px 32px;
  }
  .cover {
    border-radius: 32px;
  }
  .card::after,
  .card::before {
    border-radius: 32px;
  }
  .card::before {
    top: 8px;
    left: -8px;
  }
  .card::after {
    top: -8px;
    left: 8px;
  }
  .img {
    right: -50px;
    top: 160px;
    width: 200px;
  }
}
</style>
