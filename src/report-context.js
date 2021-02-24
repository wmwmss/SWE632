import React from 'react'
const ReportContext = React.createContext()
function useReportContext() {
  const context = React.useContext(ReportContext)
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  return context
}
function ReportContextProvider(props) {
  const [filters, setFilters] = React.useState({ states: [], years: [], reportType: "TotalConsumptionLineChart" });
  const value = React.useMemo(() => [filters, setFilters], [filters])
  return <ReportContext.Provider value={value} {...props} />
}

export {ReportContextProvider, useReportContext}