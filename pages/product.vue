<template>
  <v-container color="yellow lighten-5">
    <section>
      <v-container class="pa-0 d-flex flex-column">
        <v-row dense class="mt-2 d-flex justify-center">
          <v-col cols="12" xs="12" sm="12" md="10" lg="9">
            <h2 class="mt-3 ml-3">
              {{ currentProduct.name }}
            </h2>
          </v-col>
        </v-row>
        <v-row dense class="mt-2 d-flex justify-center">
          <v-col cols="12" xs="12" sm="6" md="5" lg="4">
            <v-img
              class="ma-3 rounded-lg"
              :src="nowDisplayImg"
              cover
              aspect-ratio="1"
            />
            <v-row class="mt-3" no-gutters>
              <v-col
                v-for="(image, m) in currentProduct.images"
                :key="'imageSelect_' + m"
                class="pl-3"
                cols="2"
                xs="2"
              >
                <v-card @click="nowImageNum = m">
                  <v-img :src="image.fields.file.url" aspect-ratio="1" />
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            class="pr-3 pl-3"
            cols="12"
            xs="12"
            sm="6"
            md="5"
            lg="5"
          >
            <p style="white-space: pre-line">
              {{ currentProduct.description }}
            </p>
            <p v-if="currentProduct.productType.fields.slug != 'wrapping'">
              <span class="u-va-top">サイズ</span>
              <span>
                <ul
                  v-if="currentProduct.productType.fields.slug === 'sty'"
                  class="ml-3"
                >
                  <li>横幅：約 {{ currentProduct.horizontal }} cm</li>
                  <li>首下：約 {{ currentProduct.vertical }} cm</li>
                  <li>首回り：約 {{ currentProduct.neck }} cm</li>
                </ul>
                <ul v-else class="ml-3">
                  <li>縦幅：約 {{ currentProduct.vertical }} cm</li>
                  <li>横幅：約 {{ currentProduct.horizontal }} cm</li>
                </ul>
              </span>
            </p>

            <p>
              <span class="u-va-top">素材</span>
              <span style="white-space: pre-line">
                <ul>
                  <li class="ml-3">{{ currentProduct.material }}</li>
                </ul>
              </span>
            </p>
            <v-divider />
            <span class>価格：</span>
            <span>{{ currentProduct.price | num_format }}円</span>
            <br>
            <div v-if="currentProduct.stock > 0">
              <span class>在庫数：</span>
              <span class>{{ currentProduct.stock }}</span>
            </div>
            <div v-else class="red--text font-weight-bold">
              SOLD OUT
            </div>

            <div
              v-if="currentProduct.stock > 0"
              class="mt-2"
              style="width: 200px"
            >
              購入数：
              <v-select
                v-model="addToCart"
                background-color="white"
                dense
                placeholder="購入数を選択"
                :items="items"
                style="width: 130px"
              />
            </div>

            <v-btn
              :disabled="!(currentProduct.stock > 0)"
              color="amber lighten-3"
              block
              @click="cart()"
            >
              カートに入れる
            </v-btn>
            <div class="d-flex justify-center">
              <p class="red--text mt-2">
                {{ warningText }}
              </p>
            </div>
            <v-snackbar
              v-model="snackbar"
              top
              color="blue darken-3"
              text
              timeout="-1"
            >
              <p>商品をカートに追加しました。</p>
              <p>{{ currentProduct.name }}:{{ currentProduct.selected }}個</p>
              <template v-slot:action="{ attrs }">
                <v-btn outlined v-bind="attrs" @click="snackbar = false">
                  閉じる
                </v-btn>
              </template>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  filters: {
    num_format (num) {
      return num.toLocaleString()
    }
  },
  async asyncData ({ query }) {
    const currentProduct = await client
      .getEntries({
        content_type: 'products',
        'fields.id': query.id
      })
      .then((e) => {
        const item = e.items[0]

        return {
          entryId: item.sys.id,
          ...item.fields
        }
      })

    return { currentProduct }
  },
  data () {
    return {
      sample: 'text',
      currentProduct: {},
      query: {},
      nowImageNum: 0,
      items: [],
      cartItems: [],
      addToCart: '',
      warningText: '',
      snackbar: false
    }
  },
  computed: {
    nowDisplayImg () {
      return this.currentProduct.images[this.nowImageNum].fields.file.url
    }
  },
  created () {
    this.items = [...Array(this.currentProduct.stock).keys()].map(i => ++i)
    this.cartItems = this.$cart.data
    console.log({ cart: this.cartItems })
  },
  mounted () {
    console.log({ data: this.currentProduct })
  },
  methods: {
    cart () {
      console.log({ val: this.addToCart })
      if (this.addToCart) {
        const cartItemIds = this.cartItems.map((item) => {
          return item.id
        })
        console.log({ cartItemIds })
        if (cartItemIds.includes(this.currentProduct.id)) {
          // すでにカートに同じ商品があるとき、足しこむだけ
          const newItems = this.cartItems.map((item) => {
            if (item.id === this.currentProduct.id) {
              item.selected = Math.min(
                item.selected * 1 + this.addToCart * 1,
                item.stock * 1
              )
              return item
            } else {
              return item
            }
          })
          this.$cart.renew(newItems)
          this.currentProduct.selected = this.addToCart // スナックバー用
          this.snackbar = true
        } else {
          this.currentProduct.selected = this.addToCart

          this.$cart.regist(this.currentProduct)
          this.snackbar = true
        }
      } else {
        this.warningText = '購入数を選択してください'
      }
      this.addToCart = ''
      console.log({ cart: this.$cart.data })
    }
  }
}
</script>

<style scoped lang="scss">
.order_quantity {
  background-color: white;
  border: 1px solid $color-default;
  //border-radius: 5px;
}
</style>
