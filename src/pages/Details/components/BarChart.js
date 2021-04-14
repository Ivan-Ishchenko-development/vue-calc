

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
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var label = data.labels[tooltipItem.index];
                            var datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            datasetLabel.toLocaleString('en-US',
                                {style: 'currency', currency: 'USD'}
                            );
                            return(
                                new Intl.NumberFormat('en-US',
                                    { style: 'currency', currency: 'USD' }
                                ).format(datasetLabel)
                            )
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 30,
                        usePointStyle: true,
                    },
                },
                borderDash: [1],
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.92,
                        barPercentage: 0.92,
                        stacked: true,
                        offset: true,
                        ticks: {
                            beginAtZero: false,
                            minRotation: 90,
                            maxRotation: 90,
                            padding: 0,
                        },
                        gridLines : {
                            display : false,
                        },
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
                            z: 1,
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


