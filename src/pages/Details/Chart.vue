<template>
  <div class="container mx-auto">
    <h2 class="mt-8">Chart View</h2>
    <bar-chart v-bind="{ chartData }" />
  </div>
</template>

<style scoped>

</style>

<script>
  import BarChart from "./components/BarChart"
  import moment from "moment"

  export default {
    components: {
      BarChart
    },
    data() {
      return {
          principal: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 1500],
          interest: [2050, 2900, 2800, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0],
          tip: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 0],
          balance: [5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200,5500,5500,5000,5200]
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

        while (dateEnd.diff(dateStart) >= 0) {
          years.push(dateStart.format('[Year] YYYY'))
          dateStart.add(1, 'year')
            console.log(dateStart)
        }
        console.log(years);
        return years
      },
      chartData() {
        return {
          labels: this.years,
          datasets: [{
            label: "Principal",
            backgroundColor: '#15AF85',
            borderStyle: 'solid',
            borderColor: '#FFFFFF',
            borderWidth:{top: 2, right:0, bottom:0, left:0 },
            stack: "Monthly Payment",
            data: this.principal,
              order: 1,
          },{
            label: "Interest",
            backgroundColor: '#2AC7F2',
            borderColor: '#FFFFFF',
            borderWidth:{top:2 , right:0, bottom: 0, left:0 },
              stack: "Monthly Payment",
            data: this.interest,
              order:2,
          },{
            label: "Tax, Insurance, PMI",
            backgroundColor: '#EAC826',
              stack: "Monthly Payment",
            data: this.tip,
              order: 3,
          },{
              type: 'line',
            label: "Balance x 100",
            backgroundColor: '#D05273',
              fill: false,
              borderColor: '#D05273',
            data: this.balance,
              order: 4,
          }
          ]
        }
      }
    },

  }
</script>
