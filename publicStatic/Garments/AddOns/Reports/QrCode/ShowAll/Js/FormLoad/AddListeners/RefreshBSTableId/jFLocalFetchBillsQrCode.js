import ConfigJson from '../../../Config.json' with {type: 'json'};

let jFLocalFetchBillsQrCode = async () => {
    const jValjFLocalFetchBillsQrCode = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${jValjFLocalFetchBillsQrCode}/BillsQrCode/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};



export { startFunc }