<template>
  <div class="recipe-card">
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
      return this.recipe.SRM
        ? { background: srmObject[this.recipe.SRM] }
        : { background: 'hsl(0 0% 35%)' };
    },
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
      color: $white;
    }

    .card-body {
      padding: $base;
    }
  }
}

</style>
