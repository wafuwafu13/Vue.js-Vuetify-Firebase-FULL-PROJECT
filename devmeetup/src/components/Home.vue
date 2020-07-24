<template>
  <v-container>
    <v-row>
      <v-col class="text-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-col>
      <v-col class="text-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-carousel style="cursor: pointer">
        <v-carousel-item
          v-for="meetup in meetups"
          :key="meetup.id"
          :src="meetup.imageUrl"
          @click="onLoadMeetup(meetup.id)"
        >
        <div class="title">
          {{ meetup.title }}
        </div>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="mt-2">
      <v-col class="text-center">
        <p>Join our awesome meetups!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    // data () {
    //   return {
    //     meetups: [
    //       { imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/newyork_travel_800.jpg', 
    //         id: 'jfiorjafaifinrg212',
    //         title: 'Meetup in New york' 
    //       },
    //       { imageUrl: 'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=612x612', 
    //         id: 'jfeaiufeffag2332',
    //         title: 'Meetup in Paris' 
    //       },
    //     ]
    //   }
    // },
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup(id) {
        this.$router.push('/meetup/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 30px;
  }
</style>