<template>
  <div id="app">
    <header>
      <h1 data-test-main-heading>
        Brew Helper
      </h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100vw;

    .header {
        padding: $spacing-8;
    }
}
</style>
