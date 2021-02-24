import React from 'react'
import ReactHighcharts from 'react-highcharts';
import beerConsumptionData from '../data/beer_consumption_data.json'
import LineChartService from '../services/LineChartService';
import PropTypes from "prop-types";

const LineChartByStateYear = (props) => {
    const config = LineChartService.getConfig(props.states, props.years.sort(), props.reportType);
    return (
        <ReactHighcharts config={config}></ReactHighcharts>
    );
};

LineChartByStateYear.propTypes = {
    states: PropTypes.array,
    years: PropTypes.array,
    reportType: PropTypes.string
};

LineChartByStateYear.defaultProps = {
    states: Object.keys(beerConsumptionData),
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    reportType: "TotalConsumptionLineChart"
};

export default LineChartByStateYear;