import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase/app'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store'
import DateFilter from './filters/date'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyA5I2U8ceSF8Ae13ySPbYaHaTf0l3fkvGI",
      authDomain: "devmeetup-17ee3.firebaseapp.com",
      databaseURL: "https://devmeetup-17ee3.firebaseio.com",
      projectId: "devmeetup-17ee3",
      storageBucket: "devmeetup-17ee3.appspot.com",
    })

  }
}).$mount('#app')
