<template>
  <v-container>
    <section>
      <v-container>
        <p>
          <v-list-item-avatar size="18" class="ml-n4 mr-2 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>お問い合わせを受け付けました。
        </p>
        <p>
          <v-list-item-avatar size="18" class="ml-n4 mr-2 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>後ほど、メールにてご回答させていただきます。
          <br>（回答には数日いただく場合がありますので、ご了承ください。）
        </p>
        <p>
          <v-list-item-avatar size="18" class="ml-n4 mr-2 mt-1">
            <v-img :src="donguri" />
          </v-list-item-avatar>monamiraxa.handmade@gmail.com、info.monamiraxa@gmail.com <br><span
            class="ml-2"
          >からのメールを受信できるようにご設定をお願いします。</span>
        </p>
        <v-btn to="/">
          ホームへ戻る
        </v-btn>
      </v-container>
    </section>
  </v-container>
</template>

<script>
import donguri from '~/assets/img/donguri.png'

export default {
  data () {
    return { donguri }
  }
}
</script>
