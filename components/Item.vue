<template>
  <div>
    <figure>
      <img :src="item.imgPath" alt="">
      <figcaption>{{ item.caption }}</figcaption>
      <figcaption>{{ item.price }}</figcaption>
    </figure>
  </div>
</template>

<style lang="scss">
figure {
  display: block;
  width: 90%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  figcaption {
    text-align: center;
  }
}
</style>

<script>
import imgPath from '~/assets/img/dummy_square.png'

export default {
  data () {
    return {
      item: {
        imgPath,
        caption: 'ユニコーンのもくもくスタイ',
        price: '1200'
      }
    }
  }
}
</script>
