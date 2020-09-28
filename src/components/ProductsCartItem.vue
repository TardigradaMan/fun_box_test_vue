<template>
  <div class="cart__item">
    <span class="cart__title">Нямушка с {{ item.title }}</span>
    <span class="cart__title"
      >Целых <b>{{ item.volume * item.qty }}</b> кг</span
    >
    <div class="cart__counter">
      <span @click="minusValue" class="cart__minus"
        ><i class="fa fa-minus-circle"></i
      ></span>
      <span class="cart__value">{{ item.qty }}</span>
      <span @click="plusValue" class="cart__plus"
        ><i class="fa fa-plus-circle"></i
      ></span>
    </div>
    <span @click="deleteItem" class="cart__delete"
      ><i class="fa fa-trash"></i
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },

  methods: {
    minusValue() {
      this.$emit('minus-qty')
    },
    plusValue() {
      this.$emit('plus-qty')
    },
    deleteItem() {
      this.$emit('delete-item')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &__item {
    background: #f2f2f2;
    border-radius: 10px;
    width: 95%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: rgb(56, 56, 56);
    align-items: center;

    margin-top: 10px;
  }
  &__title {
    font-size: 1.6em;
    font-weight: 700;
    & b {
      display: inline-block;
      width: 40px;
      font-size: 1.4em;
      color: $blue;
    }
  }
  &__counter {
    font-size: 1.6em;
  }
  &__minus,
  &__plus {
    cursor: pointer;
    color: $blue;
  }
  &__value {
    margin: 0 5px;
    user-select: none;
    font-weight: 500;
    font-variation-settings: 'wght' 500;
  }
  &__delete {
    cursor: pointer;
    color: $red;
    font-size: 1.6em;
  }
}
</style>
