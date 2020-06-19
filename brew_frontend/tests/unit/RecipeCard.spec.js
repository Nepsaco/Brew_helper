import { shallowMount } from '@vue/test-utils';
import RecipeCard from '@/components/RecipeCard.vue';
import srmObject from '@/assets/srm-swatch';

describe('RecipeCard.vue', () => {
  const $RecipeCard = shallowMount(RecipeCard, {
    propsData: {
      recipe: {
        id: 1,
        name: "Tobie's IPA",
        type: 'IPA',
        ABV: '6%',
        IBU: '80',
        SRM: 9,
      },
    },
  });
  describe('computed', () => {
    describe('getBackgroundColor', () => {
      const { SRM } = $RecipeCard.vm.recipe;
      it('gets a color from the srm object', () => {
        expect(srmObject[SRM]).toBe('#d1731c');
      });
      it('if srm is within 40 return css object', () => {
        expect($RecipeCard.vm.getBackgroundColor).toMatchObject({ background: '#d1731c' });
      });
      it('if srm is over 40 return css object', () => {
        $RecipeCard.setProps({ recipe: { SRM: 50 } });
        expect($RecipeCard.vm.getBackgroundColor).toMatchObject({ background: '#240b0b' });
      });
      it('if srm is under 1 return grey css object', () => {
        $RecipeCard.setProps({ recipe: { SRM: 0 } });
        expect($RecipeCard.vm.getBackgroundColor).toMatchObject({ background: 'hsl(0 0% 35%)' });
      });
      it('if srm is non exsitant return grey css object', () => {
        $RecipeCard.setProps({ recipe: { SRM: '' } });
        expect($RecipeCard.vm.getBackgroundColor).toMatchObject({ background: 'hsl(0 0% 35%)' });
      });
    });
  });
});
