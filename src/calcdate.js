import { DateTime } from "./luxon.js";

export const calcDates = (firstDate, secondDate) => {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        secondDate = [firstDate, firstDate = secondDate][0];
    }
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const renderCalcDates = (result) => `
    <span>
        ${result.years ? 'Years: ' + result.years : ''}
        ${result.months ? 'Months: ' + result.months : ''}
        ${result.days ? 'Days: ' + result.days : ''}
    </span>
`;