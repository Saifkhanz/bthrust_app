import { createStore } from "vuex";
import axios from "axios";
// export default createStore({
const state = {
  count: 10,
  products: [],
};
const mutations = {
  Increment(state) {
    state.count++;
  },
  Decrement(state) {
    state.count--;
  },
  SET_PRODUCT(state, payload) {
    state.products = payload;
    console.log("test", state.products, payload);
  },
};
const actions = {
  increment: ({ commit }) => commit("Increment"),
  decrement: ({ commit }) => commit("Decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  async fetchProduct({ commit }, currentPage) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?page=${currentPage}`
      );
      console.log("response", response.data);
      commit("SET_PRODUCT", response.data);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
// getters are functions.
const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
// });
