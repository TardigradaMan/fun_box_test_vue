<template>
  <div class="error">
    <img class="error__img" src="@/assets/img/tenor.gif" alt="error" />
    <h2 class="error__title">
      Произошла ошибка, попробойте обновить страницу
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.error {
  text-align: center;
  height: calc(100vh - 103px);
  &__img {
    max-width: 400px;
    height: auto;
  }
  &__title {
    color: #fff;
  }
}
</style>
