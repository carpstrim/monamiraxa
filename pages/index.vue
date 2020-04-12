<template>
  <section>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            Vuetify.js
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container>
      <!-- お店からのメッセージ -->
      <v-card>
        <dl>
          <dt>お店からのメッセージ</dt>
          <dd>
            <ul>
              <li>お店からのメッセージエリア</li>
              <li>お店からのメッセージエリア</li>
              <li>お店からのメッセージエリア</li>
            </ul>
          </dd>
        </dl>
      </v-card>
    </v-container>

    <v-container>
      <!-- 商品エリア -->
      <h2>スタイ</h2>
      <ul class="itemList d-flex justify-space-between flex-wrap">
        <v-layout column justify-center align-center>
          <v-flex xs6 sm8 md6>
            <li v-for="item in jsonAll.items.sty" :key="item.id">
              <Item>
                <template v-slot:imgPath>
                  <img src="~/assets/img/dummy_square.png" alt>
                </template>
                <template v-slot:name>
                  <p>{{ item.name }}</p>
                </template>
                <template v-slot:price>
                  <p>{{ item.price }} 円</p>
                </template>
              </Item>
            </li>
          </v-flex>
        </v-layout>
      </ul>
      <br>
    </v-container>
  </section>
</template>

<script>
import Item from '~/components/Item'
// import Slot from '~/components/Slot'

export default {
  // Parallax のパディング除去用レイアウト
  layout: 'top',

  components: {
    Item
    // Slot
  },
  asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']
    return { jsonAll }
  }
}
</script>

<style scoped lang="scss">
.itemList {
  list-style: none;
  padding-left: 0;
}
</style>
