<template>
  <div class="recipe">
    <h2 data-test-recipes>
      Recipes {{ $route.params.id }}
    </h2>
    <ul>
      <li>Brewer: Tobie</li>
      <li>Recipe Name: Bad ass brew</li>
      <li>Beer Type: IPA</li>
      <li>Brew Date: 1/1</li>
      <li>Batch Size: 5 gallons</li>
      <li>Boil Time: 1 hour</li>
      <li>Batch number: 1</li>
      <li>Expected Efficiency: 70%</li>
    </ul>
    <p>Grains</p>
    <ul>
      <li>
        <p>Type: Maris Otter</p>
        <p>Amount: 16lbs</p>
      </li>
      <li>
        <p>Type: Maris Otter</p>
        <p>Amount: 16lbs</p>
      </li>
      <li>
        <p>Type: Maris Otter</p>
        <p>Amount: 16lbs</p>
      </li>
    </ul>
    <p>Hops</p>
    <ul>
      <li>
        <p>Type: Citra</p>
        <p>Amount: 1 oz</p>
        <p>AA: 4.5%</p>
        <p>Boil Time: 45 min</p>
      </li>
    </ul>
    <p>Yeast</p>
    <ul>
      <li>
        <p>Type: wyeast-100</p>
        <p>Avg Attenuation: 75%</p>
        <p>Optimum Temperature: 80F</p>
        <p>Starter: No</p>
      </li>
    </ul>
    <p>Mash Schedule</p>
    <ul>
      <li>
        <p>Name/infusion: hops</p>
        <p>Amount: 1oz</p>
        <p>Temperature: 120F</p>
        <p>Time: 45</p>
      </li>
    </ul>
    <p>Water Adjustments</p>
    <ul>
      <li>Name</li>
      <li>Amount</li>
    </ul>
    <p>Batch Vital Stats</p>
    <ul>
      <li>Expected Original Gravity: 1.020</li>
      <li>Expected Final Gravity: 1.020</li>
      <li>Expected Alcohol By Volume: 6%</li>
      <li>IBU's: 60</li>
      <li>SRM: 10</li>
      <li>Brewhouse Efficiency: 75%</li>
      <li>Carbonation Level: 2bars</li>
    </ul>
    <p>Cost</p>
    <ul>
      <li>Grains: $10.00</li>
      <li>Hops: $10.00</li>
      <li>Yeast: $10.00</li>
      <li>Other: $10.00</li>
      <li>Total: $10.00</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
};
</script>

<style lang="scss">
</style>
