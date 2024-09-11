<template>
  <div class="dark">
    <transition name="home">
      <div v-if="loading" class="loading">
        <img class="pic" src="@/assets/img/logo/starboy.svg" alt="" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  name: 'loadingVue',

  transition: 'home',

  // watch: {
  //   async $route() {
  //     this.loading = await true
  //     setTimeout(() => {
  //       this.loading = false
  //     }, 1500)
  //   },
  // },

  async mounted() {
    this.loading = await true
    setTimeout(() => {
      this.loading = false
    }, 1500)
  },

  methods: {
    start() {
      this.loading = true
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100vh'
    },
    finish() {
      this.loading = false
      document.body.style.overflowY = 'auto'
      document.body.style.height = 'auto'
    },
  },
}
</script>

<style scoped>
.dark {
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  background: var(--black);
}
.pic {
  width: 64px;
  animation: 2.5s rotate infinite;
  animation-timing-function: linear;
  transform-origin: center center;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
