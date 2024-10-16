import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import {StartFunc as StartFuncForSuggestedItems} from "./SuggestedItems.js"

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncForSuggestedItems();
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
