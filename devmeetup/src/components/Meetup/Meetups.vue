<template>
  <v-container>
    <v-row justify="center" v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-col xs="12" sm="10">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="1" sm="3">
                <v-img
                  :src='meetup.imageUrl'
                  height="130px"></v-img>
              </v-col>
              <v-col xs="2" sm="8">
                <v-card-title>
                  <div>
                    <h3 class="white--text">{{ meetup.title }}</h3>
                    <h6>{{ meetup.date }}</h6>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn text :to="'/meetups/' + meetup.id">
                    <v-icon left>mdi-arrow-right</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>