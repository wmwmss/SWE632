import React from "react";
import { Jumbotron } from "react-bootstrap";

/**
 * @desc About page that contains information of the project and the team members
 */
export default function About() {
  return (
    <>
      <Jumbotron>
        <h1 className="header">About</h1>
        <p></p>
        <p>
          This application was created by Weifeng Xu, Xu Han, and Joe Shannon for SWE 632: <i>User Interface Design and Development</i> at George Mason University (GMU) in Fall of 2020. It is built using data from the following sources:
          <ul>
            <li><a href="https://www.census.gov/data/tables/time-series/demo/popest/2010s-state-total.html" rel="noopener noreferrer" target="_blank">US Census Bureau&mdash;State Population Totals and Components of Change: 2010-2019</a></li>
            <li><a href="https://www.ttb.gov/beer/statistics" rel="noopener noreferrer" target="_blank">US Alcohol and Tobacco Tax and Trade Bureau&mdash;Beer Statistics: Yearly Statistical - Beer Data By State (2008-2019) </a></li>
          </ul>
        </p>
        <h2 className="header">About the project</h2>
        <p>
          In this project, we have gathered publicly available beer data by state
          from the US Alcohol and Tobacco Tax and Trade Bureau along with
          population data from the US Census Bureau, and have correlated them in
          order to produce charts and graphs. So far we are able to present the
          beer data to you guys with time series by year for each state, pie chart
          by state of annual share of consumption, line chart by state per capita
          for annual consumption, ... and more! This site is developed using React
          and the visualization is based on Highcharts. The application is served
          out of an AWS S3 bucket.
        </p>
        <h2 className="header">Our Team</h2>
        <p>Joe Shannon - Last year in Masters in Software Engineering. Favorite Beer: Westvleteren 12. </p>
        <p>Weifeng Xu - Last year in Masters in Software Engineering.</p>
        <p>
          Xu Han - Second year graduate student in IT, not a big fan of beer but
          can sort of comprehend it.
        </p>
      </Jumbotron>
    </>
  );
}
