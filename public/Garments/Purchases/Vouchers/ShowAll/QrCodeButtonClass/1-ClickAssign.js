import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = ({ inProjectName }) => {

    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("PostQrCodeButtonClass");
    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener("click", async (event) => StartFuncButtonClickFunc({ inProjectName, inEvent: event }));
    };
};

export { StartFunc };
