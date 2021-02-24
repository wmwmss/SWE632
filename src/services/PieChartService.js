class PieChartService {
    static getConfig(states, data, chartTitle) {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: 500,
            },
            title: {
                text: chartTitle,
                style:{
                    fontSize:'24px'
                }
            },
            tooltip: {
                pointFormat: '% of overall: <b>{point.percentage:.1f}%</b><br>Total gallons: <b>{point.formattedValue} million gallons</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style:{
                            fontSize:'12px'
                        }
                    }
                }
            },
            series: [{
                colorByPoint: true,
                data: data
            }]
        };
    }

    static getSeriesData(states, data) {
        const series = [];

        states.forEach((item, index) => {
            series.push({ name: item, y: data[index] });
        })

        return series;
    }
 }

export default PieChartService;