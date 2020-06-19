<template>
  <div id="app">
    <div class="app">
      <header>
        <h1 data-test-main-heading>
          <router-link to="/">
            Brew Helper
          </router-link>
        </h1>
        <button
          v-if="!displayNav"
          data-test-nav-button
          @click="toggleNav">
          &#9776;
        </button>
      </header>
      <main>
        <router-view />
      </main>
    </div>
    <Nav
      v-if="displayNav"
      @toggle-nav="toggleNav" />
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
    display: flex;
    background: $white;
    height: 100vh;

    .app {
        width: 100%;
        header {
            display: flex;
            height: 25vh;
            justify-content: space-between;
            align-items: center;
            padding: $xxxl;
            @include header-font;

            a {
                color: $black;
            }

            button {
                font-size: $font-xxxl;
            }
        }
    }

    main {
      height: 75vh;
    }
}
</style>
