// store/index.js
import { createStore } from 'vuex'; // Import createStore function from Vuex for Vue 3
import exampleModule from './modules/exampleModule';

export default createStore({
  modules: {
    exampleModule
  }
});

