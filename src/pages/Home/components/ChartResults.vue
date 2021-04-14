<template>
  <div class="flex mt-5">
    <div>
      <hr class="border-hightlight-1 mx-5 border-8">
      <div class="p-5">
        <p class="font-semibold">
          {{ result.breakdown.principal_and_interest }}
        </p>
        <p>Principal & Interest</p>
      </div>
    </div>
    <div>
      <hr class="border-hightlight-2 mx-5 border-8">
      <div class="p-5  border-fill-dark border-solid border-l">
        <p class="font-semibold">
          {{ result.breakdown.taxes_and_hoa }}
        </p>
        <p>Taxes & HOA</p>
      </div>
    </div>
    <div>
      <hr class="border-hightlight-3 mx-5 border-8">
      <div class="p-5  border-fill-dark border-solid border-l">
        <p class="font-semibold">
          {{ result.breakdown.insurance }}
        </p>
        <p>Hazard Insurance</p>
      </div>
    </div>
    <div>
      <hr class="border-hightlight-4 mx-5 border-8">
      <div class="p-5  border-fill-dark border-solid border-l">
        <p class="font-semibold">
          {{ result.breakdown.monthly_hoa }}
        </p>
        <p>Mortgage Insurance</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
    @import '../../../sass/colors.sass'

    hr
      border-width: 8px
      border-radius: 8px
     
    .flex div
        flex-basis: 100%
</style>

<script>
  export default {
    props: {
      result: {
        type: Object,
        required: true
      }
    }
  }
</script>
