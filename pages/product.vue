<template>
  <section>
    <v-container color="yellow lighten-5">
      <v-container class="pa-0">
        <v-row
          v-for="item in jsonAll.items.sty"
          :key="item.id"
          dense
        >
          <!-- TODO: カルーセルに差し替え予定 -->
          <v-col
            cols="12"
            xs="12"
            sm="6"
          >
            <h2>{{ item.name }}</h2>
            <img :src="item.imgPath" alt="">
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="6"
          >
            <p>{{ item.description }}</p>
            <dl>
              <dt class="u-inline u-va-top">
                サイズ：
              </dt>
              <dd class="u-inline">
                <ul>
                  <li>約 {{ item.size.vertical }} cm</li>
                  <li>約 {{ item.size.horizontal }} cm</li>
                  <li>約 {{ item.size.neck }} cm</li>
                </ul>
              </dd>
            </dl>

            <dl>
              <dt class="u-inline">
                素材：
              </dt>
              <dd class="u-inline">
                {{ item.material }}
              </dd>
            </dl>
            <hr>
            <dl>
              <dt class="u-inline">
                価格：
              </dt>
              <dd class="u-inline">
                {{ item.price }}
              </dd>
            </dl>
            <dl>
              <dt class="u-inline">
                在庫数：
              </dt>
              <dd class="u-inline">
                {{ item.stock }}
              </dd>
            </dl>
            <dl>
              <dt class="u-inline">
                注文数：
              </dt>
              <dd class="u-inline order_quantity">
                <input type="number" name="order_quantity" min="1" max="100" required>
              </dd>
            </dl>

            <v-btn color="light-blue darken-1" dark block>
              カートに入れる
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <br>
    </v-container>
  </section>
</template>

<script>
export default {
  asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']
    return { jsonAll }
  },
  computed: {
    limitMessage () {
      return this.jsonAll.message.slice(0, 3)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}

.order_quantity {
  background-color: white;
  border: 1px solid $color-default;
  border-radius: 5px;
}

</style>
