//  ~/plugins/vuex-persistedstate.js
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
   // console.log(window);
    createPersistedState({
        // other options...
        storage: window.localStorage
  })(store)
}