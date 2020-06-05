import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  describe('methods', () => {
    describe('toggleNav', () => {
      it('changes displayNav from true to false', () => {
        const $App = shallowMount(App);
        $App.setData({ displayNav: true });
        $App.vm.toggleNav();

        expect($App.vm.displayNav).toBe(false);
      });
      it('changes displayNav from false to true', () => {
        const $App = shallowMount(App);
        $App.setData({ displayNav: false });
        $App.vm.toggleNav();

        expect($App.vm.displayNav).toBe(true);
      });
    });
  });
});
