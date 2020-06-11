<template>
  <div class="index">
    <ul>
      <li class="brewing-now">
        <h2>Brewing Now</h2>
      </li>
      <li>
        <h2>Calculators</h2>
      </li>
      <li>
        <h2>Your Recipes</h2>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang='scss'>
.index {
    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;

        li {
            margin: 2.5%;
            padding: $xl;
            width: 45%;
            border-radius: 10px;
            box-shadow: 5px 5px 15px $black;

            h2 {
                @include title-font;
            }
        }

        .brewing-now {
            width: 95%;
        }
    }
}
</style>
