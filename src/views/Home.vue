<template>
  <div class="home">
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
export default {
  components: {
    ProductsList
  }
}
</script>

<style lang="scss" scoped>
.cards__wrapper {
  height: 100vh;
  display: grid;
  grid-template: 1fr / repeat(3, auto);
  justify-content: space-between;
  align-items: center;
  @media screen and(max-width: $md) {
    grid-template: 1fr 1fr / 1fr 1fr;
    justify-content: space-around;
    gap: 50px;
    .card:first-child {
      grid-column: 1 / 3;
    }
  }
  @media screen and(max-width: $xs) {
    grid-template: 1fr / 1fr;
  }
}
</style>
