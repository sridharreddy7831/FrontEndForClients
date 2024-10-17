import { StartFunc as StartFuncPrintHeader } from "./PrintHeader.js";
import { StartFunc as StartFuncPrintBody } from "./PrintBody.js";

let StartFunc = async ({ inFromFetch, inRowData }) => {
    StartFuncPrintHeader({ InData: inRowData });
    StartFuncPrintBody({ InData: inFromFetch });
    $('#showModalId').modal('show');
};

export { StartFunc };
