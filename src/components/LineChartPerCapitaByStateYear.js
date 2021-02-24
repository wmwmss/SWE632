import React from 'react'
import ReactHighcharts from 'react-highcharts';
import beerConsumptionData from '../data/beer_consumption_data.json'
import LineChartService from '../services/LineChartService';
import PropTypes from "prop-types";

const LineChartPerCapitaByStateYear = (props) => {
    const config = LineChartService.getConfig(props.states, props.years, props.reportType);
    
    return (
        <ReactHighcharts config={config}></ReactHighcharts>
    );
};

LineChartPerCapitaByStateYear.propTypes = {
    states: PropTypes.array,
    years: PropTypes.array,
    reportType: PropTypes.string
};

LineChartPerCapitaByStateYear.defaultProps = {
    states: Object.keys(beerConsumptionData),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    reportType: "ConsumptionPerCapitaLineChart"
};

export default LineChartPerCapitaByStateYear;