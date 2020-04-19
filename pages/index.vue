<template>
  <section>
    <v-parallax src="img/dummy_mainvisual.jpg">
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
      <v-card class="message">
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

      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.items.sty"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
          >
            <Item class="itemList">
              <template v-slot:imgPath>
                <img src="~/assets/img/dummy_square.jpg" alt>
              </template>
              <template v-slot:name>
                {{ item.name }}
              </template>
              <template v-slot:price>
                {{ item.price }} 円
              </template>
            </Item>
          </v-col>
        </v-row>
      </v-container>
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
.message {
  padding: 12px 16px;
  color: $color-default;
}

.itemList {
  list-style: none;
  width: 100%;
  padding-left: 4px;
}
</style>
