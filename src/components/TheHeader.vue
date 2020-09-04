<template>
  <header class="header">
    <h1 class="header__title">Ты сегодня покормил кота?</h1>
    <span @click="openCart"><i class="fa fa-shopping-cart"></i></span>
    <ProductsCart v-if="cart" />
  </header>
</template>
<script>
import ProductsCart from './ProductsCart'
export default {
  components: {
    ProductsCart
  },
  data() {
    return {
      cart: false
    }
  },
  methods: {
    openCart() {
      this.cart = !this.cart
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  // width: 100vw;
  &__title {
    color: #ffffff;
    font-size: 3.6em;
    margin: 0;
    text-align: center;
    padding: 30px 0;
    font-weight: 100;
    font-variation-settings: 'wght' 100;
    @media screen and(max-width: $sm) {
      padding: 20px 45px;
    }
  }
  & > span {
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 50px;
    color: #ffffff;
    font-size: 3em;
    cursor: pointer;
    @media screen and(max-width: $sm) {
      top: 30px;
      right: 20px;
    }
  }
}
</style>
