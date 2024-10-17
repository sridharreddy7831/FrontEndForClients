import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as FromServer } from "./FromServer/EntryFile.js";
import { StartFunc as ToDom } from "./ToDom.js";

let StartFunc = async () => {
    if (StartFuncCheckFunc()) {
        let jVarLocalFromDate = jFLocalstartDateId();
        let jVarLocalToDate = jFLocalendDateId();

        let jVarLocalArray = await FromServer({ inFromDate: jVarLocalFromDate, inToDate: jVarLocalToDate });
        ToDom({ inDataAsArray: jVarLocalArray });
    };
};

let jFLocalstartDateId = () => {
    let jVarLocalstartDateId = 'startDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalstartDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalendDateId = () => {
    let jVarLocalendDateId = 'endDateId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalendDateId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
