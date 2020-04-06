<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <p><span>トップページ</span>のサンプル文章です</p>
      <Carousel />

      <v-layout class="u-mt-10">
        <Item />
        <Item />
        <Item />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style scoped lang="scss">
.u-mt-10 {
  margin-top: 10px;
}
</style>

<script>
import Carousel from '~/components/Carousel'
import Item from '~/components/Item'

export default {
  components: {
    Carousel,
    Item
  }
}
</script>
