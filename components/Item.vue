<template>
  <ul class="item">
    <li><slot name="imgPath" /></li>
    <li><slot name="name" /></li>
    <li><slot name="price" /></li>
  </ul>
</template>

<style scoped lang="scss">
img {
  width: 100%;
}

.item {
  list-style: none;
  padding-left: 0;
}
</style>
