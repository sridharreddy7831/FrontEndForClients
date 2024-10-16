import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalFileValue = BodyKeysJson.inFileNameOnly;
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});
    if (jVarLocalFilterString === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        });
        
    }
    jVarLocalBodyKeysJson.FolderName = BodyKeysJson.inFolderName;
    jVarLocalBodyKeysJson.FileNameOnly = jVarLocalFileValue.search(".") === -1 ? jVarLocalFileValue : jVarLocalFileValue.split(".")[0]
    jVarLocalBodyKeysJson.ItemName = BodyKeysJson.inItemName;
    jVarLocalBodyKeysJson.FilterString = `value.VoucherRef === '${jVarLocalFilterString}'`;
    
    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }