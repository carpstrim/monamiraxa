<template>
  <section class="flow">
    <div>
      <div>
        <h1>特定商取引法に基づく表示</h1>
      </div>
      <v-simple-table class="mb-7">
        <template v-slot:default>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td style="max-width:600px;">
                {{ item.content }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      desserts: [
        {
          name: '販売業者名',
          content: 'mon ami raxa （モナミラシャ）'
        },
        {
          name: '代表責任者名',
          content: '望月　祥平'
        },
        {
          name: '所在地',
          content: '兵庫県伊丹市（詳細はお取引時にお知らせします）'
        },
        {
          name: '電話番号',
          content: 'お取引時にお知らせします。'
        },
        {
          name: 'メールアドレス',
          content: 'monamiraxa.handmade@gmail.com'
        },
        {
          name: 'ホームページURL',
          content: 'https://monamiraxa.com'
        },
        {
          name: '販売価格',
          content: '各商品ページをご参照ください。'
        },
        {
          name: '商品代金以外の必要料金',
          content:
            '販売価格とは別に消費税・配送料・振込手数料などがかかる場合がございます。'
        },
        {
          name: 'お届け時期',
          content:
            'ご入金確認後7日以内に発送いたします。受注制作品については、お取引時にお知らせします。'
        },
        {
          name: 'お支払方法',
          content:
            '銀行振込（三菱UFJ銀行）にて前払いとなります。手数料はお客さまにてご負担ください。'
        },
        {
          name: 'お申込みの有効期限',
          content:
            'ご注文後７日以内といたします。\n７日間入金がない場合は、自動的にキャンセルとさせていただきますのでご了承ください。'
        },
        {
          name: 'キャンセル',
          content:
            'お振込前のキャンセルは、注文後２４時間以内にメールにてご連絡ください。\n注文確定メールを送らせていただいてから、７日以内にお振込がない場合はキャンセルの扱いとさせていただきます。\nお振込後のキャンセルはお受けできません。'
        },
        {
          name: '返品期限',
          content:
            '商品に不備があった場合、商品到着後３日以内にメールにてご連絡ください。\nご連絡が３日以内に行われなかった場合、返品を受け付けられない場合がありますので予めご了承ください。\nその後、返品の方法をご連絡いたします。なお、未使用の商品に限ります。\nお客様都合の理由（イメージと異なる、気が変わった等）によるご返品はお受けできない場合がございます。 '
        },
        {
          name: '返品送料',
          content:
            'お客様都合による返品につきましてはお客様のご負担とさせていただきます。\n不良品に該当する場合は当方で負担いたします。'
        },
        {
          name: '配送方法',
          content:
            'レターパックライト、レターパック、ゆうパックのいずれかでお送りします。\nお申し込みをいただいた後に、現物を確認し、正式な金額をお知らせさせていただきます。\n目安としては、スタイ2点まではレターパックライト(370円)、3～5点はレターパックプラス(520円)、それを超える場合はゆうパックとなります。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ol {
  list-style: none;
}

.flow {
  margin: 0 auto;

  @include breakpoint-up(md) {
    width: 900px;
  }
}

.flow_item {
  + .flow_item {
    margin-top: 20px;
  }
}
</style>
