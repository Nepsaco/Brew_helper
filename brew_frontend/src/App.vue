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
    <transition name="fade">
      <Nav
        v-if="displayNav"
        @toggle-nav="toggleNav" />
    </transition>
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
    .fade-enter-active, .fade-leave-active {
      transition: all .5s ease;
    }
    .fade-enter, .fade-leave-to {
      transform: translateX(25vw);
    }
}
</style>
