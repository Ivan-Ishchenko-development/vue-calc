export default {
    /**
     * Extend Bar chart.
     *
     * @type {Object}
     */
    extends: require('vue-chartjs').Bar,

    /**
     * Component mixins.
     *
     * @type {Array}
     */
    mixins: [
        require('vue-chartjs').mixins.reactiveProp,
    ],

    data: function() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                    },
                },
                borderDash: [1],
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            minRotation: 90,
                            maxRotation: 90,
                        },
                        gridLines : {
                            display : false
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 6000,
                            stepSize: 1200,
                            callback: function (value, index, values) {
                                if (parseInt(value) >= 1000) {
                                    return '$' + Math.sign(value)*((Math.abs(value)/1000).toFixed(1)) + 'k';
                                } else {
                                    return '$' + value;
                                }
                            }
                        },
                        gridLines: {
                            // You can change the color, the dash effect, the main axe color, etc.
                            borderDash: [4, 4],
                        }
                    }]
                }
            }
        }
    },

    /**
     * Handle component "mounted" event.
     *
     * return {void}
     */
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}
