<template>
  <div class="card__wrapper">
    <div
      :class="{
        card__selected: card.selected,
        card__disabled: card.quantity == 0
      }"
      class="card"
      @click="selectedCard(card)"
      @mouseleave="hoverOnCard(card)"
      @mouseenter="enterOfCard(card)"
    >
      <!--   @mouseleave="hoverOnCard"
      @mouseenter="enterOfCard" -->
      <!--     @mouseenter="$emit('enter-card', card._id)"
      @mouseleave="$emit('leave-card', card._id)" -->
      <p v-if="!card.outHover" class="card__subtitle">
        {{ card.description }}
      </p>
      <p v-if="card.outHover" class="card__subtitle card__subtitle--off">
        {{ card.descriptionOver }}
      </p>
      <h2 class="card__title">Нямушка</h2>
      <p class="card__title-small">с {{ card.title }}</p>
      <p class="card__description">
        {{ card.portion }} порций <br />
        <span v-if="card.volume >= 5">
          5 мышей в подарок<br />заказчик доволен</span
        >
        <span v-if="0.5 < card.volume && card.volume < 5">
          2 мыши в подарок</span
        ><br />
      </p>
      <img
        class="card__img"
        src="../assets/img/cat.png"
        :alt="`нямушка с ${card.title}`"
      />

      <div class="card__size">
        <span>{{ card.volume }}</span>
        <span>кг</span>
      </div>
    </div>
    <div class="card__buy">
      <div v-if="!card.selected && card.quantity > 0">
        Чего сидишь? Порадуй котэ
        <span @click="selectedCard(card)" class="card__link">купи</span>
      </div>
      <div v-if="card.selected && card.quantity > 0">
        {{ card.footerText }}
      </div>
      <div v-if="card.quantity == 0">
        Печалька c <span>{{ card.title }}</span> закончился
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  props: {
    card: Object
  },

  // data() {
  //   return {
  //     selected: false,
  //     outHover: false
  //   }
  // },
  // computed: {
  //   ...mapGetters(['selectedProduct'])
  // },
  methods: {
    selectedCard(card) {
      if (+card.quantity === 0) {
        return
      }
      this.$set(card, 'selected', true)
      this.$set(card, 'outHover', false)
      this.$emit('selected-card', card)
    },
    hoverOnCard(card) {
      if (card.selected && !card.outHover) {
        card.outHover = !card.outHover
      }
    },
    enterOfCard(card) {
      if (card.selected && card.outHover) {
        card.outHover = !card.outHover
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  padding-left: 50px;
  width: 320px;
  height: 480px;
  position: relative;
  border-style: solid;
  border-width: 4px;
  border-color: $blue;
  cursor: pointer;
  border-radius: 10px;
  background: #f2f2f2;

  overflow: hidden;
  clip-path: polygon(43px 0%, 100% 0, 100% 100%, 0 100%, 0% 43px);

  transition: all 0.1s ease;

  &::before {
    content: '';
    border-style: solid;
    border-width: 50px 50px 50px 50px;
    border-color: $blue transparent transparent $blue;

    position: absolute;
    top: 0px;
    left: -60px;
    z-index: 10;
    transition: all 0.1s ease;
  }

  &:hover {
    border-color: $blue-hover;
    transition: all 0.1s ease;
    &.card::before {
      border-color: $blue-hover transparent transparent $blue-hover;
      transition: all 0.1s ease;
    }
    & .card__size {
      background-color: $blue-hover;
      transition: all 0.1s ease;
    }
    & + .card__buy .card__link {
      color: $blue-hover;
      border-bottom: 1px dashed $blue-hover;
    }
  }

  &__wrapper {
    position: relative;
    @media screen and(max-width: $md) {
      &:nth-child(1) {
        grid-column: 1/3;
        justify-self: center;
      }
    }
    @media screen and(max-width: $sm) {
      &:nth-child(1) {
        grid-column: 1/2;
        justify-self: center;
      }
    }
  }
  &__subtitle {
    font-size: 1.6em;
    color: #666666;
    padding: 20px 0 0px;
    margin: 0;
    &--off {
      color: $red;
    }
  }
  &__title {
    font-size: 4.8em;
    font-weight: 700;
    color: #000;
    margin: 0;
    &-small {
      font-size: 2.4em;
      color: #000;
      margin: 0;
      font-weight: 700;
    }
  }
  &__description {
    margin: 0;
    padding-top: 10px;
  }
  &__img {
    width: 400px;
    bottom: -100px;
    left: -30px;

    position: absolute;
    z-index: 1;
  }
  &__size {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: $blue;

    z-index: 2;

    position: absolute;
    bottom: 15px;
    right: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all 0.1s ease;

    & > span {
      display: block;
      color: #fff;
      font-size: 4.2em;
      line-height: 42px;
      &:last-child {
        font-size: 2.1em;
        line-height: 21px;
      }
    }
  }
  &__buy {
    color: #fff;
    font-size: 1.3em;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 10;

    text-shadow: 1px 1px 2px#000;
  }
  &__link {
    color: $blue;
    margin-left: 3px;
    display: inline-block;
    border-bottom: 1px dashed $blue;
    cursor: pointer;
  }

  &__selected {
    border-color: $red;
    &::before {
      border-color: $red transparent transparent $red;
    }
    & .card__size {
      background-color: $red;
    }
    &:hover {
      border-color: $red-hover;
      transition: all 0.1s ease;
      &.card::before {
        border-color: $red-hover transparent transparent $red-hover;
        transition: all 0.1s ease;
      }
      & .card__size {
        background-color: $red-hover;
        transition: all 0.1s ease;
      }
    }
  }
  &__disabled {
    border-color: $disabled;
    & + .card__buy {
      color: #ffff66;
    }

    & .card__size {
      background-color: #333333;
    }
    &::before {
      border-color: #000 transparent transparent $blue-hover;
    }
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.7;
      z-index: 100;
    }
    &:hover {
      border-color: $disabled;
      & .card__size {
        background-color: #333333;
      }
      &.card::before {
        border-color: #000 transparent transparent $blue-hover;
      }
    }
  }
  @media screen and(max-width: $md) {
    &:first-child {
      grid-column: 1/3;
    }
  }
}
</style>
