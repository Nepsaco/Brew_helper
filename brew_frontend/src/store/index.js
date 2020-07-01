export default {
  state: {
    recipes: [{
      id: 1,
      name: "Tobie's IPA",
      type: 'IPA',
      ABV: '6%',
      IBU: '80',
      SRM: 9,
    }, {
      id: 2,
      name: "Lyndsi's Lager",
      type: 'Lager',
      ABV: '4%',
      IBU: '10',
      SRM: 2,
    }],
  },
  getters: {
    getAllRecipes(state) {
      return state.recipes;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
};
