import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncDCDetails } from "./RefreshBSTableId/FetchFromFuncs/DCDetails/Entry.js";
let StartFunc = () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});
    if (jVarLocalFilterString === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        }); 
    }else{
        StartFuncDCDetails();
        StartFuncRefreshBSTableId();
    }

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };