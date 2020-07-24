<template>
  <v-container>
    <v-row justify="center"> 
      <v-col xs="12" sm="6">
        <h2 class="secondary--text">Create a Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <form @submit.prevent="onCreateMeetup">
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="imageUrl"
                v-model="imageUrl"
                required></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <img :src="imageUrl" height="150">
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="description"
                multi-line
                required></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-btn 
                class="primary" 
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && 
          this.location !== '' && 
          this.imageUrl !== '' && 
          this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>