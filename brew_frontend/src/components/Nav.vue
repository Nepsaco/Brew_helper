<template>
  <nav
    data-test-nav-menu
    class="sidebar">
    <button @click="$emit('toggle-nav')">
      &times;
    </button>
    <ul data-test-nav-list>
      <li @click="$emit('toggle-nav')">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li @click="$emit('toggle-nav')">
        <router-link to="styles">
          Styles
        </router-link>
      </li>
      <li @click="$emit('toggle-nav')">
        <router-link to="recipes">
          Recipes
        </router-link>
      </li>
      <li @click="$emit('toggle-nav')">
        <router-link to="account">
          Account
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
.sidebar {
    width: 25vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    background: $white;
    padding: $xxl;
            box-shadow: 5px 5px 15px $black;

    button {
        align-self: flex-end;
        font-size: $font-xxxxxl;
    }

    ul {
        display: flex;
        flex-flow: column;
        height: 25%;
        justify-content: space-between;

        @include title-font;

        a {
            text-decoration: none;
            color: $black;

            &:hover {
                color: $blue;
            }
        }
    }
}
</style>
