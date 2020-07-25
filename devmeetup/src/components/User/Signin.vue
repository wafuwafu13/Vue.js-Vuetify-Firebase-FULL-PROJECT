<template>
  <v-container>
    <v-col xs12 sm6>
      <v-card>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignin">
              <v-row>
                <v-col xs12>
                  <v-text-field
                    name="email"
                    label="Mail"
                    id="email"
                    v-model="email"
                    type="email"
                    requierd></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    requierd></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col xs12>
                  <v-btn type="submit">Sign in</v-btn>
                </v-col>
              </v-row>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>
