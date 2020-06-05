<template>
  <div id="app">
    <header>
      <h1 data-test-main-heading>
        Brew Helper
      </h1>
      <Nav v-if="displayNav" />
      <button
        v-else
        data-test-nav-button
        @click="toggleNav">
        &#9776;
      </button>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav';

export default {
  name: 'App',
  components: {
    Nav,
  },
  data() {
    return {
      displayNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.displayNav = !this.displayNav;
    },
  },
};
</script>

<style lang="scss">
#app {
    header {
        display: flex;
        justify-content: space-between;
        padding: $xxxl;
        @include header-font;
    }
}
</style>
