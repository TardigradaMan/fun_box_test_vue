<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div class="cart__empty" v-if="selectedProduct.length === 0">Пустенько</div>
    <div v-else>
      <ProductsCartItem
        :item="item"
        :key="item._id"
        v-for="(item, index) in selectedProduct"
        @plus-qty="incQty(index)"
        @minus-qty="decQty(index)"
        @delete-item="deleteFromCart(item._id, index)"
      />
      <button @click="addToOrders" class="cart__button">Заказать</button>
    </div>
  </div>
</template>

<script>
import ProductsCartItem from './ProductsCartItem'
export default {
  components: {
    ProductsCartItem
  },
  props: {
    selectedProduct: {
      type: Array
    }
  },
  methods: {
    incQty(index) {
      const inc = true
      const dec = false

      this.$store.dispatch('changeQtyProduct', { index, inc, dec })
    },
    decQty(index) {
      const inc = false
      let dec = true
      this.$store.dispatch('changeQtyProduct', { index, inc, dec })
    },
    addToOrders() {
      this.$store.dispatch('addNewOrder')
    },

    deleteFromCart(id, index) {
      this.$store.dispatch('deleteFromCart', { id, index })
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  position: absolute;
  background: rgb(39, 39, 39);
  color: #fff;
  width: 400px;
  text-align: center;
  right: 20px;
  top: 80px;
  z-index: 100;
  padding: 15px;
  border-radius: 10px;
  &__empty {
    font-size: 1.6em;
  }
  &__button {
    margin-top: 20px;
    background: $blue;
    outline: none;
    border: none;
    padding: 0.5em 2em;
    border-radius: 10px;
    font-size: 1.4em;
    font-weight: 600;
    color: #eee;
    text-transform: uppercase;
    &:hover,
    :focus {
      cursor: pointer;
      background: $blue-hover;
    }
    &:active {
      background: rgb(2, 87, 247);
    }
  }
  & h2 {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }
}
</style>
