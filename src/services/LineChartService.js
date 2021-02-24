import beerConsumptionData from '../data/beer_consumption_data.json'
import stateAbbr from '../data/statesAbbr.json'
import censusData from '../data/census_data.json'

/**
 * @desc Line chart service
 */
class LineChartService {
    static getConfig(states, years, reportType) {
        return {
            chart: {
                type: 'line',
                height: 600
            },
            title: {
                text: this.getChartTitle(states, years, reportType),
                style: {
                    fontSize: '24px'
                }
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'linear',
                labels: {
                    style: {
                        fontSize: '12px',
                        color: 'black'
                    }
                }

            },
            yAxis: {
                title: {
                    text: this.getYAxisTitle(reportType),
                    style: {
                        fontSize: '18px',
                        color: 'black'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px',
                        color: 'black'
                    }
                },
                type: (reportType === 'ConsumptionPerCapitaLineChart') ? 'linear' : 'logarithmic',

            },
            tooltip: this.getTooltip(states),
            plotOptions: {
                line: {
                    enableMouseTracking: true
                }
            },
            series: this.getSeries(states, years, reportType)
        };
    }

    static getSeries(states, years, reportType) {
        const series = [];

        // states.forEach((state) => {
        //     let key = Object.keys(stateAbbr).find(key => stateAbbr[key] === state);
        //     let dataset = beerConsumptionData[key];
        //     let dataset2 = censusData[key];
        //     let values = [];
        //     if (reportType === "ConsumptionPerCapitaLineChart") {
        //         years.forEach((year) => {
        //             values.push({
        //                 y: dataset[year] / dataset2[year],
        //                 formatted: Math.round(dataset[year] / dataset2[year] * 10) / 10 + " gallons"
        //             });
        //         });
        //     }
        //     else {
        //         years.forEach((year) => {
        //             values.push({
        //                 y: dataset[year],
        //                 formatted: Math.round(dataset[year] / 10000) / 100 + " million gallons"
        //             });
        //         });
        //     }
        //     series.push({
        //         name: state,
        //         data: values
        //     });
        // });
        states.forEach((state) => {
            let key = Object.keys(stateAbbr).find(key => stateAbbr[key] === state);
            let dataset = beerConsumptionData[key];
            let dataset2 = censusData[key];
            let values = [];
            if (reportType === "ConsumptionPerCapitaLineChart") {
                years.forEach((year) => {
                    values.push({
                        x: parseInt(year),
                        y: dataset[year] / dataset2[year],
                        formatted: Math.round(dataset[year] / dataset2[year] * 10) / 10 + " gallons"
                    });
                });
            }
            else {
                years.forEach((year) => {
                    values.push({
                        x: parseInt(year),
                        y: dataset[year],
                        formatted: Math.round(dataset[year] / 10000) / 100 + " million gallons"
                    });
                });
            }
            series.push({
                name: state,
                data: values
            });
        });
        console.log(series);
        return series;
    }

    static getChartTitle(states, years, reportType) {
        const string1 = (reportType === "ConsumptionPerCapitaLineChart" ? "Beer Consumption Per Capita of " : "Beer Consumption of ");
        if (years.length === 1) {
            if (states.length === 1) {
                return string1 + states[0] + " in " + years[0];
            }
            else
                return string1 + "selected states in " + years[0];
        }
        else {
            if (states.length === 1)
                return string1 + states[0] + " by year";
            else
                return string1 + "selected states by year";
        }
    }

    static getTooltip(states) {
        if (states.length === 1) {
            return {
                headerFormat: '',
                pointFormat: '<b>{point.formatted}</b>',
                nullFormat: '<b>{point.formatted}</b>',
                shared: false,
                useHTML: true,
                outside: true
            };
        }

        return {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.formatted}</b></td></tr>',
            nullFormat: '{point.formatted}</b>',
            footerFormat: '</table>',
            shared: false,
            useHTML: true,
            outside: true
        };
    }

    static getLegendEnabled(states) {
        return states.length > 1;
    }

    static getYAxisTitle(reportType) {
        return (reportType === "ConsumptionPerCapitaLineChart" ? "Personal Beer comsuption (gallons)" : "Total Beer comsuption (gallon)");
    }
}

export default LineChartService;