<template>
  <v-app>
    <main class="main">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        stateless
        app
        fixed
        color="primary"
        class="drawer"
        :temporary="temporary"
        width="220"
      >
        <v-list>
          <v-list-item v-if="temporary" class="d-flex justify-end mr-n8">
            <v-list-item-action>
              <v-icon @click="drawer = false">
                mdi-arrow-left
              </v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            color="#443947"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <hr>
        <v-list>
          <v-list-item
            v-for="(item, i) in category"
            :key="i"
            color="#443947"
            :to="item.to"
            @click="drawer = !$vuetify.breakpoint.smAndDown"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.main" />
              <v-list v-if="item.sub">
                <v-list-item
                  v-for="subitem in item.sub"
                  :key="subitem.id"
                  :to="subitem.to"
                >
                  {{ subitem }}
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app class="header" color="yellow lighten-5">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

        <v-toolbar-title class="u-font-kalam" v-text="title" />
        <v-spacer />
      </v-app-bar>

      <v-content>
        <v-row class="mr-2 ml-2 mt-4 d-flex justify-space-between" no-gutters>
          <v-col class="d-flex flex-column align-center" cols="1" xs="2" md="1">
            <v-img class="mt-1" height="30" contain :src="instagram">
              <v-card
                height="100%"
                color="transparent"
                href="https://www.instagram.com/monamiraxa/"
              />
            </v-img>
            <span class="icon">Instagram</span>
          </v-col>
          <v-col cols="6" xs="6" md="9" />
          <v-col class="d-flex flex-column align-center" cols="1" xs="3" md="1">
            <v-img height="30" contain :src="cartIcon">
              <v-card height="100%" tile color="transparent" to="/cart" />
            </v-img>
            <span class="icon">カート</span>
          </v-col>
          <v-col class="d-flex flex-column align-center" cols="1" xs="2" md="1">
            <v-img height="30" contain :src="homeIcon">
              <v-card height="100%" tile color="transparent" to="/" />
            </v-img>
            <span class="icon">ホーム</span>
          </v-col>
        </v-row>
        <nuxt style="margin-bottom:100px" />
      </v-content>

      <v-footer :app="$vuetify.breakpoint.smAndUp" class="footer d-flex justify-center">
        <v-btn text to="/">
          ホーム
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/about">
          お店のこと
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/flow">
          お買い物の流れ
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/contact">
          お問い合わせ
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/about#postage">
          送料について
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/about#payment">
          お支払いについて
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/privacy-policy">
          プライバシーポリシー
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text to="/terms-of-sale">
          特定商取引法に基づく表記
        </v-btn>
      </v-footer>
    </main>
  </v-app>
</template>

<script>
import instagram from '~/assets/img/instagram.png'
import homeIcon from '~/assets/img/home_icon.png'
import cartIcon from '~/assets/img/cart_icon.png'

export default {
  data () {
    return {
      instagram,
      homeIcon,
      cartIcon,
      clipped: false,
      drawer: false,
      permanent: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-store-outline',
          title: 'HOME',
          to: '/'
        },
        {
          icon: 'mdi-information-outline',
          title: 'お店のこと',
          to: '/about'
        },
        {
          icon: 'mdi-cart-outline',
          title: 'お買い物の流れ',
          to: '/flow'
        },
        {
          icon: 'mdi-email-outline',
          title: 'お問い合わせ',
          to: '/contact'
        }
      ],
      category: [
        {
          icon: 'mdi-circle-small',
          main: 'スタイ',
          to: '/#sty',
          sub: ['もくもく', 'たまご', 'ドーナツ', 'その他']
        },
        {
          main: 'よだれカバー',
          to: '/#droolcover'
        },
        {
          main: 'ガーゼハンカチ',
          to: '/#gauzehandkerchief'
        },
        {
          main: 'にぎにぎ',
          to: '/#niginigi'
        },
        {
          main: 'おなまえタグ',
          to: '/#nametag'
        },
        {
          main: 'その他',
          to: '/#other'
        },
        {
          main: 'ラッピング',
          to: '/#wrapping'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'mon ami raxa'
    }
  },
  computed: {
    temporary () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  created () {
    this.drawer = !this.$vuetify.breakpoint.smAndDown
    console.log(this.drawer)
  },

  methods: {}
}
</script>

<style>
.icon {
  font-size: 7pt;
  white-space: nowrap;
}
</style>
