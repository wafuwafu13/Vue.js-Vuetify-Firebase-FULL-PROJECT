<template>
  <v-app>
    <v-toolbar dark class="purple darken-1">
      <v-app-bar-nav-icon 
        @click.native.stop="sideNav = !sideNav" 
        class="hidden-sm-and-up">
      </v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon left>mdi-account-supervisor</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-action>
          <v-list-item-content>View Meetups</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    sideNav: false
    //
  })
}
</script>
