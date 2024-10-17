import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../../../../ConfigKeys/FetchKeys/ForPostKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});

    jVarLocalBodyKeysJson.FolderName = BodyKeysJson.inFolderName;
    jVarLocalBodyKeysJson.FileNameOnly = "VoucherDetails";
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