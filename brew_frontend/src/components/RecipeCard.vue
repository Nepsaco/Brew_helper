<template>
  <div class="recipe-card">
    <router-link :to="{ name: 'recipes', params: { id: recipe.id }, props: { recipe } }">
      <li data-test-recipe-card>
        <div
          class="card-header"
          :style="getBackgroundColor">
          <p :data-test-="recipe.id">
            {{ recipe.name }}
          </p>
        </div>
        <div class="card-body">
          <p>Type: {{ recipe.type }}</p>
          <p>ABV: {{ recipe.ABV }}</p>
          <p>IBU: {{ recipe.IBU }}</p>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
import srmObject from '@/assets/srm-swatch';

export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getBackgroundColor() {
      if (this.recipe.SRM <= 40 && this.recipe.SRM > 0) {
        return { background: srmObject[this.recipe.SRM] };
      } if (this.recipe.SRM > 40) {
        return { background: srmObject[40] };
      }
      return { background: 'hsl(0 0% 35%)' };
    },
  },
};
</script>

<style lang='scss'>
.recipe-card {
    margin: $small;
    width: 45%;

  li {
    color: $black;
    border-radius: 10px;
    box-shadow: 2px 2px 5px $black;
    @include body-font;

    .card-header {
      border-radius: 10px 10px 0 0 ;
      padding: $base;
      color: $white;
      text-shadow: 1px 1px 1px $grey;
    }

    .card-body {
      padding: $base;
    }

    &:hover {
      box-shadow: 3px 3px 5px $black;
    }

    &:active {
      box-shadow: 1px 1px 5px $black;
    }
  }
}
</style>
