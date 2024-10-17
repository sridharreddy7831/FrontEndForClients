import { StartFunc as StartFuncQrCodeButtonClass } from "./QrCodeButtonClass/1-ClickAssign.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    StartFuncQrCodeButtonClass({ inProjectName });
};

export { StartFunc };