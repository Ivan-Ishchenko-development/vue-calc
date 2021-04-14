<template>
  <div class="mortgage-calc">
    <h2>Table View</h2>
    <div class="mortgage-wrapper">
      <div class="mortgage-item">
        <div class="mortgage-label label1">
          Payment Month
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            Mar 2020
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
      <div class="mortgage-item">
        <div class="mortgage-label label2">
          Principal
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            {{ formatUSD(property_price) }}
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
      <div class="mortgage-item">
        <div class="mortgage-label label3">
          Interest Paid
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            Mar 2020
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
      <div class="mortgage-item">
        <div class="mortgage-label label4">
          Tax, Insurance, PMI
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            Mar 2020
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
      <div class="mortgage-item">
        <div class="mortgage-label label5">
          Total Payment
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            Mar 2020
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
      <div class="mortgage-item">
        <div class="mortgage-label label6">
          New Balance
        </div>
        <div class="mortgage-block-value">
          <p class="mortgage-value">
            Mar 2020
          </p>
          <p class="mortgage-value">
            Apr 2020
          </p>
          <p class="mortgage-value">
            May 2020
          </p>
          <p class="mortgage-value">
            Jun 2020
          </p>
          <p class="mortgage-value">
            Jul 2020
          </p>
          <p class="mortgage-value">
            Aug 2020
          </p>
          <p class="mortgage-value">
            Sep 2020
          </p>
          <p class="mortgage-value">
            Oct 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Nov 2020
          </p>
          <p class="mortgage-value">
            Jan 2021
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
    @import '../../sass/colors.sass'

    .mortgage-calc
        max-width: 55%
        margin: 0 auto

    .mortgage-calc h2
        margin: 33px 0 36px

    .mortgage-wrapper
        display: flex
        flex-wrap: wrap

    .mortgage-item
        flex-basis: 16.666665%
        text-align: center
        margin-left: 1px

    .mortgage-label
        font-family: Poppins
        color: $text-color
        font-size: 10px
        font-weight: 300
        padding-bottom: 17px
        margin-bottom: 15px

    .label1
        border-bottom: 4px solid $misc-color-1

    .label2
        border-bottom: 4px solid $highlight-color-3

    .label3
        border-bottom: 4px solid $highlight-color-2

    .label4
        border-bottom: 4px solid $highlight-color-1

    .label5
        border-bottom: 4px solid $misc-color-1

    .label6
        border-bottom: 4px solid $highlight-color-4

    .mortgage-block-value
        border-right: 1px dashed $primary-light-color

    .mortgage-value
        font-weight: 600
        line-height: 22px
        margin-bottom: 7px


    @media (max-width: 1024px)
        .mortgage-item
            flex-basis: 33%
            text-align: center
            margin-left: 1px
            padding-bottom: 30px

</style>

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
