<template>
  <ul class="item" :class="{ sold: is_sold }">
    <li><slot name="imgPath" /></li>
    <li><slot name="name" /></li>
    <li><slot name="price" /></li>
  </ul>
</template>

<script>
export default {
  props: {
    stock: {
      type: Number,
      default: 0
    }
  },
  computed: {
    is_sold () {
      return this.stock === 0
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  $radius: 10px;

  list-style: none;
  margin-bottom: 10px;
  padding-left: 0;
  width: 100%;
  border-radius: $radius;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: $radius;
  }
}

.sold {
  position: relative;

  &::before {
    content: 'sold';
    display: block;
    position: absolute;
    top: -40px;
    left: -44px;
    padding-top: 55px;
    width: 80px;
    height: 80px;
    background-color: $color-warning;
    color: white;
    text-align: center;
    transform: rotate(-45deg);
  }
}
</style>
