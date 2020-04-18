<template>
  <section>
    <h1>お問い合わせ</h1>
    <dl>
      <div>
        <dt>お名前</dt>
        <dd>
          <v-text-field v-model="contact.name" label="" row-height="15" />
        </dd>
      </div>

      <div>
        <dt>メールアドレス</dt>
        <dd>
          <v-text-field v-model="contact.mail" label="" row-height="15" />
        </dd>
      </div>

      <div>
        <dt>確認のためにもう一度入力してください</dt>
        <dd>
          <v-text-field
            v-model="contact.mailConfirm"
            label=""
            row-height="15"
          />
        </dd>
      </div>

      <!-- 選択制にしておくのもよいかも -->
      <div>
        <dt>お問い合わせタイトル</dt>
        <dd>
          <v-text-field v-model="contact.title" label="" row-height="15" />
        </dd>
      </div>

      <div>
        <dt>内容</dt>
        <dd>
          <v-textarea
            v-model="contact.content"
            label=""
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            hint="Hint text"
          />
        </dd>
      </div>
    </dl>

    <v-btn to="/contact/complete" nuxt :disabled="!activateSubmit">
      送信
    </v-btn>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isRed: false,
      sending: '',
      contact: {
        name: '',
        mail: '',
        mailConfirm: '',
        title: '',
        content: ''
      }
    }
  },
  computed: {
    activateSubmit (activate) {
      activate = false

      if (this.contact.name && this.contact.mail && this.contact.mailConfirm && this.contact.title && this.contact.content) {
        activate = !activate
      }
      return activate
    }
  }
}
</script>

<style lang="scss">
.red {
  color: red!important;
}

.blue {
  color: blue!important;
}
</style>
