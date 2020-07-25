<template>
  <v-container>
    <section>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1" />
      <v-btn>前の画面に戻る</v-btn>
      <p>この内容でよろしければ、「申し込みする」ボタンを推してください。</p>
      <v-btn>申し込みする</v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>
