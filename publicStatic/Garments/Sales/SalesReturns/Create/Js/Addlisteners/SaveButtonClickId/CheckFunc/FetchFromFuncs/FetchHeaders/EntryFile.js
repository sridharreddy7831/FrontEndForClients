import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalQrCode = await jFLocalQrCode();
    let jVarLocalSRRef = await jFLocalSRRefId();

    KeysJson.body.FilterCondition = `e.pk=='${jVarLocalQrCode}' && e.BillPk=='${jVarLocalSRRef}'`;
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalSRRefId = async () => {
    let jVarLocalSRRefId = 'SRRefId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSRRefId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalQrCode = async () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }