<template>
  <section>
    <div class="d-flex justify-center">
      <v-img :src="banner" max-width="650px" />
    </div>

    <v-container v-if="message.length > 0 ">
      <v-card class="message" color="grey lighten-5" elevation="0">
        <dl>
          <dt>お店からのメッセージ</dt>
          <dd>
            <ul>
              <li
                v-for="(message,n) in limitMessage"
                :key="'message_' + n"
              >
                {{ message.date }}：{{ message.text }}
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
                  <img :src="item.images[0].fields.file.url" alt>
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
                  <img :src="item.images[0].fields.file.url" alt>
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
                  <img :src="item.images[0].fields.file.url" alt>
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in droolcover"
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in gauzehandkerchief"
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in niginigi"
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in nametag"
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in other"
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
                  <img :src="item.images[0].fields.file.url" alt>
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
            v-for="item in wrapping"
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
                  <img :src="item.images[0].fields.file.url" alt>
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

import banner from '~/assets/img/home.png'

export default {
  components: {
    Item
  },
  async asyncData ({ store }) {
    const products = await client
      .getEntries({
        content_type: 'products'
      })
      .then((e) => {
        return e.items.map((item) => {
          return item.fields
        })
      })

    const sty = products.filter(e => e.productType.fields.slug === 'sty')
    const styMokumoku = sty.filter(
      e => e.typeDetail.fields.slug === 'mokumoku'
    )
    const styTamago = sty.filter(e => e.typeDetail.fields.slug === 'tamago')
    const styDonut = sty.filter(e => e.typeDetail.fields.slug === 'donut')
    const styOther = sty.filter(e => e.typeDetail.fields.slug === 'other')

    const droolcover = products.filter(
      e => e.productType.fields.slug === 'droolcover'
    )
    const gauzehandkerchief = products.filter(
      e => e.productType.fields.slug === 'gauzehandkerchief'
    )
    const niginigi = products.filter(
      e => e.productType.fields.slug === 'niginigi'
    )
    const nametag = products.filter(
      e => e.productType.fields.slug === 'nametag'
    )
    const other = products.filter(e => e.productType.fields.slug === 'other')
    const wrapping = products.filter(
      e => e.productType.fields.slug === 'wrapping'
    )

    const message = await client
      .getEntries({
        content_type: 'news'
      })
      .then((e) => {
        return e.items.map((item) => {
          return item.fields
        })
      })

    return {
      styMokumoku,
      styTamago,
      styDonut,
      styOther,
      droolcover,
      gauzehandkerchief,
      niginigi,
      nametag,
      other,
      wrapping,
      message
    }
  },
  data () {
    return { banner }
  },
  computed: {
    limitMessage () {
      return this.message.slice(0, 3)
    }
  },
  mounted () {
    console.log({ styMokumoku: this.styMokumoku })
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
