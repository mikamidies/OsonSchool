<template>
  <div class="wrap">
    <div class="container">
      <div class="head">
        <img src="@/assets/img/head.png" alt="" />
      </div>

      <div class="card">
        <img src="@/assets/img/rect.png" alt="" class="cover" />

        <h4 class="par">Sign up for a trial lesson</h4>

        <form>
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="phone number" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div class="tail">
        <img src="@/assets/img/tail.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.card {
  position: relative;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  padding: 16px 72px 36px 72px;
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
form {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.par {
  position: relative;
  z-index: 10;
  color: #fff;
  text-align: center;
  font-family: var(--bold);
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 28px;
}
input {
  border-radius: 28px;
  border: 0;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #d9d9d9;
  padding: 12px;
}
input::placeholder {
  color: #8d8d8d;
}
button {
  border-radius: 28px;
  border: 0;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--sky);
  color: white;
  padding: 12px;
}
</style>
