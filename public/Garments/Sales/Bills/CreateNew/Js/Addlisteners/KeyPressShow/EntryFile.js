import { StartFunc as StartFuncButtonClickFunc } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let jVarLocalCustomerNumber = document.getElementById("CustomerNumber");

    if (jVarLocalCustomerNumber === null === false) {
        jVarLocalCustomerNumber.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) {
                StartFuncButtonClickFunc();
            }
        });
    };
};

export { StartFunc };