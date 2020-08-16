<template>
  <v-container class="d-flex justify-center">
    <section style="max-width:600px; width:80%">
      <h1 class="mb-7">
        お問い合わせ
      </h1>
      <dl>
        <div>
          <dt>お名前</dt>
          <dd>
            <v-text-field v-model="contact.name" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>メールアドレス</dt>
          <dd>
            <v-text-field v-model="contact.mail" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>確認のためにもう一度入力してください</dt>
          <dd>
            <v-text-field v-model="contact.mailConfirm" solo label row-height="15" />
          </dd>
        </div>

        <!-- 選択制にしておくのもよいかも -->
        <div>
          <dt>お問い合わせタイトル</dt>
          <dd>
            <v-text-field v-model="contact.title" solo label row-height="15" />
          </dd>
        </div>

        <div>
          <dt>内容</dt>
          <dd>
            <v-textarea
              v-model="contact.content"
              label
              solo
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            />
          </dd>
        </div>
      </dl>

      <v-btn
        color="primary"
        nuxt
        :loading="loading"
        :disabled="!activateSubmit"
        @click="sendMessage()"
      >
        送信
      </v-btn>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
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

      if (
        this.contact.name &&
        this.contact.mail &&
        this.contact.mailConfirm &&
        this.contact.title &&
        this.contact.content
      ) {
        activate = !activate
      }
      return activate
    }
  },
  methods: {
    async sendMessage () {
      this.loading = true
      console.log({ data: this.contact })

      const call = this.$functions.httpsCallable('contact')

      await call(this.contact).then((res) => {
        console.log({ res })
        this.$router.push('complete')
      })
    }
  }
}
</script>
