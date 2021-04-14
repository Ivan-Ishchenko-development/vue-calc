export default {
  /**
     * Extend Bar chart.
     *
     * @type {Object}
     */
  extends: require('vue-chartjs').Doughnut,

  /**
     * Component mixins.
     *
     * @type {Array}
     */
  mixins: [
    require('vue-chartjs').mixins.reactiveProp
  ],

  data: function () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    }
  },

  /**
     * Handle component "mounted" event.
     *
     * return {void}
     */
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
