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
export default {
  data () {
    return {
      item: {
        imgPath: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        caption: 'ユニコーンのもくもくスタイ',
        price: '1200'
      }
    }
  }
}
</script>
