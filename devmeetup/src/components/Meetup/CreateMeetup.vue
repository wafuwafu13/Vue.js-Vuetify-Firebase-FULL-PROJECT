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
              <h4>Choose a Data & Time</h4>
            </v-col>
          </v-row>
          <v-row justify="center" class="mb-2">
            <v-col xs="12" sm="6">
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xs="12" sm="6">
              <v-time-picker v-model="time" format="24"></v-time-picker>
              <p>{{ time }}</p>
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
        description: '',
        date: new Date().toISOString().substr(0, 10),
        time: new Date(),
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && 
          this.location !== '' && 
          this.imageUrl !== '' && 
          this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        console.log(date)
        return date
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
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>