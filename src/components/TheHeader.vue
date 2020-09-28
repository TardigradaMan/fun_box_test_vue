<template>
  <header class="header">
    <h1 class="header__title">Ты сегодня покормил кота?</h1>
    <span class="header__cart" @click="openCart">
      <i class="fa fa-shopping-cart"></i>
    </span>
    <span class="header__orders">{{ selectedProduct.length }}</span>
    <ProductsCart :selectedProduct="selectedProduct" v-if="cart" />
  </header>
</template>
<script>
import ProductsCart from './ProductsCart'
import { mapGetters } from 'vuex'
export default {
  components: {
    ProductsCart
  },
  data() {
    return {
      cart: false
    }
  },
  computed: {
    ...mapGetters(['selectedProduct'])
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
  &__cart {
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
  &__orders {
    display: flex;
    // flex-direction: column;
    // align-items: center;
    justify-content: center;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 15px;
    height: 15px;

    background: #eee;
    color: $blue;
    font-size: 1.4em;
    font-weight: 700;
    line-height: 1em;
    border-radius: 50%;
    border: 2px solid $blue;
    @media screen and(max-width: $sm) {
      top: 30px;
      right: 10px;
    }
  }
}
</style>
