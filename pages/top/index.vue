<template>
  <div class="top">
    <n-link to="/">
      <div class="top_container">
        <figure class="top_figure">
          <img src="~/assets/img/top_door_open.png" alt>
        </figure>
        <p>mon ami raxa (ﾓﾅﾐﾗｼｬ)は<br>手作りベビー用品のお店です。</p>
        <p>普段使いにも、おめかしにも、プレゼントにも。</p>
        <p>大切な赤ちゃんの身の周りを彩る<br>アイテムをお届けします。</p>
      </div>
    </n-link>
  </div>
</template>

<script>
export default {
  layout: 'base'
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.top_container {
  padding: 50px 0;
  background-color:white;
  text-align: center;
  color: $color-default;

  @include breakpoint-up(md) {
    width: 800px;
  }
}

.top_figure {
  position: relative;

  img {
    max-width: 100%;
  }

  &::before {
    content: "";
    display: block;
    opacity: 1;
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    background: top / 100% no-repeat url(~assets/img/top_door_close.png);
    transition: 0.2s;

    @include breakpoint-down(sm) {
      animation: opacityHidden 0.5s $easeInOutQuad 1s forwards;
    }

    @include breakpoint-up(md) {
      width: 800px;
      height: 624px;
    }
  }

  &:hover {
    &::before {
      opacity: 0;
    }
  }
}
</style>
