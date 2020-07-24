<template>
  <v-container color="yellow lighten-5">
    <section>
      <v-container class="pa-0">
        <v-row dense>
          <!-- TODO: カルーセルに差し替え予定 -->
          <v-col cols="12" xs="12" sm="6">
            <h2>{{ currentProduct.name }}</h2>
            <img :src="currentProduct.imgPath" alt>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <p>{{ currentProduct.description }}</p>
            <dl>
              <dt class="u-inline u-va-top">
                サイズ：
              </dt>
              <dd class="u-inline">
                <ul>
                  <li>約 {{ currentProduct.size.vertical }} cm</li>
                  <li>約 {{ currentProduct.size.horizontal }} cm</li>
                  <li>約 {{ currentProduct.size.neck }} cm</li>
                </ul>
              </dd>
            </dl>

            <dl>
              <dt class="u-inline">
                素材：
              </dt>
              <dd class="u-inline">
                {{ currentProduct.material }}
              </dd>
            </dl>
            <hr>
            <dl>
              <dt class="u-inline">
                価格：
              </dt>
              <dd class="u-inline">
                {{ currentProduct.price }}
              </dd>
            </dl>
            <dl>
              <dt class="u-inline">
                在庫数：
              </dt>
              <dd class="u-inline">
                {{ currentProduct.stock }}
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
    </section>
  </v-container>
</template>

<script>
export default {
  asyncData ({ store }) {
    const jsonAll = store.getters['json/getAll']

    return { jsonAll }
  },
  data () {
    return {
      sample: 'text',
      currentProduct: {},
      query: {}
    }
  },
  created () {
    const category = this.$route.query.category
    // const subcategory = this.$route.query.subcategory;
    const productId = this.$route.query.id

    /* if (subcategory) {
      const pageProduct = this.jsonAll[category][subcategory].find(
        (el) => el.id === productId
      );
      this.currentProduct = pageProduct;
    } else { */
    const pageProduct = this.jsonAll[category].find(
      el => el.id === productId
    )
    this.currentProduct = pageProduct
    // }
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
