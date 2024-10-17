import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let jVarLocalFetchUrl = `/${ConfigJson.StartUrl}/Items/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };