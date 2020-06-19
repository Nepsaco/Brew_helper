<template>
  <div class="recipe-card">
    <li data-test-recipe-card>
      <div class="card-header">
        <p data-test-beer-1>
          Tobie's IPA
        </p>
      </div>
      <div class="card-body">
        <p>Type: IPA</p>
        <p>ABV: 6%</p>
        <p>IBU: 60</p>
      </div>
    </li>
    <li data-test-recipe-card>
      <div class="card-header">
        <p data-test-beer-2>
          Lyndsi's Lager
        </p>
      </div>
      <div class="card-body">
        <p>Type: Lager</p>
        <p>ABV: 4%</p>
        <p>IBU: 60</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  data() {
    return {
      srm: 9,
    };
  },
};
</script>

<style lang='scss'>
.recipe-card {
  display: flex;

  li {
    margin: 2.5%;
    width: 45%;
    border-radius: 10px;
    box-shadow: 2px 2px 5px $black;
    @include body-font;

    .card-header {
      border-radius: 10px 10px 0 0 ;
      padding: $base;
    }

    .card-body {
      padding: $base;
    }
  }
}

</style>
