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
          <v-list-item v-for="(item, i) in category" :key="i" color="#443947">
            <v-list-item-content>
              <v-list-item-title v-text="item.main" />
              <v-list v-if="item.sub">
                <v-list-item v-for="subitem in item.sub" :key="subitem.id">
                  {{ subitem }}
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        :clipped-left="clipped"
        fixed
        app
        class="header"
        elevation="2"
        color="yellow lighten-5"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

        <v-toolbar-title class="u-font-kalam" v-text="title" />
        <v-spacer />
      </v-app-bar>
      <v-content>
        <nuxt />
      </v-content>

      <v-footer app class="footer d-flex justify-center">
        <v-btn text>
          ホーム
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          お店のこと
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          お買い物の流れ
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          お問い合わせ
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          送料について
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          お支払いについて
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          プライバシーポリシー
        </v-btn>
        <v-divider class="mt-1 mb-1" vertical />
        <v-btn text>
          特定商取引法に基づく表記
        </v-btn>
      </v-footer>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
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
          sub: ['もくもく', 'たまご', 'ドーナツ', 'その他']
        },
        {
          main: 'よだれカバー'
        },
        {
          main: 'ガーゼハンカチ'
        },
        {
          main: 'にぎにぎ'
        },
        {
          main: 'おなまえタグ'
        },
        {
          main: 'その他'
        },
        {
          main: 'ラッピング'
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
  }
}
</script>
