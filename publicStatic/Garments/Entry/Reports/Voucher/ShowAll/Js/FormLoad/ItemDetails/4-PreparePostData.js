import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {}

    jVarLocalBodyData.FolderName = BodyKeysJson.inFolderName;
    jVarLocalBodyData.FileNameOnly = BodyKeysJson.inFileNameOnly;
    jVarLocalBodyData.ItemName = "QrCodeDetails";
    jVarLocalBodyData.MapString = "VoucherRef";

    return jVarLocalBodyData;
    
};

export { StartFunc };