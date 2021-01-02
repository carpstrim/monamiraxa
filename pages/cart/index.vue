<template>
  <v-container>
    <section>
      <h1>カート</h1>
      <div style="width: 100%" class="d-flex justify-end align-content-end">
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
        disable-sort
        hide-default-footer
        calculate-widths
      >
        <template v-slot:item.name="{ item }">
          <nuxt-link
            :to="`/product/?category=${item.productType.fields.slug}&id=${item.id}`"
          >
            <span
              class="product-name mt-3"
              :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''"
            >{{ item.name }}</span>
            <v-icon x-small>
              mdi-magnify
            </v-icon>
          </nuxt-link>
        </template>

        <template v-slot:item.price="{ item }">
          <div :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
            {{ item.price }}円
          </div>
        </template>

        <template v-slot:item.selected="{ item }">
          <div
            class="d-flex inputs"
            :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''"
          >
            <v-text-field
              v-model="item.selected"
              class="mt-2 mb-n5"
              style="font-size: 11px"
              dense
              outlined
              flat
              height="15px"
              color="black"
            />
          </div>
        </template>

        <template v-slot:item.delete="{ item }">
          <div>
            <v-icon @click="deleteDialog(item)">
              mdi-delete
            </v-icon>
          </div>
        </template>

        <template v-slot:item.sum="{ item }">
          <div
            v-if="item.selected > item.stock"
            class="mr-3"
            :style="
              $vuetify.breakpoint.mdAndUp
                ? 'font-size:1rem; color:red'
                : 'color:red'
            "
          >
            在庫数：{{ item.stock }}個
          </div>
          <div
            v-else
            class="mr-3"
            :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''"
          >
            {{ item.selected > 0 ? `${item.price * item.selected}円` : "ー" }}
          </div>
        </template>

        <template v-slot:footer>
          <v-divider />

          <v-container class="d-flex justify-end">
            <p v-if="notFilled" class="red--text pr-5">
              商品の数量を正しく入力してください
            </p>
            <p v-else-if="overStock" class="red--text pr-5">
              数量が在庫数を超えている商品があります。
            </p>
            <div :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1rem' : ''">
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
            <v-btn
              color="red darken-1"
              outlined
              @click="deleteItem(dialogItem)"
            >
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
          <span class="product-name mt-5">※送料について</span>
        </nuxt-link>
      </div>
      <div>
        <p class="mt-2">
          商品の数量を変更すると自動的に金額が変更されます。
          <br><span
            class="font-weight-bold"
          >（変更されない場合は、ブラウザを更新の上、再度お試しください。）</span><br>
          ラッピングをご希望の場合は、「ラッピング」を必要数量カートに入れてください。
        </p>
      </div>
      <div :class="$vuetify.breakpoint.xs ? 'mt-7' : 'd-flex mt-7'">
        <h2 class="mr-5">
          お客さま情報の入力
        </h2>
        <nuxt-link class="mt-1" to="/privacy-policy">
          <span class="product-name">※プライバシーポリシー</span>
        </nuxt-link>
      </div>
      <dl class="mt-5" style="max-width: 600px">
        <div>
          <dt>お名前</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.name"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>フリガナ</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.furigana"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>郵便番号</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.postCode"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>住所</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.address"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>電話番号</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.tel"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>メールアドレス</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.mail"
              solo
              label
              row-height="15"
            />
          </dd>
        </div>

        <div>
          <dt>メールアドレス（確認のためもう一度入力してください）</dt>
          <dd>
            <v-text-field
              v-model="customerInfo.mailConfirm"
              solo
              label
              row-height="15"
              :rules="[rules]"
            />
          </dd>
        </div>
      </dl>

      <div class="d-flex mt-7">
        <h2 class="mr-5">
          お届け先情報の入力
        </h2>
      </div>
      <v-radio-group v-model="isDifferentAbove">
        <v-radio :key="1" label="上記と同じ" :value="false" color="black" />
        <v-radio :key="2" label="上記と異なる" :value="true" color="black" />
      </v-radio-group>
      <dl style="max-width: 600px">
        <div v-show="isDifferentAbove">
          <div>
            <dt>お名前</dt>
            <dd>
              <v-text-field
                v-model="customerInfo.shipName"
                solo
                label
                row-height="15"
              />
            </dd>
          </div>

          <div>
            <dt>フリガナ</dt>
            <dd>
              <v-text-field
                v-model="customerInfo.shipFurigana"
                solo
                label
                row-height="15"
              />
            </dd>
          </div>

          <div>
            <dt>郵便番号</dt>
            <dd>
              <v-text-field
                v-model="customerInfo.shipPostCode"
                solo
                label
                row-height="15"
              />
            </dd>
          </div>

          <div>
            <dt>住所</dt>
            <dd>
              <v-text-field
                v-model="customerInfo.shipAddress"
                solo
                label
                row-height="15"
              />
            </dd>
          </div>

          <div>
            <dt>電話番号</dt>
            <dd>
              <v-text-field
                v-model="customerInfo.shipTel"
                solo
                label
                row-height="15"
              />
            </dd>
          </div>
        </div>

        <h2>お支払方法</h2>
        <p>
          銀行振込 (三菱UFJ銀行)
          となります。振込手数料はお客さまにてご負担ください。
          <br>振込先は、ご注文確定メールにてお知らせします。
        </p>

        <div>
          <dt>
            <h3>備考</h3>
          </dt>
          お店への連絡事項がありましたらご記入ください。複数の商品をまとめてラッピングを希望される場合は、どの商品をまとめるかご記入ください。
          <dd>
            <v-textarea v-model="customerInfo.note" solo label />
          </dd>
        </div>
      </dl>

      <v-btn
        color="amber lighten-3"
        :disabled="!activateSubmit"
        @click="confirm()"
      >
        確認画面へ
      </v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  data () {
    return {
      cartItems: [],
      customerInfo: {},
      dialog: false,
      dialogItem: {},
      headers: [
        {
          text: '商品名',
          align: 'start',
          sortable: false,
          filterable: false,
          value: 'name'
        },
        { text: '単価', value: 'price', width: 100 },
        { text: '数量', value: 'selected', width: 100 },
        { text: '変更', value: 'delete', width: 70 },
        { text: '小計', value: 'sum', width: 100 }
      ],
      rules: val =>
        this.customerInfo.mail === val ||
        '上で入力したメールアドレスと同じものを入力してください',
      isDifferentAbove: null
    }
  },
  computed: {
    activateSubmit () {
      if (this.isDifferentAbove) {
        const active =
          this.customerInfo.mail &&
          this.customerInfo.mailConfirm &&
          this.customerInfo.mail === this.customerInfo.mailConfirm &&
          this.customerInfo.name &&
          this.customerInfo.furigana &&
          this.customerInfo.postCode &&
          this.customerInfo.address &&
          this.customerInfo.tel &&
          this.customerInfo.shipName &&
          this.customerInfo.shipFurigana &&
          this.customerInfo.shipPostCode &&
          this.customerInfo.shipAddress &&
          this.customerInfo.shipTel &&
          !this.notFilled &&
          !this.overStock

        console.log({ active })
        return active
      } else {
        const active =
          this.customerInfo.mail &&
          this.customerInfo.mailConfirm &&
          this.customerInfo.mail === this.customerInfo.mailConfirm &&
          this.customerInfo.name &&
          this.customerInfo.furigana &&
          this.customerInfo.postCode &&
          this.customerInfo.address &&
          this.customerInfo.tel &&
          this.isDifferentAbove != null &&
          !this.notFilled &&
          !this.overStock

        console.log({ active })
        return active
      }
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
    },
    notFilled () {
      return this.cartItems.some((obj, i, ary) => {
        return !(obj.selected > 0)
      })
    },
    overStock () {
      return this.cartItems.some((obj, i, ary) => {
        return obj.selected > obj.stock
      })
    }
  },
  watch: {
    customerInfo () {
      console.log(this.customerInfo)
    },
    notFilled () {
      this.$nuxt.refresh()
    }
  },
  created () {
    this.cartItems = this.$cart.data
    this.customerInfo =
      this.$customerInfo.data.length > 0 ? this.$customerInfo.data[0] : {}
    console.log({ cartItems: this.cartItems })
    console.log({ customerInfo: this.customerInfo })
  },
  mounted () {},
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
    async confirm () {
      this.customerInfo.total = this.total
      // 「上記と同じ」を選択しているとき、お届け先情報にお客さん情報を転記
      if (!this.isDifferentAbove) {
        this.customerInfo.shipName = this.customerInfo.name
        this.customerInfo.shipFurigana = this.customerInfo.furigana
        this.customerInfo.shipPostCode = this.customerInfo.postCode
        this.customerInfo.shipAddress = this.customerInfo.address
        this.customerInfo.shipTel = this.customerInfo.tel
      }
      // お客さん情報をローカルに保存
      await this.$customerInfo.renew([this.customerInfo])
      console.log({ customerInfo: this.$customerInfo.data[0] })
      // 確認ページに飛ばす
      await this.$router.push('/cart/confirm')
    }
  }
}
</script>

<style>
.v-data-table-header {
  background-color: #ffe082;
}

.v-data-table__mobile-row__header {
  width: 80px;
}

.inputs {
  width: 70px;
}

.product-name {
  color: #000;
  text-decoration: underline;
}

.theme--light.v-data-table .v-data-table-header th {
  font-size: 1rem;
}

.v-data-table-header-mobile th {
  display: none;
}
</style>
