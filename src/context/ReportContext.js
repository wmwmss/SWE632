import React from 'react';

export const ReportContext = React.createContext(
    {
        reportType: 'pieChartByConsumption',
        states: ["NJ"],
        years: [2013],
        state: ""
    }
);