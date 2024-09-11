<template>
  <div class="wrap">
    <div class="anchor upper" id="contacts"></div>
    <div class="container" id="form">
      <div class="head" data-aos="fade-up" data-aos-duration="1200">
        <img src="@/assets/img/head.png" alt="" />
      </div>

      <div class="card" data-aos="fade-up" data-aos-duration="900">
        <img src="@/assets/img/rect.png" alt="" class="cover" />

        <h4 class="par">{{ $store.state.translations['main.singtrial'] }}</h4>

        <form @submit.prevent="onSubmit">
          <input
            type="text"
            :placeholder="$store.state.translations['main.yourname']"
            v-model="name"
            required
          />
          <input
            type="number"
            :placeholder="$store.state.translations['main.yournumber']"
            v-model="phone"
            required
          />
          <button type="submit">
            {{ $store.state.translations['main.submit'] }}
          </button>
        </form>
      </div>

      <div class="tail" data-aos="fade-up" data-aos-duration="700">
        <img src="@/assets/img/tail.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import formApi from '@/api/form.js'

export default {
  data() {
    return {
      name: '',
      phone: '',
    }
  },

  methods: {
    async onSubmit() {
      const formData = {
        name: this.name,
        phone: this.phone,
      }

      const res = await formApi.sendForm(formData)

      if (res && res.status === 201) {
        this.$notification['success']({
          message: 'Succesfully sent!',
        })
      } else {
        this.$notification['error']({
          message: 'Error!',
        })
      }

      this.name = ''
      this.phone = ''
    },
  },
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 100px auto 0 auto;
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
  color: black;
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
@media screen and (max-width: 1024px) {
  .head,
  .tail {
    display: flex;
    justify-content: center;
  }
  .head img,
  .tail img {
    width: 50%;
  }
  .card {
    padding: 24px 32px;
    height: 280px;
    min-height: 280px;
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
  .par {
    font-size: 20px;
    margin-bottom: 16px;
  }
  input,
  button {
    font-size: 16px;
    padding: 12px;
    border-radius: 16px;
  }
  form {
    gap: 12px;
  }
  .container {
    margin: 0;
  }
}
</style>
