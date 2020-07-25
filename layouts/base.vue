<template>
  <v-app>
    <main class="base">
      <v-content>
        <nuxt />
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.base {
  height: 100%;
  background: top left / 250px repeat url(~assets/img/bg_products.png) !important;
}
</style>
