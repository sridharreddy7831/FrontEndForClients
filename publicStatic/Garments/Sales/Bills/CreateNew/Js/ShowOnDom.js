import { StartFunc as StartFuncBillNumber } from "./fetch.js";
import { StartFunc as SuggestCustomerNames } from "./SuggestCustomerNames.js";
import { StartFunc as SuggestCustomerNumbers } from "./SuggestCustomerNumbers.js";

const StartFunc = () => {
    jFShowDateTime()
    StartFuncBillNumber();
    SuggestCustomerNames();
    SuggestCustomerNumbers();
};

const jFShowDateTime = () => {
    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() );

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('Date').value = formattedSevenDaysAgo;
};

export { StartFunc }