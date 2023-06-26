// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     name: 'mohamed gamal',
//     title: 'front end'
//   },
//   mutations: {
//     changeTitle(state) {
//       console.log(state)
//     }
//   }
// })
import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'mohamed gamal',
    title: 'front end'
  },
  getters: {},
  mutations: {
    chanegTitle(state) {
      state.title = 'web developer'
    }
  },
  actions: {},
  modules: {}
})
