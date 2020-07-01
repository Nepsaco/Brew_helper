import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import storeConfig from '@/store';
import { cloneDeep } from 'lodash';

describe('Store', () => {
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
  });
  describe('Getters', () => {
    describe('getAllRecipes', () => {
      const recipes = [{
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
      }];

      it('returns a array length equal to recipes in state', () => {
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.replaceState({
          recipes,
        });
        expect(store.getters.getAllRecipes.length).toBe(recipes.length);
      });
    });
  });
});
