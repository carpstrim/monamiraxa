<template>
  <v-container>
    <section class="flow">
      <v-card class="pa-2 mb-3" flat tile>
        <h2>
          <v-list-item-avatar size="24" class="mr-0 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>mon ami raxa について
        </h2>
        <p>
          mon ami raxa (ﾓﾅﾐﾗｼｬ) は手作りベビー用品のお店です。
          <br>普段使いにも、おめかしにも、プレゼントにも。
          <br>大切な赤ちゃんの身の周りを彩るアイテムをお届けします。
        </p>
        <p>
          商品の素材には、赤ちゃんの肌に優しい、綿100％のダブルガーゼやコットンフランネルを使用しています。詳細は各商品ページに表示しておりますので、ご確認ください。
        </p>
        <p>
          売り切れになっている商品も、リクエストをいただければ製作できる場合がありますので、お気軽にお問い合わせフォームからご連絡ください。
        </p>
        <p>
          新商品の案内はインスタグラムで発信していますので、ぜひフォローお願いします♪
          ID:monamiraxa
          <v-btn icon href="https://www.instagram.com/monamiraxa/">
            <v-img height="18" contain :src="instagram" />
          </v-btn>
        </p>
        <p>
          平日は別の仕事をしておりますので、ご連絡が遅くなることがあります。
        </p>
      </v-card>
      <v-spacer />
      <v-card id="postage" class="pa-2 mb-3" flat tile>
        <h2>
          <v-list-item-avatar size="24" class="mr-0 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>送料について
        </h2>
        <p>
          レターパックライト、レターパック、ゆうパックのいずれかでお送りします。目安としては、スタイ2点まではレターパックライト(370円)、3～5点はレターパックプラス(520円)、それを超える場合はゆうパックとなります。商品の厚みやラッピングの有無によって異なりますので、お申し込みメールをいただいた後に、現物をもとに送料を確認し、正式な金額をお知らせさせていただきます。
        </p>
      </v-card>
      <v-spacer />
      <v-card id="payment" class="pa-2 mb-3" flat tile>
        <h2>
          <v-list-item-avatar size="24" class="mr-0 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>お支払いについて
        </h2>
        <p>
          銀行振込(三菱UFJ銀行)となります。手数料はお客さまにてご負担ください。ご注文確定後、振込先をメールでご連絡します。
        </p>
      </v-card>
      <v-spacer />
      <v-card class="pa-2 mb-3" flat tile>
        <h2>
          <v-list-item-avatar size="24" class="mr-0 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>キャンセルについて
        </h2>
        <p>
          お振込前のキャンセルは、注文後24時間以内にメールにてご連絡ください。注文確定メールを送らせていただいてから、７日以内にお振込がない場合はキャンセルの扱いとさせていただきます。お振込後のキャンセルはお受けできません。
        </p>
      </v-card>
      <v-spacer />
      <v-card class="pa-2 mb-3" flat tile>
        <h2>
          <v-list-item-avatar size="24" class="mr-0 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>返品について
        </h2>
        <p>
          不良品の場合、商品到着後３日以内にご連絡ください。返送料は当方で負担いたします。お客さま都合の返品はご遠慮いただいておりますが、返送される場合の送料はお客さまににてご負担ください。
        </p>
      </v-card>
      <p class="mt-3">
        <a
          href="/terms-of-sale"
          style="color: #000"
        >特定商取引法に基づく表示</a>
      </p>
      <p class="mt-3">
        <a href="/privacy-policy" style="color: #000">プライバシーポリシー</a>
      </p>
    </section>
  </v-container>
</template>

<script>
import donguri from '~/assets/img/donguri.png'
import instagram from '~/assets/img/instagram.png'

export default {
  data () {
    return { donguri, instagram }
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
