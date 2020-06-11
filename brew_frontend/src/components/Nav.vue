<template>
  <nav
    data-test-nav-menu
    class="sidebar">
    <button>&times;</button>
    <ul data-test-nav-list>
      <li>
        <router-link to="styles">
          Styles
        </router-link>
      </li>
      <li>
        <router-link to="recipes">
          Recipes
        </router-link>
      </li>
      <li>
        <router-link to="account">
          Account
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<styles lang='scss'>
.sidebar {
    width: 25vw;
    height: 100vh;
    background: $white;

    ul {
        display: flex;
        flex-flow: column ;
    }
}
</styles>
