import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncForAccountNames } from "./ForDataList/AccountNames/GetFetch.js";

const StartFunc = () => {
    StartFuncForAccountNames();
    StartFuncAddListeners();
    jFLocalModalShown();
};

let jFLocalModalShown = () => {
    let jVarLocalHtmlId = "largeModal";
    let jVarLocallargeModal = document.getElementById(jVarLocalHtmlId);

    jVarLocallargeModal.addEventListener('shown.bs.modal', event => {
        let jVarLocalHtmlId = "customSearch";
        let jVarLocalcustomSearch = document.getElementById(jVarLocalHtmlId);
        jVarLocalcustomSearch.focus();
    });
};

export { StartFunc };
