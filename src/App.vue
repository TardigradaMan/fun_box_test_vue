<template>
  <div class="app">
    <TheHeader />
    <div class="wrapper">
      <AppHome />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import AppHome from './views/Home'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    AppHome,
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'font', sans-serif;
  font-weight: 400;
  font-variation-settings: 'wght' 400;
  font-size: 10px;
}

p {
  font-size: 1.4em;
}

.app {
  background: center / cover url('./assets/img/bg_home.jpg');
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media screen and(max-width: $md) {
    height: 100%;
  }
}

.app__title {
  color: #ffffff;
  font-size: 3.6em;
  margin: 0;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}
.wrapper {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
