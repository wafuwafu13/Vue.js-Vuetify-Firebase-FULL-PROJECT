import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app'
require('firebase/auth')

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      loadedMeetups: [
        { imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/newyork_travel_800.jpg', 
          id: 'jfiorjafaifinrg212',
          title: 'Meetup in New york',
          date: new Date(),
          location: 'new york',
          description: 'awesome'
        },
        { imageUrl: 'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=612x612', 
          id: 'jfeaiufeffag2332',
          title: 'Meetup in Paris',
          date: new Date(),
          location: 'paris',
          description: 'awesome'
        },
      ],
      user: null,
      loading: false,
      error: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
          state.loading = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        }
    },
    actions: {
      createMeetup ({commit}, payload) {
          const meetup = {
            title: payload.title,
            location: payload.location,
            imageUrl: payload.imageUrl,
            description: payload.description,
            date: payload.date,
            id: 'kfdlsfjslakl12'
          }
          // Reachout to firebase and store it
          commit('createMeetup', meetup)
      },
      signUserUp ({commit}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                  id: user.user.uid,
                  registerdMeetups: []
              }
              commit('setUser', newUser)
            }
          )
          .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            }
          )
      },
      signUserIn ({commit}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                id: user.user.uid,
                registerdMeetups: [] // なにかあるはず
              }
              commit('setUser', newUser)
            }
          )
          .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            }
          )
      },
      clearError ({commit}) {
        commit('clearError')
      }
    },
    getters: {
      loadedMeetups (state) {
          return state.loadedMeetups.sort((meetupA, meetupB) => {
              return meetupA.date > meetupB.date
          })
      },
      featuredMeetups (state, getters) {
          return getters.loadedMeetups.slice(0, 5)
      },
      loadedMeetup (state) {
          return (meetupId) => {
              return state.loadedMeetups.find((meetup) => {
                  return meetup.id == meetupId
              })
          }
      },
      user (state) {
        return state.user
      },
      loading (state) {
        return state.loading
      },
      error (state) {
        return state.error
      }
    }
})