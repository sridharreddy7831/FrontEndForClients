import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";

let StartFunc = async ({ inFromFetch, inRowData }) => {
    clearModalContent();
    StartFuncPrintHeader({ InData: inRowData });
    StartFuncPrintBody({ InData: inFromFetch });
    $('#showModalId').modal('show');
};

const clearModalContent = () => {
    let k1 = document.getElementById("PrintDiv");
    k1.innerHTML = '';
};
export { StartFunc };
