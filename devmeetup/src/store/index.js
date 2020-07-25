import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore');

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
        setLoadedMeetups (state, payload) {
          state.loadedMeetups = payload
        },
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
      loadMeetups ({commit}) {
        firebase.firestore().collection('meetups').get()
          .then((querySnapshot) => {
            const meetups = []
            querySnapshot.forEach((doc) => {
              meetups.push({
                ...doc.data(),
                id: doc.id,
              })
            })
            commit('setLoadedMeetups', meetups)
            commit('setLoading', false)
          })
          .catch(
            (error) => {
              console.log(error)
              commit('setLoading', true)
            }
          )
      },
      createMeetup ({commit, getters}, payload) {
          const meetup = {
            title: payload.title,
            location: payload.location,
            imageUrl: payload.imageUrl,
            description: payload.description,
            date: payload.date,
            //id: 'kfdlsfjslakl12'
            creatorId: getters.user.id
          }
          firebase.firestore().collection('meetups').add(meetup)
            .then((data) => {
              const key = data.id
              commit('createMeetup', {
                ...meetup,
                id: key
              })
            })
            .catch((error) => {
              console.log(error)
            })
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
      autoSignIn ({commit}, payload) {
        commit('setUser', {id: payload.uid, registerdMeetups: []})
      },
      logout ({commit}) {
        firebase.auth().signOut()
        commit('setUser', null)
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