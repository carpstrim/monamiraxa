<template>
  <v-app>
    <main class="base d-flex justify-center">
      <v-main style="max-width: 90vw">
        <nuxt />
      </v-main>
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
  background-color: #fefde7;
}
</style>
