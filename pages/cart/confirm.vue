<template>
  <v-container>
    <section>
      <v-data-table
        :headers="headers"
        :items="cartItems"
        class="elevation-1"
        disable-filtering
        hide-default-footer
      >
        <template
          v-slot:item.sum="{ item }"
        >
          {{ item.selected > 0 ? item.price * item.selected : "ー" }}
        </template>

        <template v-slot:footer>
          <v-divider />

          <v-container class="d-flex justify-end">
            <div class="mr-5">
              <span>商品合計：{{ total }}円</span>
              <br>
              <span>送料：別途お知らせ</span>
            </div>
          </v-container>
        </template>
      </v-data-table>
      <h2 class="mt-7">
        お客さま情報
      </h2>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>お名前</td>
              <td style="max-width:600px">
                {{ customerInfo.name }}
              </td>
            </tr>
            <tr>
              <td>フリガナ</td>
              <td style="max-width:600px">
                {{ customerInfo.furigana }}
              </td>
            </tr>
            <tr>
              <td>郵便番号</td>
              <td style="max-width:600px">
                {{ customerInfo.postCode }}
              </td>
            </tr>
            <tr>
              <td>住所</td>
              <td style="max-width:600px">
                {{ customerInfo.address }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h2 class="mt-7">
        お届け先情報
      </h2>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>お名前</td>
              <td style="max-width:600px">
                {{ customerInfo.name }}
              </td>
            </tr>
            <tr>
              <td>フリガナ</td>
              <td style="max-width:600px">
                {{ customerInfo.furigana }}
              </td>
            </tr>
            <tr>
              <td>郵便番号</td>
              <td style="max-width:600px">
                {{ customerInfo.postCode }}
              </td>
            </tr>
            <tr>
              <td>住所</td>
              <td style="max-width:600px">
                {{ customerInfo.address }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <h2 class="mt-7">
        お支払い方法
      </h2>三菱UFJ銀行へのお振込
      <h2 class="mt-7">
        備考
      </h2>
      <p>{{ customerInfo.note }}</p>
      <v-btn to="/cart/">
        前の画面に戻る
      </v-btn>
      <p>この内容でよろしければ、「申し込みする」ボタンを推してください。</p>
      <v-btn @click="purchase()">
        申し込みする
      </v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cartItems: [],
      customerInfo: {
        name: '',
        furigana: '',
        postCode: '',
        address: '',
        tel: '',
        note: ''
      },
      name: '',
      furigana: '',
      mail: '',
      postCode: '',
      address: '',
      date: '',
      tel: '',
      shipName: '',
      shipFurigana: '',
      shipPostCode: '',
      shipAddress: '',
      shipTel: '',
      needWrapping: '',
      totalPrice: '',
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
  computed: {
    total () {
      const subtotals = this.cartItems.map((item) => {
        return item.selected * item.price
      })
      let total = 0
      for (const i in subtotals) {
        total += subtotals[i] * 1
      }
      return total
    }
  },
  created () {
    this.cartItems = this.$cart.data.filter(item => item.selected > 0)
    this.customerInfo = this.$customerInfo.data
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
    purchase () {
      // データを必要な形に整形
      // httpリクエストを飛ばす
      // resを確認
      // ストレージを空にする
      // 完了画面に飛ばす
    }
  }
}
</script>
