import React from 'react';
import Chart from './Chart'
import { Button } from "react-bootstrap";
import { useReportContext } from '../report-context'
import { useHistory } from "react-router-dom";

const GraphicDisplay = () => {
    let history = useHistory();
    const goBackSearch = () => {
        history.push("/search");
    }
    const [filters] = useReportContext();
    return (
        <div>
            <Chart filters={filters} />
            <Button variant="primary" type="submit" onClick={goBackSearch} size="lg">
                Back To Search
      </Button>
        </div>
    )
};

export default GraphicDisplay;