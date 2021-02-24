import React from 'react';
import LineChartByStateYear from '../components/LineChartByStateYear';
import LineChartByPerCapitaStateYear from '../components/LineChartPerCapitaByStateYear';
import PieChartByState from '../components/PieChartByState';
import ReportService from '../services/ReportService';
import { PropTypes } from "prop-types";

/**
 * @desc Chart page to display the results
 * @param {*} props
 */
const Chart = (props) => {
    const states = props.filters.states;
    const years = props.filters.years;
    const reportType = props.filters.reportType;
    switch (reportType) {
        case "TotalConsumptionLineChart":
            return (
                <LineChartByStateYear states={states} years={years} reportType={reportType} />
            );
        case "ConsumptionPerCapitaLineChart":
            return (
                <LineChartByPerCapitaStateYear states={states} years={years} reportType={reportType} />
            );
        case "TotalConsumptionPieChart":
            const year = props.filters.years[0];
            const reportData = ReportService.getDataByConsumption(year);

            return (
                <PieChartByState states={reportData.states} data={reportData.data} chartTitle={`Overall consumption by state in ${year}`} />
            );
        default:
            return (
                <LineChartByStateYear></LineChartByStateYear>
            );
    }
};

Chart.propTypes = {
    filters: PropTypes.object.isRequired
};


export default Chart;