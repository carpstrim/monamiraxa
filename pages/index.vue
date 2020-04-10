<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <p><span>トップページ</span>のサンプル文章です</p>

      <div v-for="item in items.items.sty" :key="item.id">
        <ul>
          <li>{{ item.name }}</li>
          <li>{{ item.price }}</li>
          <li>{{ item.description }}</li>
        </ul>
        <br>
      </div>
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
  },
  asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']
    return { items: jsonAll }
  }
}
</script>
