import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      loadedMeetups: [
        { imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/newyork_travel_800.jpg', 
          id: 'jfiorjafaifinrg212',
          title: 'Meetup in New york',
          date: '2017-07-17'
        },
        { imageUrl: 'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=612x612', 
          id: 'jfeaiufeffag2332',
          title: 'Meetup in Paris',
          date: '2017-07-19'
        },
      ],
      user: {
          id: 'ifjaeiro23',
          registerdMeetups: ['jfeaiufeffag2332']
      }
    },
    mutations: {},
    actionis: {},
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
    }
})