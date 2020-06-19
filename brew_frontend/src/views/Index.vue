<template>
  <div class="index">
    <section class="brewing-now">
      <h2>Brewing Now</h2>
    </section>
    <section>
      <h2>Calculators</h2>
    </section>
    <section>
      <h2>Your Recipes</h2>
      <ul data-test-recipe-list>
        <RecipeCard
          v-for="recipe in recipes"
          :key="recipe.name"
          :recipe="recipe" />
      </ul>
    </section>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'Index',
  components: {
    RecipeCard,
  },
  data() {
    return {
      recipes: [{
        id: 1,
        name: "Tobie's IPA",
        type: 'IPA',
        ABV: '6%',
        IBU: '80',
        SRM: 9,
      }, {
        id: 2,
        name: "Lyndsi's Lager",
        type: 'Lager',
        ABV: '4%',
        IBU: '10',
        SRM: 2,
      }],
    };
  },
};
</script>

<style lang='scss'>
.index {
    display: flex;
    height: 100%;
    flex-flow: row wrap;
    justify-content: space-around;
    overflow: scroll;

    section {
      margin: 2.5%;
      padding: $xl;
      width: 45%;
      border-radius: 10px;
      box-shadow: 5px 5px 15px $black;

      ul {
        padding-top: $large;
      }

      h2 {
        @include title-font;
      }
    }

    .brewing-now {
      width: 95%;
    }
  }
</style>
