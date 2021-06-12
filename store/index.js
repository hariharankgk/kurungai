import axios from 'axios';

export const state = () => ({
    photoAlbums: [],
});

export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }

export const actions = {
    getPhotoAlbum({ commit }) {
        axios.get('http://localhost/vue-nuxt/kurungai/api/ajax.php?gAlbum=1')
        .then(
            response => {
                console.log(response);
            }
        )
    }
}