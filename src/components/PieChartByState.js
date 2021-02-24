import React from 'react'
import ReactHighcharts from 'react-highcharts';
import PieChartService from '../services/PieChartService';
import PropTypes from "prop-types";

const PieChartByState = (props) => {
    const config = PieChartService.getConfig(props.states, props.data, props.chartTitle);
    
    return (
        <ReactHighcharts config={config}></ReactHighcharts>
    );
};

PieChartByState.propTypes = {
    states: PropTypes.array,
    data: PropTypes.array,
    chartTitle: PropTypes.string
};

PieChartByState.defaultProps = {
    chartTitle: "Beer consumption by state"
};

export default PieChartByState;