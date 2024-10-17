import BodyKeysJson from "../../../ConfigKeys/FetchKeys/ForPostKeys.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {}

    jVarLocalBodyData.FolderName = BodyKeysJson.inFolderName;
    jVarLocalBodyData.FileNameOnly ="QrCodeDetails";
    jVarLocalBodyData.ItemName = "QrCodeDetails";
    jVarLocalBodyData.MapString = "VoucherRef";

    return jVarLocalBodyData;
    
};

export { StartFunc };