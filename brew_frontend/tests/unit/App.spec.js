import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';

describe('App.vue', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();
  const $App = shallowMount(App, {
    localVue,
    router,
  });
  describe('methods', () => {
    describe('toggleNav', () => {
      it('changes displayNav from true to false', () => {
        $App.setData({ displayNav: true });
        $App.vm.toggleNav();

        expect($App.vm.displayNav).toBe(false);
      });
      it('changes displayNav from false to true', () => {
        $App.setData({ displayNav: false });
        $App.vm.toggleNav();

        expect($App.vm.displayNav).toBe(true);
      });
    });
  });
});
