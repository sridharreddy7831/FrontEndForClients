import { StartFunc as StartFuncBSTableNewUrl } from "./BSTableNewUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = 'ShowAlertIdId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    jVarlocalBSTreeId.addEventListener("click", () => StartFuncBSTableNewUrl());
};

export { StartFunc };