<template>
  <v-app>
    <v-card
      class='overflow-hidden rounded-0 frame-mobile'
      outlined
    >
      <v-app-bar
        color='primary'
        dark
      >
        <v-app-bar-nav-icon @click='drawer = true'></v-app-bar-nav-icon>

        <v-toolbar-title>Random Quotes</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
        v-model='drawer'
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model='group'
            active-class='deep-purple--text text--accent-4'
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<style scoped>
.frame-mobile {
  min-height: 100vh;
}

@media (min-width: 770px) {
  .frame-mobile {
    max-width: 414px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
