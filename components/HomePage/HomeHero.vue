<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <div class="content">
          <h1 class="title">Learn English online - easy and affordable !</h1>
          <h2 class="sub">
            «Oson is where Excellence in Education Meets Personalized Learning
            Journeys»
          </h2>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/img/hero.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
}
.right img {
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
}
.left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  margin-top: -100px;
}
@media screen and (max-height: 800px) {
  .wrap {
    height: 100vh;
  }
}
</style>
