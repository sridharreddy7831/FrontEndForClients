import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalFileValue = BodyKeysJson.inFileNameOnly;
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});

    jVarLocalBodyKeysJson.FolderName = BodyKeysJson.inFolderName;
    jVarLocalBodyKeysJson.FileNameOnly = jVarLocalFileValue.search(".") === -1 ? jVarLocalFileValue : jVarLocalFileValue.split(".")[0]
    jVarLocalBodyKeysJson.ItemName = "VoucherDetails";
    jVarLocalBodyKeysJson.FilterString = `value.pk === ${jVarLocalFilterString}`;
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