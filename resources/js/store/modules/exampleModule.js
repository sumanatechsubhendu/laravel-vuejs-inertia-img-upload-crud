// store/modules/exampleModule.js
const state = {
    exampleData: null
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
    }
  };

  const mutations = {
    setExampleData(state, data) {
      state.exampleData = data;
    }
  };

  export default {
    state,
    getters,
    actions,
    mutations
  };
