import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalNewSaveId = document.getElementById("AccountNameId");
    
    if (jVarLocalNewSaveId === null === false) {
        jVarLocalNewSaveId.addEventListener("keypress", (event) => {
            if (event.keyCode === 13) { // key code of the keybord key
                StartFuncButtonClickFunc();
            };

        });
    };
};

export { StartFunc };