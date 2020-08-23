<template>
  <v-container>
    <section>
      <h1>カート</h1>
      <div style="width:100%" class="d-flex justify-end align-content-end">
        <nuxt-link to="/terms-of-sale">
          <p class="product-name mt-3">
            ※特定商取引法に基づく表示
          </p>
        </nuxt-link>
      </div>
      <p>カートには以下の商品が入っています。ご確認ください。</p>

      <!-- 仮データ -->
      <v-data-table
        :headers="headers"
        :items="cartItems"
        class="elevation-1"
        disable-filtering
        hide-default-footer
        calculate-widths
      >
        <template v-slot:item.name="{item}">
          <nuxt-link :to="`/product/?category=${item.productType.fields.slug}&id=${item.id}`">
            <span class="product-name mt-3">{{ item.name }}</span>
            <v-icon x-small>
              mdi-magnify
            </v-icon>
          </nuxt-link>
        </template>

        <template v-slot:item.selected="{ item }">
          <div class="d-flex inputs">
            <v-text-field
              v-model="item.selected"
              class="mt-2 mb-n5"
              style="font-size: 11px"
              dense
              outlined
              flat
              readonly
              height="15px"
            />
            <div class="d-felx flex-column align-center mt-1">
              <v-icon @click="itemCount('up',item)">
                mdi-menu-up
              </v-icon>
              <v-icon @click="itemCount('down',item)">
                mdi-menu-down
              </v-icon>
            </div>
          </div>
        </template>

        <template v-slot:item.delete="{ item }">
          <v-icon small @click="deleteDialog(item)">
            mdi-delete
          </v-icon>
        </template>

        <template v-slot:item.sum="{ item }">
          <div class="mr-3">
            {{ item.selected > 0 ? item.price * item.selected : "ー" }}
          </div>
        </template>

        <template v-slot:footer>
          <v-divider />

          <v-container class="d-flex justify-end">
            <div>
              <span>商品合計：{{ total }}円</span>
              <br>
              <span>送料：別途お知らせ</span>
            </div>
          </v-container>
        </template>

        <template v-slot:no-data>
          カートに商品がありません
        </template>
      </v-data-table>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span>商品の削除</span>
          </v-card-title>

          <v-card-text>カート内の以下の商品を削除します。</v-card-text>

          <v-card-text>
            商品名：
            <span>{{ dialogItem.name }}</span>
            <br>単価：
            <span>{{ dialogItem.price }}円</span>
            <br>数量：
            <span>{{ dialogItem.selected }}</span>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn color="red darken-1" outlined @click="deleteItem(dialogItem)">
              削除する
            </v-btn>
            <v-btn color="blue darken-1" outlined @click="dialog = false">
              キャンセル
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="d-flex justify-end align-content-end">
        <nuxt-link to="/about#postage">
          <span class="product-name mt-3">※送料について</span>
        </nuxt-link>
      </div>
      <div>
        <p>ラッピングをご希望の場合は、「ラッピング」をカートに入れてください。</p>
      </div>
      <div class="d-flex mt-7">
        <h2 class="mr-5">
          お客様情報の入力
        </h2>
        <nuxt-link class="mt-1" to="/privacy-policy">
          <span class="product-name mt-3">※プライバシーポリシー</span>
        </nuxt-link>
      </div>
      <dl style="max-width:600px">
        <div>
          <dt>お名前</dt>
          <dd>
            <v-text-field v-model="customerInfo.name" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>フリガナ</dt>
          <dd>
            <v-text-field v-model="customerInfo.furigana" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>郵便番号</dt>
          <dd>
            <v-text-field v-model="customerInfo.postCode" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>住所</dt>
          <dd>
            <v-text-field v-model="customerInfo.address" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>電話番号</dt>
          <dd>
            <v-text-field v-model="customerInfo.tel" solo label row-height="15" />
          </dd>
        </div>

        <h2>お支払方法</h2>
        <p>
          銀行振込 (三菱UFJ銀行)
          となります。振込手数料はお客さまにてご負担ください。
          <br>振込先は、ご注文確定メールにてお知らせします。
        </p>

        <div>
          <dt>備考</dt>
          <dd>
            <v-textarea v-model="customerInfo.note" solo label />
          </dd>
        </div>
      </dl>

      <v-btn color="blue darken-1" :disabled="!activateSubmit" @click="confirm()">
        確認画面へ
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
      dialog: false,
      dialogItem: {},
      headers: [
        {
          text: '商品名',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: '単価', value: 'price', width: 70 },
        { text: '数量', value: 'selected', width: 100 },
        { text: '変更', value: 'delete', width: 70 },
        { text: '小計', value: 'sum', width: 100 }
      ]
    }
  },
  computed: {
    activateSubmit (activate) {
      activate = false

      if (
        this.customerInfo.name &&
        this.customerInfo.furigana &&
        this.customerInfo.postCode &&
        this.customerInfo.address &&
        this.customerInfo.tel
      ) {
        activate = !activate
      }
      return activate
    },
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
    this.cartItems = this.$cart.data
    this.customerInfo = this.$customerInfo.data
  },
  methods: {
    itemCount (type, item) {
      if (type === 'up') {
        if (item.selected < item.stock) {
          item.selected++
        } else {
          item.selected = item.stock
        }
      }
      if (type === 'down') {
        if (item.selected > 0) {
          item.selected--
        } else {
          item.selected = 0
        }
      }
      console.log(this.cartItems)
      this.$cart.renew(this.cartItems)
    },
    deleteDialog (item) {
      console.log(item)
      console.log({ data: this.$cart.data })
      this.dialogItem = item
      this.dialog = true
      console.log({ dialogItem: this.dialogItem })
    },
    deleteItem (item) {
      console.log(item)
      this.cartItems = this.cartItems.filter(e => e.id !== item.id)
      console.log({ data: this.cartItems })
      this.$cart.renew(this.cartItems)
      this.dialog = false
    },
    confirm () {
      // お客さん情報をローカルに保存
      this.$customerInfo.renew(this.customerInfo)
      console.log({ customerInfo: this.$customerInfo.data })
      // 確認ページに飛ばす
      this.$router.push('/cart/confirm')
    }
  }
}
</script>

<style>
.v-data-table-header {
  background-color: #ffe082;
}

.inputs {
  width: 70px;
}

.product-name {
  color: #000;
  text-decoration: underline;
}
</style>
