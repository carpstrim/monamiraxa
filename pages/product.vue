<template>
  <v-container color="yellow lighten-5">
    <section>
      <v-container class="pa-0">
        <h2 class="mt-3 ml-3">
          {{ currentProduct.name }}
        </h2>
        <v-row class="mt-2" dense>
          <!-- TODO: カルーセルに差し替え予定 -->
          <v-col style="max-wispanh:400px" cols="12" xs="12" sm="6">
            <v-carousel
              v-model="nowImageNum"
              style="max-height:400px; max-wispanh:400px"
              class="pa-3"
              hide-delimiters
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(image,n) in currentProduct.images"
                :key="'image_' + n"
                :src="image.fields.file.url"
                aspect-ratio="1"
                cover
              />
            </v-carousel>
            <v-row class="mt-3" no-gutters>
              <v-col
                v-for="(image,m) in currentProduct.images"
                :key="'imageSelect_' + m"
                class="pl-3"
                cols="2"
                xs="2"
              >
                <v-card @click="nowImageNum = m">
                  <v-img :src="image.fields.file.url" aspect-ratio="1" />
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" xs="12" sm="6">
            <p class="mt-3">
              {{ currentProduct.description }}
            </p>
            <p>
              <span class="u-va-top">サイズ：</span>
              <span class>
                <ul>
                  <li>約 {{ currentProduct.vertical }} cm</li>
                  <li>約 {{ currentProduct.horizontal }} cm</li>
                  <li>約 {{ currentProduct.neck }} cm</li>
                </ul>
              </span>
            </p>

            <p>
              <span class>素材：</span>
              <span class>{{ currentProduct.material }}</span>
            </p>
            <v-divider />
            <span class>価格：</span>
            <span class>{{ currentProduct.price }}円</span>
            <br>
            <div v-if="currentProduct.stock > 0">
              <span class>在庫数：</span>
              <span class>{{ currentProduct.stock }}</span>
            </div>
            <div v-else class="red--text font-weight-bold">
              SOLD OUT
            </div>

            <div v-if="currentProduct.stock > 0" style="width:150px">
              <v-select dense placeholder="購入数を選択" :items="items" />
            </div>

            <v-btn
              :disabled="!(currentProduct.stock > 0)"
              color="light-blue darken-1"
              dark
              block
            >
              カートに入れる
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  async asyncData ({ query }) {
    const currentProduct = await client
      .getEntries({
        content_type: 'products',
        'fields.id': query.id
      })
      .then((e) => {
        return e.items[0].fields
      })

    return { currentProduct }
  },
  data () {
    return {
      sample: 'text',
      currentProduct: {},
      query: {},
      nowImageNum: 0,
      items: []
    }
  },
  created () {
    this.items = [...Array(this.currentProduct.stock + 1).keys()]
  }
}
</script>

<style scoped lang="scss">
.order_quantity {
  background-color: white;
  border: 1px solid $color-default;
  //border-radius: 5px;
}
</style>
