import { StartFunc as StartFuncDeleteFuncs } from "./ButtonFuncsForDelete/DeleteFuncs.js";
import { StartFunc as StartFuncQrCodeGeneration } from "./Pages/QrCodeGeneration/ButtonClicks.js";

import { StartFunc as StartFuncKeyPressFuncs } from "./Pages/ProductsTab/KeyPressFuncs.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    LocalDeleteButtonClassAddFuncs({ inFolderName, inFileName, inItemName, inProjectName });
    StartFuncAddListeners();

    StartFuncKeyPressFuncs();
    StartFuncQrCodeGeneration();
};

let LocalDeleteButtonClassAddFuncs = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalDeleteButtons = document.getElementsByClassName("DeleteButtonClass");

    for (var i = 0; i < jVarLocalDeleteButtons.length; i++) {
        jVarLocalDeleteButtons[i].addEventListener("click", async (event) => {
            await StartFuncDeleteFuncs({
                inFolderName, inFileName, inItemName, inProjectName,
                inEvent: event
            })
        });
    };

};




export { StartFunc };