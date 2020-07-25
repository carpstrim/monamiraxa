<template>
  <div>
    <v-btn @click="test()">
      test
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    async test () {
      const call = await this.$functions.httpsCallable('contact')
      await call({
        name: '安見　光平',
        mail: 'uniqueusher@gmail.com',
        title: '聞きたいことがあります',
        text: 'スタイのサイズ展開はどんな感じですか？'
      })
    }
  }
}
</script>
