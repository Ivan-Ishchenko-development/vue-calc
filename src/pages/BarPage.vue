<template>
  <div class="container py-24 mx-auto">
    <calculator-options
      v-model="options"
      class="max-w-sm flex-1"
    />
    <h2>Chart View</h2>
    <bar-chart v-bind="{ chartData }" />
    <pre
      class="max-w-sm mx-auto"
      v-text="result"
    />
  </div>
</template>

<style scoped>

</style>

<script>
  import CalculatorOptions from "./components/CalculatorOptions"
  import BarChart from "./components/BarChart"
  import moment from "moment"

  export default {
    components: {
      CalculatorOptions, BarChart
    },
    data() {
      return {
        options: {
          type: 'fha',
          property_price: 250000,
          down_payment: 8750,
          interest_rate: 4,
          annual_insurance: 10,
          legend: {
            display: true,
            position: 'bottom',
          }
        }
      }
    },
    computed: {
      result() {
        return window.calculate(this.options)
      },
      years() {
        var years = [];
        var dateStart = moment();
        var dateEnd = moment().add(30, 'y');

        while (dateEnd.diff(dateStart, 'years') >= 0) {
          years.push(dateStart.format('[Year] YYYY'))
          dateStart.add(1, 'year')
        }
        return years
      },
      chartData() {

        return {
          labels: this.years,
          datasets: [{
            label: "Principal",
            backgroundColor: '#15AF85',
            borderColor: '#FFFFFF',
            borderWidth:{top:4, right:0, bottom:0, left:0 },
            data: [1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,],
          },{
            label: "Interest",
            backgroundColor: '#2AC7F2',
            borderColor: '#FFFFFF',
            borderWidth:{top:4, right:0, bottom:0, left:0 },
            data: [1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,]
          },{
            label: "Tax, Insurance, PMI",
            backgroundColor: '#EAC826',
            borderColor: '#FFFFFF',
            borderWidth:{top:4, right:0, bottom:0, left:0 },
            data: [1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,]
          },{
            label: "Balance x 100",
            backgroundColor: '#D05273',
            borderColor: '#FFFFFF',
            borderWidth:{top:4, right:0, bottom:0, left:0 },
            data: [1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,1300,]
          }
          ]
        }
      }
    },

  }
</script>
