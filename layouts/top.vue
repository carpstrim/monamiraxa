<template>
  <v-app>
    <main class="main">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        color="primary"
      >
        <div class="drawer">
          <v-list>
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
            >
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
        </div>
      </v-navigation-drawer>
      <v-app-bar
        :clipped-left="clipped"
        fixedd
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

      <v-footer
        class="footer"
        :fixed="fixed"
        app
      >
        <span>&copy; {{ new Date().getFullYear() }}</span>
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
      fixed: false,
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
          sub: [
            'もくもく',
            'たまご',
            'ドーナツ',
            'その他'
          ]
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
  }
}
</script>
