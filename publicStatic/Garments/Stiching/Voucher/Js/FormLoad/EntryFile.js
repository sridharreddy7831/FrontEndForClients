import { StartFunc as StartFuncForAccountNames } from "./ForDataList/AccountNames/GetFetch.js";
import {StartFunc as StartFuncForSuggestCustomerNames} from "./SuggestCustomerNames.js"
import {StartFunc as StartFuncForSuggestCustomerNumbers} from "./SuggestCustomerNumbers.js"


const StartFunc = () => {
    StartFuncForSuggestCustomerNames();
    StartFuncForSuggestCustomerNumbers();
    StartFuncForAccountNames();
};

export { StartFunc };
