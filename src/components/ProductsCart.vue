<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div v-if="selectedProduct.length === 0">Пустенько</div>
    <div>
      <ProductsCartItem
        :item="item"
        :key="item._id"
        v-for="item in selectedProduct"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsCartItem from './ProductsCartItem'
export default {
  components: {
    ProductsCartItem
  },
  data() {
    return {
      counter: 1
    }
  },
  computed: {
    ...mapGetters(['selectedProduct'])
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
  & h2 {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
  }
}
</style>
