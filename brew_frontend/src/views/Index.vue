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
      <div class="section-content">
        <ul data-test-recipe-list>
          <RecipeCard
            v-for="recipe in recipes"
            :key="recipe.id"
            :recipe="recipe"
            ul />
        </ul>
      </div>
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
  computed: {
    recipes() {
      return this.$store.getters.getAllRecipes;
    },
  },
};
</script>

<style lang='scss'>
.index {
    display: flex;
    height: 100%;
    flex-flow: row wrap;
    justify-content: space-around;

    section {
      margin: $large;
      padding: $xl;
      width: 45%;
      border-radius: 10px;
      box-shadow: 5px 5px 15px $black;
      overflow: scroll;

      h2 {
        @include title-font;
        margin-bottom: $base;
      }

      .section-content {
        max-height: 30vh;
        overflow: scroll;

        ul {
          display: flex;
          flex-flow: row wrap;
        }
      }
    }

    .brewing-now {
      width: 95vw;
      max-height: 50vh;
    }
  }
</style>
