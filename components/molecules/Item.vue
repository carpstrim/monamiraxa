<template>
  <ul class="item" :class="{ sold: is_sold }">
    <li>
      <slot name="imgPath" />
    </li>
    <li>
      <slot name="name" />
    </li>
    <li>
      <slot name="price" />
    </li>
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
  position: relative;
  list-style: none;
  margin-bottom: 10px;
  padding-left: 0;
  width: 100%;
  //-radius: $border-radius;
  overflow: hidden;
  color: $color-default;
  text-decoration: none;
  transition: 0.2s;

  img {
    width: 100%;
    //border-radius: $border-radius;
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>
