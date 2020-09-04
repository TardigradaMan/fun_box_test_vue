<template>
  <div>
    <AppLoading v-if="loading" />
    <AppError v-if="error" />
    <div v-if="!loading" class="products">
      <div class="products__list">
        <ProductsCard
          v-bind="$attrs"
          @selected-card="selectedCard"
          :selected="selected"
          :outHover="outHover"
          :card="card"
          v-for="card in listCatFood"
          :key="card._id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCard from './ProductsCard'
import AppError from './Error'
import AppLoading from './Loading'
import { mapState } from 'vuex'
export default {
  components: {
    ProductsCard,
    AppError,
    AppLoading
  },
  data() {
    return {
      selected: false,
      outHover: false
    }
  },
  computed: {
    ...mapState({
      listCatFood: state => state.listCatFood,
      loading: state => state.loading,
      error: state => state.error
    })
  },

  mounted() {
    this.fetchListFood()
  },

  methods: {
    async fetchListFood() {
      try {
        await this.$store.dispatch('getlistCatFood')
        // this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
    selectedCard(product) {
      if (product.quantity == 0) {
        return
      } else {
        const newSelectedProduct = {
          title: product.title,
          _id: product._id,
          volume: product.volume
        }

        this.$store.commit('SELECT_PRODUCT', newSelectedProduct)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  &__preview {
    color: #fff;
  }
  &__list {
    // height: 100%;
    display: grid;
    grid-template: 1fr / repeat(3, 320px);
    justify-content: space-between;
    gap: 60px;
    @media screen and(max-width: $lg) {
      gap: 25px;
    }
    @media screen and(max-width: $md) {
      grid-template: 1fr / 1fr 1fr;
      justify-content: space-around;
      gap: 50px;
      row-gap: 80px;
    }
    @media screen and(max-width: $sm) {
      grid-template: auto / auto;
    }
  }
}
</style>
