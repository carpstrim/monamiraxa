<template>
  <v-container>
    <section>
      <h1>ご注文情報入力</h1>

      <h2>カート</h2>

      <!-- 仮データ -->
      <v-data-table :headers="headers" :items="desserts" class="elevation-1" />

      <h2>お客様情報の入力</h2>
      <dl>
        <div>
          <dt>お名前</dt>
          <dd><v-text-field v-model="a" label="" row-height="15" /></dd>
        </div>

        <div>
          <dt>フリガナ</dt>
          <dd><v-text-field v-model="a" label="" row-height="15" /></dd>
        </div>

        <div>
          <dt>郵便番号</dt>
          <dd><v-text-field v-model="a" label="" row-height="15" /></dd>
        </div>

        <div>
          <dt>住所</dt>
          <dd><v-text-field v-model="b" label="" row-height="15" /></dd>
        </div>

        <div>
          <dt>電話番号</dt>
          <dd><v-text-field v-model="c" label="" row-height="15" /></dd>
        </div>

        <h2>お支払方法</h2>
        <p>
          銀行振込 (三菱UFJ銀行)
          となります。振込手数料はお客さまにてご負担ください。<br>振込先は、ご注文確定メールにてお知らせします。
        </p>

        <div>
          <dt>備考</dt>
          <dd>
            <v-textarea
              v-model="d"
              label=""
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            />
          </dd>
        </div>
      </dl>

      <v-btn>確認画面へ</v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
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
  }
}
</script>
