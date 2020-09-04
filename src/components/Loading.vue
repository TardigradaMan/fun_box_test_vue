<template>
  <div class="loading">
    <img class="loading__img" src="@/assets/img/giphy.gif" alt="loading" />
    <h2 class="loading__title">Загружаю, осталось совсем чуть-чуть</h2>
  </div>
</template>
<style lang="scss" scoped>
.loading {
  height: calc(100vh - 103px);
  text-align: center;
  &__img {
    max-width: 200px;
    height: auto;
  }
  &__title {
    color: #fff;
  }
}
</style>
