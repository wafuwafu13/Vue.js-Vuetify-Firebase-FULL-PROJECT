<template>
  <v-container>
    <v-col xs12 sm6>
      <v-card>
        <v-card-text>
          <v-container>
            <form @submit.prevent="onSignup">
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
                  <v-text-field
                    name="confirmpassword"
                    label="Confirm Password"
                    id="confirmpassword"
                    v-model="confirmPassword"
                    type="confirmpassword"
                    :rules="[comparePasswords]"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col xs12>
                  <v-btn type="submit">Sign up</v-btn>
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
      comparePasswords () {
        return this.password !== this.confirmPasswords ? 'Password do not match' : ''
      },
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
      onSignup () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>
