// store/modules/exampleModule.js
const state = {
    exampleData: []
  };

  const getters = {
    getExampleData: state => state.exampleData
  };

  const actions = {
    fetchExampleData({ commit }) {
      // Perform an asynchronous operation, e.g., fetch data from an API
      // For demonstration purposes, let's just simulate a delay
      setTimeout(() => {
        // Simulated data
        const data = 'Example data from an API';
        commit('setExampleData', data);
      }, 1000);
    },
    addToCart({ commit }, listing) {
        // Here, you would typically perform some logic to add the listing to the cart state
        // For demonstration, let's assume we have a 'cart' module in Vuex
        commit('setExampleData', listing);
      },
  };

  const mutations = {
    setExampleData(state, data) {
      state.exampleData.push(data);
    },
    deleteFromCart(state, index) {
        state.exampleData.splice(index, 1); // Remove the item at the specified index from the cart array
    },
  };

  export default {
    state,
    getters,
    actions,
    mutations
  };
