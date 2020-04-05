<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <p><span>トップページ</span>のサンプル文章です</p>
    </v-flex>
  </v-layout>
</template>

<style scoped lang="scss">
div {
  background-image: url('~assets/img/bg_flower_blue.png');
  background-size: 100px;
  background-repeat: repeat;
}

p {
  font-size: 30px;

  span {
    color: red;
  }
}
</style>

<script>
export default {
}
</script>
