import beerConsumptionData from '../data/beer_consumption_data.json'
import stateAbbr from '../data/statesAbbr.json'

/**
 * @desc Report service
 */
class ReportService {
    static getDataByConsumption(year) {
        const stateVals = [];
        let total = 0;

        Object.keys(beerConsumptionData).forEach((currentState) => {
            let currentValue = beerConsumptionData[currentState][year];
            let stateFullName = stateAbbr[currentState];
            stateVals.push({ state: stateFullName, data: currentValue });
            total += currentValue;
        });

        const sortedArray = stateVals.sort((a, b) => {
            if (a.data < b.data) {
                return 1;
            } else if (a.data > b.data) {
                return -1;
            } else {
                return 0;
            };
        });

        const top10 = sortedArray.slice(0, 10);

        let top10Sum = 0;

        top10.forEach((currentState) => {
            top10Sum += currentState.data;
            currentState.y = currentState.data / total;
            currentState.name = currentState.state;

        });

        top10.push({
            state: "All Others",
            data: {
                y: (total - top10Sum) / total,
                total: total,
                name: "All Others"
            }
        });

        top10.forEach((state) => {
            state.formattedValue = Math.round(state.data / 100000) / 10;
        })
        return {
            states: top10.map((item) => item.state),
            data: top10
        };

    }

    static getStates() {
        let states_abbr = Object.keys(beerConsumptionData);
        let states = [];
        for (var i = 0; i < states_abbr.length; i++)
            states[i] = stateAbbr[states_abbr[i]];
        return states;

    }

    static getYears() {
        let states = Object.keys(beerConsumptionData);

        return Object.keys(beerConsumptionData[states[0]]);

    }

    static getStateData(state, year) {
        return beerConsumptionData[state][year];
    }
}

export default ReportService;