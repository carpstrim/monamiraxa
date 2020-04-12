<template>
  <div>
    <p>This is sample page.</p>
    <v-btn @click="doAction()">
      change
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isRed: false
    }
  },
  methods: {
    doAction () {
      this.isRed = !this.isRed
      console.log(`isRed: ${this.isRed}`)
    }
  }
}
</script>
