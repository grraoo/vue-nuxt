import Vuex from 'vuex';
import MYDATA from '../pages/data/data.json';


const store = () => new Vuex.Store({

  state: {
    counter: 0,
    items: MYDATA,
    total: MYDATA.length
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
  }
});

export default store;
