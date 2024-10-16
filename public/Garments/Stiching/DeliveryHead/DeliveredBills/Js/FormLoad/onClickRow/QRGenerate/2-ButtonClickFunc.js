import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";

let StartFunc = async ({ inRowData }) => {

    if (StartFuncCheckBeforeFetch()) {
        StartFuncFetchFunc({ inRowData }).then(ResponseData => {

        });

    }
};

export { StartFunc };