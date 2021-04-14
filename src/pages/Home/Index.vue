<template>
  <div class="container py-24 mx-auto">
    <div class="flex justify-around">
      <calculator-options
        v-model="options"
        class="max-w-sm flex-1"
      />

      <div>
        <h2>Monthly Payments Breakdown</h2>
        <doughnut-chart v-bind="{ chartData }" />
        <chart-results :result="result" />
      </div>
    </div>
  </div>
</template>

<script>
  import ChartResults from "./components/ChartResults"
  import DoughnutChart from "./components/DoughnutChart"
  import CalculatorOptions from "./components/CalculatorOptions"

  export default {
    /**
     * Local components.
     *
     * @type {Object}
     */
    components: {
      ChartResults, DoughnutChart, CalculatorOptions,
    },

    /**
     * Component reactive data.
     *
     * @return {Object}
     */
    data() {
      return {
        options: {
          type: 'fha',
          property_price: 250000,
          down_payment: 8750,
          interest_rate: 4,
          annual_insurance: 10,
        }
      }
    },

    /**
     * Computed properties.
     *
     * @type {Object}
     */
    computed: {
      /**
       * Get result
       *
       * @return {Object}
       */
      result() {
        return window.calculate(this.options)
      },

      /**
       * Graph data.
       *
       * @return {Object}
       */
      chartData() {
        const map = {
          insurance: "Insurance",
          principal_and_interest: "Principal & Interest",
          taxes_and_hoa: "Taxes & Hoa",
          monthly_hoa: "Monthly Hoa"
        }

        return {
          labels: Object.keys(this.result.breakdown).map(key => map[key]),
          datasets: [{
            label: "Insurance Payments",
            data: Object.values(this.result.breakdown),
            backgroundColor: [
              '#EAC826',
              '#2AC7F2',
              '#15AF85',
              '#D05273',
            ],
          }]
        }
      }
    }
  }
</script>
