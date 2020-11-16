<template>
  <v-container class="mb-7">
    <section>
      <v-data-table
        :headers="headers"
        :items="cartItems"
        class="elevation-1"
        disable-filtering
        disable-sort
        hide-default-footer
      >
        <template v-slot:item.name="{ item }">
          <div :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
            {{ item.name }}
          </div>
        </template>

        <template v-slot:item.price="{ item }">
          <div :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
            {{ item.price }}円
          </div>
        </template>

        <template v-slot:item.selected="{ item }">
          <div :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
            {{ item.selected }}
          </div>
        </template>

        <template v-slot:item.sum="{ item }">
          <div
            class="mr-3"
            :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''"
          >
            {{ item.selected > 0 ? `${item.price * item.selected}円` : "ー" }}
          </div>
        </template>

        <template v-slot:footer>
          <v-divider />

          <v-container class="d-flex justify-end">
            <div
              class="mr-5"
              :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''"
            >
              <span>商品合計：{{ customerInfo.total }}円</span>
              <br>
              <span>送料：別途お知らせ</span>
            </div>
          </v-container>
        </template>
      </v-data-table>
      <h2 class="mt-7">
        お客さま情報
      </h2>
      <v-simple-table style="max-width: 600px">
        <tbody>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:1rem; width:200px'
                  : 'width:200px'
              "
            >
              お名前
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.name }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              フリガナ
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.furigana }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              郵便番号
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.postCode }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              住所
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.address }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              電話番号
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.tel }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              メールアドレス
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.mail }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>

      <h2 class="mt-7">
        お届け先情報
      </h2>
      <v-simple-table style="max-width: 600px">
        <tbody>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp
                  ? 'font-size:1rem; width:200px'
                  : 'width:200px'
              "
            >
              お名前
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.shipName }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              フリガナ
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.shipFurigana }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              郵便番号
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.shipPostCode }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              住所
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.shipAddress }}
            </td>
          </tr>
          <tr>
            <td
              :style="
                $vuetify.breakpoint.mdAndUp ? 'font-size:1rem; width:200px' : ''
              "
            >
              電話番号
            </td>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              {{ customerInfo.shipTel }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <h2 class="mt-7">
        お支払い方法
      </h2>
      <v-simple-table style="max-width: 600px">
        <tbody>
          <tr>
            <td :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
              三菱UFJ銀行へのお振込
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <h2 v-if="customerInfo.note" class="mt-7">
        備考
      </h2>
      <p>{{ customerInfo.note }}</p>
      <p class="mt-8">
        この内容でよろしければ、「申し込みする」ボタンを押してください。
      </p>
      <v-btn color="amber lighten-3" :loading="loading" @click="purchase()">
        申し込みする
      </v-btn>
      <v-btn class="ml-3" to="/cart/">
        前の画面に戻る
      </v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      cartItems: [],
      customerInfo: {},
      products: [],
      headers: [
        {
          text: '商品名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: '単価', value: 'price' },
        { text: '数量', value: 'selected' },
        { text: '小計', value: 'sum' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        }
      ]
    }
  },
  computed: {},
  async created () {
    this.cartItems = await this.$cart.data.filter(item => item.selected > 0)
    this.customerInfo = await this.$customerInfo.data[0]
    console.log({ cart: this.cartItems })
    console.log({ info: this.customerInfo })
  },
  methods: {
    sendMessage () {
      console.log('test')
      // required data to send
      /* const data = {
        name,
        furigana,
        mail,
        postCode,
        address,
        date,
        tel,
        shipName,
        shipFurigana,
        shipPostCode,
        shipAddress,
        shipTel,
        needWrapping,
        totalPrice,
        products: [{ name, price, num }],
      }; */
    },
    async purchase () {
      this.loading = true
      // データを必要な形に整形
      const data = {
        cartItems: this.cartItems,
        customerInfo: this.customerInfo
      }
      // httpリクエストを飛ばす
      const call = await this.$functions.httpsCallable('purchase')

      await call(data).then((res) => {
        console.log({ res })
        this.$cart.renew([])
        this.$router.push('/cart/complete')
      })
    }
  }
}
</script>
