<template>
  <div class="details-calc max-w-screen-lg m-auto pt-8">
    <h2 class="pb-4">Calculation Details</h2>
    <div class="details-wrapper flex justify-around flex-wrap m-auto">
      <div class="details-col max-w-sm w-2/5">
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            {{ formatUSD(property_price) }}
          </p>
          <p class="details-count text-lg font-semibold">
            11111
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Down Payment
          </p>
          <p class="details-count text-lg font-semibold">
            $0.00
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Total Loan Amount
          </p>
          <p class="details-count text-lg font-semibold">
            $550,000.00
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Interest Rate
          </p>
          <p class="details-count text-lg font-semibold">
            4.000%
          </p>
        </div>
      </div>
      <div class="details-col max-w-sm w-2/5">
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Principal & Interest
          </p>
          <p class="details-count text-lg font-semibold">
            $2,625.78
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Taxes & HOA
          </p>
          <p class="details-count text-lg font-semibold">
            $0.00
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Hazard Insurance
          </p>
          <p class="details-count text-lg font-semibold">
            $66.67
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Mortgage Insurance
          </p>
          <p class="details-count text-lg font-semibold">
            $0.00
          </p>
        </div>
        <div class="details-block flex justify-between py-3 text-body border-dashed border-b border-primary-light">
          <p class="details-label text-lg font-semibold">
            Monthly Payment
          </p>
          <p class="details-count text-lg font-semibold">
            $2,692.45
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        property_price: 250000,
        down_payment: 8750,
        interest_rate: 4,
        annual_insurance: 10,

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

