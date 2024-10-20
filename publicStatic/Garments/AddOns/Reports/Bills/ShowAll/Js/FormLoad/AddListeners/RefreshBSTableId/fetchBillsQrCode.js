import { StartFunc as StartFuncBillsQrCodeExpenFile } from "./OnExpandRowFunc.js";
import posUrlJson from './posUrl.json' with {type: 'json'};
import BillQR from './BilllQr.json' with {type: 'json'};
import ConfigJson from '../../../Config.json' with {type: 'json'};



let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;
    let jVarLocalFetchUrl = BillQR.url;
    
    const response = await fetch(`/${jVarLocalStartUrl}/${jVarLocalFetchUrl}`);

    const text = await response.json();
    return text;
};

export { StartFunc }