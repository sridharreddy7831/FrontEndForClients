import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {

    let jVarLocalButtonClassName = document.getElementById("InvTableFooterSaveButtonId");
   
    if (jVarLocalButtonClassName !== null) {
        jVarLocalButtonClassName.addEventListener("click", async (event) => {
            event.preventDefault();
             StartFuncButtonClickFunc();

        });
    };
};

export { StartFunc };