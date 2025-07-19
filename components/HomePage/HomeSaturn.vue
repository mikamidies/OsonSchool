<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="anchor" id="about"></div>
      <div class="container">
        <div class="card">
          <img src="@/assets/img/rect.png" alt="" class="cover" />
          <p class="text">
            {{ $store.state.translations['main.saturn'] }}
          </p>
          <!-- <img src="@/assets/img/saturn.png" alt="" class="img" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  padding: 40px 0 120px 0;
  overflow: hidden;
}
.card {
  position: relative;
  display: flex;
  padding: 40px 72px 80px 72px;
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
  animation: levitate 5s ease-out 1s infinite;
}
@keyframes levitate {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(5%, 5%) rotate(25deg);
  }
  100% {
    transform: translate(0, 0);
  }
}
@media screen and (max-width: 1024px) {
  .wrapper {
    padding-bottom: 0;
  }
  .wrap {
    padding: 32px 0 40px 0;
    overflow: hidden;
  }
  .text {
    font-size: 18px;
    max-width: 100%;
  }
  .card {
    padding: 24px;
    padding-bottom: 40px;
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
    right: 00px;
    top: 90%;
    width: 200px;
  }
  .wrapper {
    padding-top: 0;
    margin-top: -80px;
  }
}
</style>
