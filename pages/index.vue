<template>
  <section>
    <v-container>
      <v-container
        :class="
          $vuetify.breakpoint.smAndDown
            ? 'd-flex justify-center pa-0'
            : 'd-flex justify-center pt-0 pb-0'
        "
      >
        <v-img :src="banner" contain />
      </v-container>
    </v-container>

    <v-container v-if="message.length > 0">
      <v-row>
        <v-col cols="12" md="8">
          <v-card flat tile color="transparent">
            <v-list-item>
              <v-list-item-avatar size="24" class="mr-0 ml-n5">
                <v-img :src="donguri" />
              </v-list-item-avatar>
              <v-list-item-content>
                <h2>お知らせ</h2>
              </v-list-item-content>
            </v-list-item>
            <div
              v-for="(message, n) in limitMessage"
              :key="'message_' + n"
              class="itemList ml-3message-wrapper"
            >
              <div class="message-side">
                {{ message.date }}
              </div>
              <div class="message-main">
                {{ message.itemText }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="stopAll" class="d-flex justify-center">
      <p>現在、商品の販売を停止しております。</p>
    </v-container>
    <v-container v-else color="yellow lighten-5">
      <!-- 商品エリア -->
      <h2 id="sty" class="pt-7 ml-3 mb-n5">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>スタイ
      </h2>
      <h3 id="sty-mokumoku" class="pt-7 ml-3">
        もくもく
      </h3>

      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in styMokumoku"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{
                path:
                  '/product/?category=sty&subcategory=mokumoku&id=' + item.id,
              }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3 id="sty-tamago" class="pt-7 ml-3">
        たまご
      </h3>

      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in styTamago"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{
                path:
                  '/product/?category=sty&subcategory=mokumoku&id=' + item.id,
              }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3 id="sty-donut" class="pt-7 ml-3">
        ドーナツ
      </h3>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in styDonut"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{
                path: '/product/?category=sty&subcategory=donut&id=' + item.id,
              }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h3 id="sty-other" class="pt-7 ml-3">
        その他
      </h3>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in styOther"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{
                path: '/product/?category=sty&subcategory=other&id=' + item.id,
              }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="droolcover" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>よだれカバー
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in droolcover"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{ path: '/product/?category=droolcover&id=' + item.id }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="gauzehandkerchief" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>ガーゼハンカチ
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
          <v-col
            v-for="item in gauzehandkerchief"
            :key="item.id"
            tag="li"
            cols="6"
            sm="4"
            md="3"
            xl="2"
          >
            <n-link
              :to="{
                path: '/product/?category=gauzehandkerchief&id=' + item.id,
              }"
            >
              <Item :stock="item.stock">
                <template #imgPath>
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="niginigi" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>にぎにぎ
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
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
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="nametag" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>おなまえタグ
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
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
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="other" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>その他
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
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
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
                </template>
              </Item>
            </n-link>
          </v-col>
        </v-row>
      </v-container>

      <h2 id="wrapping" class="pt-7 ml-3">
        <v-list-item-avatar size="24" class="ml-n4 mr-0 mt-1">
          <v-img :src="donguri" />
        </v-list-item-avatar>ラッピング
      </h2>
      <v-container class="pt-0">
        <v-row tag="ul" dense>
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
                  <v-img
                    class="rounded-lg"
                    aspect-ratio="1"
                    :src="item.images[0].fields.file.url"
                    alt
                  />
                </template>
                <template #name>
                  {{ item.name }}
                </template>
                <template #price>
                  {{ item.price }} 円
                  <p
                    v-if="item.stock * 1 <= 0"
                    class="red--text font-weight-bold"
                  >
                    sold out
                  </p>
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
import donguri from '~/assets/img/donguri.png'

export default {
  layout: 'home',
  components: {
    Item
  },
  async asyncData ({ store }) {
    const products = await client
      .getEntries({
        content_type: 'products',
        order: 'fields.order'
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

    const stopAll = await client
      .getEntries({
        content_type: 'stopAll'
      })
      .then((e) => {
        return e.items[0].fields.stopAll
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
      message,
      stopAll
    }
  },
  data () {
    return { banner, donguri }
  },
  computed: {
    limitMessage () {
      return this.message.slice(0, 3)
    }
  },
  mounted () {
    console.log({ styMokumoku: this.styMokumoku, styTamago: this.styTamago })
    console.log({ stop: this.stopAll })
  }
}
</script>

<style scoped lang="scss">
.itemList {
  list-style: none;
  padding-left: 0;
  white-space: pre-line;
}

.message-wrapper {
  overflow: hidden;
}
.message-main {
  float: right;
  width: 100%;
  margin-left: -100px;
  padding-left: 100px;
  box-sizing: border-box;
}
.message-side {
  float: left;
  width: 100px;
}
</style>
