<template>
  <v-app>
    <v-toolbar dark max-height="64" class="purple darken-1">
      <v-app-bar-nav-icon 
        @click.native.stop="sideNav = !sideNav" 
        class="hidden-sm-and-up">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="sideNav">
      <v-list>
        <v-list-item 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'mdi-account-supervisor', title: 'View Meetups', link: '/meetups'},
      { icon: 'mdi-map-marker', title: 'Organize Meetup', link: '/meetup/new'},
      { icon: 'mdi-account', title: 'Profile', link: '/profile'},
      { icon: 'mdi-face', title: 'Sign up', link: '/signup'},
      { icon: 'mdi-lock-open', title: 'Sign in', link: '/signin'},
    ]
  })
}
</script>
