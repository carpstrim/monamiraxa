<template>
  <section>
    <v-parallax src="img/dummy_mainvisual.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            mon ami raxa
          </h1>
        </v-col>
      </v-row>
    </v-parallax>

    <v-container v-if="jsonAll.message.length > 0 ">
      <v-card class="message" color="grey lighten-5" elevation="0">
        <dl>
          <dt>お店からのメッセージ</dt>
          <dd>
            <ul>
              <li v-for="message in limitMessage" :key="message.id">
                {{ message }}
              </li>
            </ul>
          </dd>
        </dl>
      </v-card>
    </v-container>

    <v-container color="yellow lighten-5">
      <!-- 商品エリア -->
      <h2>スタイ</h2>
      <h3>もくもく</h3>

      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in styMokumoku"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=sty&subcategory=mokumoku&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3>たまご</h3>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in styTamago"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=sty&subcategory=tamago&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3>ドーナツ</h3>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in styDonut"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=sty&subcategory=donut&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3>その他</h3>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in styOther"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=sty&subcategory=other&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>よだれカバー</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.droolcover"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=droolcover&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>ガーゼハンカチ</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.gauzehandkerchief"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=gauzehandkerchief&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>にぎにぎ</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.niginigi"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=niginigi&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>おなまえタグ</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.nametag"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=nametag&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>その他</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.other"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=other&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2>ラッピング</h2>
      <v-container class="pa-0">
        <v-row tag="ul" class="itemList" dense>
          <v-col
            v-for="item in jsonAll.wrapping"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link :to="{ path: '/product/?category=wrapping&id=' + item.id }">
              <Item :stock="item.stock">
                <template #imgPath>
                  <img src="~/assets/img/dummy_square.jpg" alt>
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>
</template>

<script>
import Item from '~/components/molecules/Item'
import client from '~/plugins/contentful'

export default {
  components: {
    Item
  },
  async asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']
    const sty = jsonAll.sty
    const styMokumoku = sty.filter(e => e.typeDetail === 'mokumoku')
    const styTamago = sty.filter(e => e.typeDetail === 'tamago')
    const styDonut = sty.filter(e => e.typeDetail === 'donut')
    const styOther = sty.filter(e => e.typeDetail === 'other')

    const products = await client
      .getEntries({
        content_type: 'products'
      })
      .then((e) => {
        return e.items.map((item) => {
          return item.fields
        })
      })

    return {
      jsonAll,
      products,
      styMokumoku,
      styTamago,
      styDonut,
      styOther
    }
  },

  computed: {
    limitMessage () {
      return this.jsonAll.message.slice(0, 3)
    }
  },
  mounted () {
    console.log({ products: this.products })
    console.log({ jsonAll: this.jsonAll })
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
  padding-left: 0;
}
</style>
