import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginDetails: {
      'gattupalliravi1@gmail.com': 'FGJMJLlortq@1',
      'raviteja.gattupalli@fissionlabs.com': '123456abc',
    },
    userSelectedItems: [],
    restruantDetails: {
      bawarchi: {
        rating: 4.25,
        type: 'Indain/Asian',
        items: {
          Biriyani: 170,
          fryBiriyani: 200,
          chickenBiriyani: 250,
        },
        name: 'Bawarchi',
      },
      PizzaHut: {
        rating: 4.5,
        type: 'Japanese',
        items: {
          Pizza: 150,
          pizzaWithExtraCheese: 250,
          chickenPizza: 350,
        },
        name: 'Pizzahut',
      },
      yiJing: {
        rating: 3,
        type: 'Chinese',
        items: {
          Noodles: 105,
          Manchuria: 200,
          chickenManchuria: 250,
        },
        name: 'YijIng',
      },
      Cafe: {
        rating: 4,
        type: 'Indian',
        items: {
          Coffe: 40,
          Tea: 50,
          BlackCoffe: 100,
        },
        name: 'Cafe',
      },
      IndainTea: {
        rating: 3.5,
        type: 'Indian',
        items: {
          Coffe: 40,
          Tea: 50,
          BlackCoffe: 100,
        },
        name: 'IndianTea',
      },
    },
    loggedin: false,
    loginid: '',
  },
  mutations: {
    setLoggedin: (state, payload) => {
      state.loggedin = payload;
    },
    setUserItems: (state, payload) => {
      state.userSelectedItems = payload;
    },
    setLoginId: (state, payload) => {
      state.loginid = payload;
    },
    setLogindetails: (state, payload) => {
      state.loginDetails = payload;
    },
  },
  actions: {
    setLoginAction: (state, payload) => {
      state.commit('setLoggedin', payload);
    },
    setUserItemsAction: (state, payload) => {
      state.commit('setUserItems', payload);
    },
    setIdAction: (state, payload) => {
      state.commit('setLoginId', payload);
    },
    setDetailsAction: (state, payload) => {
      state.commit('setLogindetails', payload);
    },
  },
  modules: {
  },
  getters: {
    getUsersData: (state) => state.loginDetails,
    getLoginData: (state) => state.loggedin,
    getRestDetails: (state) => state.restruantDetails,
    getUserItems: (state) => state.userSelectedItems,
    getLoginId: (state) => state.loginid,
  },
});
