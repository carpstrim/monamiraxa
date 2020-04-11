<template>
  <section>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
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
      <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>
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

          <!-- 商品エリア -->
          <h2>スタイ</h2>
          <div v-for="item in items.items.sty" :key="item.id">
            <ul class="itemList">
              <li>{{ item.name }}</li>
              <li>{{ item.price }}</li>
              <li>{{ item.description }}</li>
            </ul>
            <br>
          </div>

          <v-layout>
            <Item />
            <Item />
            <Item />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Item from '~/components/Item'

export default {
  // Parallax のパディング除去用レイアウト
  layout: 'top',

  components: {
    Item
  },
  asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']
    return { items: jsonAll }
  }
}
</script>

<style scoped lang="scss">
.itemList {
  list-style: none;
  padding-left: 0;
}
</style>
