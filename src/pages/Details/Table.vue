<template>
  <div class="max-w-screen-md m-auto">
    <h2 class="my-8">Table View</h2>
    <div class="flex">
      <div class="mortgage-item text-center ">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-misc-1 mr-1p ml-1p">
          Payment Month
        </div>
        <div class="border-r border-dashed border-primary-light">
          <p v-for="row in rows"class="font-semibold leading-normal mb-2">
           {{ row.payment }}
          </p>

        </div>
      </div>
      <div class="mortgage-item text-center ">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-highlight-3 mr-1p ml-1p">
          Principal
        </div>
        <div class="border-r border-dashed border-primary-light">
          <p v-for="row in rows"class="font-semibold leading-normal mb-2">
            {{ formatUSD(row.principal) }}
          </p>
        </div>
      </div>
      <div class="mortgage-item text-center ">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-highlight-2 mr-1p ml-1p">
          Interest Paid
        </div>
        <div class="border-r border-dashed border-primary-light">
          <p v-for="row in rows" class="font-semibold leading-normal mb-2">
            {{ formatUSD(row.interest) }}
          </p>
        </div>
      </div>
      <div class="mortgage-item text-center">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-highlight-1 mr-1p ml-1p">
          Tax, Insurance, PMI
        </div>
        <div class="border-r border-dashed border-primary-light">
          <p v-for="row in rows" class="font-semibold leading-normal mb-2">
            {{ formatUSD(row.insurance) }}
          </p>
        </div>
      </div>
      <div class="mortgage-item text-center ">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-misc-1 mr-1p ml-1p">
          Total Payment
        </div>
        <div class="border-r border-dashed border-primary-light">
          <p v-for="row in rows" class="font-semibold leading-normal mb-2">
            {{ formatUSD(row.total) }}
          </p>
        </div>
      </div>
      <div class="mortgage-item text-center ">
        <div class="font-lable text-body text-xs pb-3 mb-3 font-light border-b-4 border-solid border-highlight-4 mr-1p ml-1p">
          New Balance
        </div>
        <div v-for="row in rows" class="">
          <p class="font-semibold leading-normal mb-2">
           {{ formatUSD(row.balance) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .mortgage-item
      flex-basis: 16.666665%
      
  .ml-1p
    margin-left: 1px

  .mr-1p
    margin-right: 1px

</style>

<script>
  export default {
    data() {
      return {
          rows: [
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
              {
                  payment: 'Mar 2020',
                  principal: 792.45,
                  interest: 1833.33,
                  insurance: 66.67,
                  total: 2692.45,
                  balance: 549207.55,
              },
          ],
          title: "Table View"
      }
    },

    methods:{
      formatUSD: function(number){
        number.toLocaleString('en-US',
                              {style: 'currency', currency: 'USD'}
        );
        return(
          new Intl.NumberFormat('en-US',
                                { style: 'currency', currency: 'USD' }
          ).format(number)
        )
      }
    }

  }
</script>
