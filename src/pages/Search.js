import React, { useState } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ReportService from "../services/ReportService.js"
import { useReportContext } from "../report-context.js";
import DropdownMultiple from "../components/DropdownMultiple";
import Notes from "../components/notes";
import "./Search.css"
import MultiCheckBoxList from '../components/MultiCheckBoxList'
import { color } from "highcharts";

const SearchTest = (props) => {
    const [filters, setFilters] = useReportContext();
    let history = useHistory();
    let states = filters.states;
    let years = filters.years;
    let reportType = filters.reportType;
    const [errorMsg, setErrorMsg] = useState("");

    // When the form is submitted, get all the values out of state and set them into the context
    const submitHandler = (submitEvent) => {
        submitEvent.preventDefault(); // Ensure the form doesn't actually submit

        if (reportType === "Select a Report Type") {
            setErrorMsg("Please select Report Type");
            return;
        }
        if (states.length === 0) {
            setErrorMsg("Please select at least one state");
            return;
        }
        if (years.length === 0) {
            setErrorMsg("Please select at least one year");
            return;
        }
        setErrorMsg("");
        history.push("/chart");
    }

    const updateFilters = () => {
        setErrorMsg("");
        setFilters({ states: states, years: years, reportType: reportType });
    }

    // const updateStatesDropdown = (e) => {
    //     const selectedOptions = e.target.selectedOptions;
    //     states = [];
    //     // if (selectedOptions.length > 3)
    //         // setNeedCheck(true);
    //     for (var i = 0; i < selectedOptions.length; i++)
    //         states.push(selectedOptions[i].value);
    //     //        console.log(states);
    //     /*       const values = event;
    //            if (values === null)
    //                states = [];
    //            else {
    //                for (let i = 0; i < values.length; i++) {
    //                    states.push(values[i].value);
    //                }
    //            }*/
    //     updateFilters();
    // }

    const updateStates = (values) => {
        states = values;
        updateFilters();
    }

    const updateYears = (values)=>{
        years = values;
        console.log(years);
        updateFilters();
    }
    // const updateYearsDropdown = (event) => {
    //     years = [];
    //     const options = event.target.options;
    //     for (var i = 0; i < options.length; i++) {
    //         if (options[i].selected) {
    //             var value = options[i].value;
    //             if (!years.includes(value)) {
    //                 years.push(value);
    //             }

    //         }
    //     }
    //     updateFilters();
    // }

    const updateReportType = (value) => {
        if (reportType.includes("Pie")) {
            states = [];
        }
        reportType = value;
        if (reportType.includes("Pie")) {
            states = ReportService.getStates();
            years = ReportService.getYears().slice(0, 1);
        }
        updateFilters();
    }

    const reportTypeUpdateStateString = () => reportType.includes("Pie") ? "Select All States" : "Select One or More States";

    const reportTypeUpdateYearString = () => reportType.includes("Pie") ? "Select One Year" : "Select One or More Years";

    return (
        <Jumbotron>
            <h1 className="header">Search</h1>
            <p></p>
            <Form onSubmit={submitHandler}>
                {/* When the state changes, set the value in the component state*/}
                <h6>Select a Report Type</h6>
                <Form.Group controlId="reportType" className="selectcontrol">
                    <Form.Control as="select" value={reportType} onChange={(event) => updateReportType(event.target.value)} >
                        <option value="TotalConsumptionLineChart">Total Consumption by State (Line Chart)</option>
                        <option value="TotalConsumptionPieChart">Top 10 States: Percentage of Overall Consumption By Year (Pie Chart)</option>
                        <option value="ConsumptionPerCapitaLineChart">Consumption Per Capita (Line Chart)</option>
                    </Form.Control>
                </Form.Group>
                {!reportType.includes("Pie") && (
                    <>
                        <h6>{reportTypeUpdateStateString()} <span>(Up to 10)</span></h6>

                        <MultiCheckBoxList
                            selectedAll={false}
                            maxNum={10} 
                            selectedList={states}
                            items={ReportService.getStates()}
                            multiple={true}
                            onChange={updateStates}
                            includeFilter={true}
                            height = {600}
                        />
                    </>
                )}
                <br></br>
                <h6>{reportTypeUpdateYearString()}</h6>

                <MultiCheckBoxList
                    selectedAll={true}
                    maxNum={1000} 
                    selectedList={years}
                    items={ReportService.getYears()}
                    multiple={!reportType.includes("Pie")}
                    onChange={updateYears}
                    includeFilter={false}
                    height = {600}
                />
                {/* {!reportType.includes("Pie") && (<Notes></Notes>)} */}
                <br></br>
                <Button variant="primary" type="submit" size="lg">
                    Search
                </Button> <span className="errormsg">{errorMsg}</span>
            </Form>
        </Jumbotron>
    );
};

export default SearchTest;