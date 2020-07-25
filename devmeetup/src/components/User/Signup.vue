<template>
  <v-container>
    <v-col xs12 sm6>
      <v-card>
        <v-card-text>
          <v-container>
            <form>
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
                    label="Comfirm Password"
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
        return this.passowrd !== this.comfirmPasswords ? 'Password do not match' : ''
      }
    },
    methods: {
      onSignup () {
        // Vuex
        console.log({email: this.email, password: this.passowrd, confirmPassword: this.confirmPassword})
      }
    }
  }
</script>
